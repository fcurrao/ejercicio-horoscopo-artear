import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg'
import "./HoroscopoListContainer.css";
import { HoroscopoList } from "../HoroscopoList/HoroscopoList.jsx";
import { useContext } from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";


export const HoroscopoListContainer = () => {
    const { valueOrderBy } = useContext(HoroscopoContext);
    const [isLoading, setIsLoading] = useState(true);
    const [dataHoroscopo, setDataHoroscopo] = useState([]);
    const URL = 'http://localhost:3001';
    const DATA = 'zodiac_signs';

    async function getDataHoroscopoByApi() {
        try {
            console.log("progandos"); //! asdasd
            const response = await fetch(`${URL}/${DATA}`, {
                headers: {
                    'Authorization': 'qazwsx'
                }
            });
            const data = await response.json();
            setDataHoroscopo(data)
            console.log(dataHoroscopo); //! asdasd
        } catch (error) {
            console.error(`Error trayendo la data en la ruta ${URL}/${DATA}`, error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
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
            <HoroscopoList className="d-flex cred" dataHoroscopo={dataHoroscopo} />}

    </div>)
};