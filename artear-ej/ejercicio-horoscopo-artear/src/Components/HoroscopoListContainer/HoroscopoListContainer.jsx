import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg'
import "./HoroscopoListContainer.css";
import { HoroscopoList } from "../HoroscopoList/HoroscopoList.jsx";
import { useContext } from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";


export const HoroscopoListContainer = () => {
    const { valueOrderBy , searchHoroscopo} = useContext(HoroscopoContext);
    const [isLoading, setIsLoading] = useState(true);
    const [dataHoroscopoSearch, setDataHoroscopoSearch] = useState([]);
    const [dataHoroscopo, setDataHoroscopo] = useState([]);
    const URL = 'http://localhost:3001';
    const DATA = 'zodiac_signs';


    const searchbarHoroscopo = (searchHoroscopo) => { 
        
        console.log("texto de busqueda:", searchHoroscopo)
        const filteredHoroscopos = dataHoroscopo.filter(horoscopo =>
            horoscopo.name.toLowerCase().includes(searchHoroscopo.toLowerCase())
        );
        setDataHoroscopoSearch(filteredHoroscopos);  
    };
    

    const moveTodayToFirst = (data) => {
        const today = new Date();
        const formattedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const todayHoroscopoIndex = data.findIndex(horoscopo => {
            const initDateParts = horoscopo.init_date.split('-').map(part => parseInt(part, 10));
            const endDateParts = horoscopo.end_date.split('-').map(part => parseInt(part, 10));
            const initDate = new Date(today.getFullYear(), initDateParts[1] - 1, initDateParts[0]);
            const endDate = new Date(today.getFullYear(), endDateParts[1] - 1, endDateParts[0]);
            return formattedToday >= initDate && formattedToday <= endDate;
        });
        if (todayHoroscopoIndex !== -1) {
            const todayHoroscopo = data.splice(todayHoroscopoIndex, 1)[0];
            data.unshift(todayHoroscopo);
        }
        return data;
    };

    const ordenSetting = ()=>{    
        if(valueOrderBy === 'today'){
            getDataHoroscopoByApi()
            console.log("asd", dataHoroscopo)
        }
        if(valueOrderBy === 'fecha'){
            const sortByDate = (a, b) => {
                const dateA = new Date(`2022-${a.init_date.split('-').reverse().join('-')}`);
                const dateB = new Date(`2022-${b.init_date.split('-').reverse().join('-')}`);
                return dateA - dateB;
            };
            
            const horoscoposOrdenadosPorFecha = dataHoroscopo.slice().sort(sortByDate);
            setDataHoroscopo(horoscoposOrdenadosPorFecha)
            console.log(horoscoposOrdenadosPorFecha);
        } if (valueOrderBy === 'alfabetico' ){
            const sortByNombre = (a, b) => {
                const nombreA = a.name.toUpperCase();
                const nombreB = b.name.toUpperCase();
                if (nombreA < nombreB) {
                    return -1;
                }
                if (nombreA > nombreB) {
                    return 1;
                }
                return 0;
            };
            
            const horoscoposOrdenadosPorNombre = dataHoroscopo.slice().sort(sortByNombre);
            setDataHoroscopo(horoscoposOrdenadosPorNombre)
            console.log(horoscoposOrdenadosPorNombre);
        }
    }


    useEffect(() => {
        ordenSetting()
        console.log("SE CAMBIO")
    }, [valueOrderBy])

    useEffect(() => {
        searchbarHoroscopo(searchHoroscopo)
        console.log("SE CAMBIO")
    }, [searchHoroscopo])


    async function getDataHoroscopoByApi() {
        try {
            console.log("progandos"); //! asdasd
            const response = await fetch(`${URL}/${DATA}`, {
                headers: {
                    'Authorization': 'qazwsx'
                }
            });
            const data = await response.json();
            const horoscoposOrdenados = moveTodayToFirst(data);
            setDataHoroscopo(horoscoposOrdenados);
            setIsLoading(false)
            // setDataHoroscopo(data)
            console.log(dataHoroscopo); //! asdasd
        } catch (error) {
            console.error(`Error trayendo la data en la ruta ${URL}/${DATA}`, error);
        }
    }

    useEffect(() => {
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 2000);
        getDataHoroscopoByApi()
        // setIsLoading(false);  //! esto esta mal, corregir
        console.log("funca el context , desde container", valueOrderBy)
    }, []);


    return (<div className="d-flex flex-wrap justify-content-center">
        {/* {isLoading ? <h2>Cargando productos ...</h2> : <HoroscopoList products={products} />} */}


        {isLoading ?
            <div className="d-flex align-items-center justify-content-center w-100 m-5">
                <img src={reactLogo} className="logo react spin" alt="React logo" /><h2>Cargando productos ...</h2>
            </div>
            :
            (searchHoroscopo !== "") ?    <HoroscopoList className="d-flex cred" dataHoroscopo={dataHoroscopoSearch} />  :
            <HoroscopoList className="d-flex cred" dataHoroscopo={dataHoroscopo} />}

    </div>)
};