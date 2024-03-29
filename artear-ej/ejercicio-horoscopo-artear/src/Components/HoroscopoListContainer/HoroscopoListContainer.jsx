import { useEffect, useContext, useState } from "react";
import { NotFound } from "../NotFound/NotFound.jsx"
import { HoroscopoList } from "../HoroscopoList/HoroscopoList.jsx";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";
import reactLogo from '../../assets/react.svg'
import "./HoroscopoListContainer.css";


export const HoroscopoListContainer = () => {
    const { valueOrderBy, searchHoroscopo } = useContext(HoroscopoContext);
    const [isLoading, setIsLoading] = useState(true);
    const [dataBySearch, setDataBySearch] = useState([]);
    const [dataHoroscopo, setDataHoroscopo] = useState([]);
    // estos datos sensibles se deberian de guardar en una archivo de variables
    const URL = 'http://localhost:3001';
    const DATA = 'zodiac_signs';

    // funcion que se le pasa el valor de la busqueda en la searchbar y  lo filtro para encontrar los que tienen incluido en su nombre el valor de la busqueda 
    // (ej: "ta" => Tauro y Sagitario)
    // lo seteo en dataBySearch (resultados de los datos despues de filtrarlos)
    const searchbarHoroscopo = (searchHoroscopo) => {
        const filteredHoroscopos = dataHoroscopo.filter(horoscopo =>
            horoscopo.name.toLowerCase().includes(searchHoroscopo.toLowerCase())
        );
        setDataBySearch(filteredHoroscopos);
    };


    // funcion que formatea  la fecha de hoy y tambien de init_date y end_date 
    // si la fecha de hoy esta dentro de los rangos la coloco primera
    const moveTodayToFirst = (data) => {
        const today = new Date();
        const formattedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        // formateo las init_date y end_date, luego busco la fecha de hoy  que este entre estas dos fechas
        //  returna true, poniendo en 0 o numero positivo elindex (index encontrado)
        const todayHoroscopoIndex = data.findIndex(horoscopo => {
            // separo secciones del formato actual y luego formateo a tipo Date
            const init_dateSection = horoscopo.init_date.split('-').map(part => parseInt(part, 10));
            const end_dateSection = horoscopo.end_date.split('-').map(part => parseInt(part, 10));
            const initDate = new Date(today.getFullYear(), init_dateSection[1] - 1, init_dateSection[0]);
            const endDate = new Date(today.getFullYear(), end_dateSection[1] - 1, end_dateSection[0]);
            return formattedToday >= initDate && formattedToday <= endDate;
        });
        // Si se encontro la ubicacion de hoy (siempre cumple 1 y unica vez) se saca del dataHoroscopo y se ubica primero
        if (todayHoroscopoIndex !== -1) {
            const todayHoroscopo = data.splice(todayHoroscopoIndex, 1);
            data.unshift(todayHoroscopo[0]);
        }
        return data;
    };

    // funcion que ordena por fecha, alfabeticamente o por dia de hoy.
    const ordenSetting = () => {
        switch (valueOrderBy) {
            case 'today':
                setDataHoroscopo(moveTodayToFirst(dataHoroscopo));
                break;
            case 'fecha':
                const sortByDate = (a, b) => {
                    const dateA = new Date(`${a.init_date.split('-').reverse().join('-')}`);
                    const dateB = new Date(`${b.init_date.split('-').reverse().join('-')}`);
                    return dateA - dateB;
                };
                const horoscopoOrderByDate = dataHoroscopo.slice().sort(sortByDate);
                setDataHoroscopo(horoscopoOrderByDate);
                break;
            case 'alfabetico':
                const sortByNombre = (a, b) => {
                    const moteA = a.name.toUpperCase();
                    const moteB = b.name.toUpperCase();
                    return moteA < moteB ? -1 : moteA > moteB ? 1 : 0;
                };
                const horoscopoOrderByName = dataHoroscopo.slice().sort(sortByNombre);
                setDataHoroscopo(horoscopoOrderByName);
                break;
            default:
                break;
        }
    }

    async function getDataHoroscopoByApi() {
        try {
            const response = await fetch(`${URL}/${DATA}`, {
                headers: {
                    'Authorization': 'qazwsx'
                }
            });
            const data = await response.json();
            const horoscopoInOrden = moveTodayToFirst(data);
            setDataHoroscopo(horoscopoInOrden);
            setDataBySearch(horoscopoInOrden);
            setTimeout(() => {
                setIsLoading(false)
            }, 1600);
        } catch (error) {
            console.error(`Error trayendo la data en la ruta ${URL}/${DATA}`, error);
            return Promise.reject(error);
        }
    }


    useEffect(() => {
        getDataHoroscopoByApi()
    }, []);

    useEffect(() => {
        ordenSetting();
        searchbarHoroscopo(searchHoroscopo);
    }, [valueOrderBy, searchHoroscopo]);


    // simula un tiempo de espera mayor de lo que tarda la api con un loading
    // una vez terminado el loadin muestro la data traida por API del horoscopo filtrada o no por la busqueda en el SearchBar y ordenada tambien dentro del Navbar
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {dataBySearch.length === 0 ? <NotFound />
                :
                <>
                    {isLoading ?
                        <div style={{ margin: "20%" }} className="d-flex align-items-center justify-content-center w-100">
                            <img src={reactLogo} className="logo react spin" alt="React logo" /><h2>Cargando el Horóscopo...</h2>
                        </div>
                        :
                        (searchHoroscopo !== "") ? <HoroscopoList className="d-flex cred" dataHoroscopo={dataBySearch} />
                            :
                            <HoroscopoList className="d-flex cred" dataHoroscopo={dataHoroscopo} />
                    }
                </>
            }
        </div>
    )
};
export default HoroscopoListContainer; 
