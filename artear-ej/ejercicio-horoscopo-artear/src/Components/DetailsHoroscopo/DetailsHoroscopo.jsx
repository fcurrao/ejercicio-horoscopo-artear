

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './DetailsHoroscopo.css'

export const DetailsHoroscopo = () => {
    const { id } = useParams()
    const [thisHoroscopo, setThisHoroscopo] = useState("")
    // estos datos sensibles se deberian de guardar en una archivo de variables
    const URL = 'http://localhost:3001';
    const DATA = 'zodiac_signs';


    // traigo por id conseguido por useParams de la api : el objeto indicado y lo cargo en setThisHoroscopo
    async function getDataById() {
        try {
            const response = await fetch(`${URL}/${DATA}/${id}`, {
                headers: {
                    'Authorization': 'qazwsx'
                }
            });
            const data = await response.json();
            setThisHoroscopo(data)
        } catch (error) {
            console.error(`Error trayendo la data en la ruta ${URL}/${DATA}/${id}`, error);
            return Promise.reject(error);
        }
    }

    useEffect(() => {
        getDataById(id);
    }, [])


    return (
        <>
            <div className='card p-0 d-flex flex-row flex-wrap m-2 border-3 border-dark shadow-lg mb-5 bg-body  rounded justify-content-between text-black' >
                <div className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ backgroundImage: `url(../../../public/${thisHoroscopo.image})`, backgroundSize: 'contain', backgroundPosition: 'center', width: "126%", height: "auto" }}>
                    <div className="col-md-8 d-flex align-items -center ">
                        <div className="card-body  d-flex flex-row flex-wrap justify-content-center align-items-center effecttext">
                            <h1 className="card-title m-2">{thisHoroscopo.name}</h1>
                            <p className="card-text fs-3">{thisHoroscopo.prediction}</p>
                            <span >{thisHoroscopo.init_date} &nbsp; ~ &nbsp; {thisHoroscopo.end_date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center m-4'>
                <Link className='btn-success text-black w-25 border p-3 bg-info  d-flex align-items-center justify-content-center m-4' to="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span style={{ marginLeft: "5%", fontSize:"24px" }}>Volver</span>
                </Link>
            </div>
        </>
    );
};