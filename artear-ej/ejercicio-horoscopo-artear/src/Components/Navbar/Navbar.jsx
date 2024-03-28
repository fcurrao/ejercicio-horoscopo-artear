import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTableCellsLarge, faList, } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";

export const Navbar = () => {
    const { valueViewBy, setValueViewBy, valueOrderBy, setValueOrderBy,setSearchHoroscopo ,searchHoroscopo} = useContext(HoroscopoContext); 
 
    const handleSearch = (event) => {
        if (event.keyCode === 8) {
            setSearchHoroscopo("")
        }
        const searchText = event.target.value; 
        setSearchHoroscopo(searchText);  
        
    };



    //! limpiar y mejorar esta funcion
    const handleCheckbox = (e) => {
        switch (e.target.value) {
            case "today":
                setValueOrderBy('today')
                break;
            case "alfabetico":
                setValueOrderBy('alfabetico')

                break;
            case "fecha":
                setValueOrderBy('fecha')

                break;
        }
    };

   useEffect(()=>{

    const screenWidth = window.innerWidth;  
    console.log(screenWidth)
   },)

    return (<div className="d-flex flex-row flex-wrap justify-content-evenly"> 
    {window.innerWidth<499 ? <>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <h4 style={{ width: '12em' }} >Ver como</h4>
            <select className="form-select fs-5" onChange={(e) => setValueViewBy(e.target.value)}>
                <option value="grilla" >Grilla</option>
                <option value="lista">Lista</option>
            </select>
            {(valueViewBy === "grilla") ? <FontAwesomeIcon className="m-4 fa-2x" icon={faTableCellsLarge} /> : (valueViewBy === "lista") ? <FontAwesomeIcon className="m-4  fa-2x" icon={faList} /> : ""}
        </div>
    </>: <>
    <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <h4 style={{ width: '12em' }} >Ver como</h4>
            <select className="form-select fs-5" onChange={(e) => setValueViewBy(e.target.value)}>
                <option value="grilla" >Grilla</option>
                <option value="lista">Lista</option>
            </select>
            {(valueViewBy === "grilla") ? <FontAwesomeIcon className="m-4 fa-2x" icon={faTableCellsLarge} /> : (valueViewBy === "lista") ? <FontAwesomeIcon className="m-4  fa-2x" icon={faList} /> : ""}
        </div>
    </>}
        

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <h4 style={{ width: 'auto', margin: '1em' }} >Orden</h4>
            <input
                type="checkbox"
                value="today"
                className="form-check m-2"
                style={{ width: '1.5em', height: '1.5em' }}
                checked={valueOrderBy === 'today'}
                onChange={(e) => handleCheckbox(e)}
            />
            <h5 className="form-check-label m-1">Defaul</h5>
            <input
                type="checkbox"
                value="alfabetico"
                className="form-check m-2"
                style={{ width: '1.5em', height: '1.5em' }}
                checked={valueOrderBy === 'alfabetico'}
                onChange={(e) => handleCheckbox(e)}
            />
            <h5 className="form-check-label m-1">Alfabetico</h5>
            <input
                type="checkbox"
                value="fecha"
                className="form-check m-2"
                style={{ width: '1.5em', height: '1.5em' }}
                checked={valueOrderBy === 'fecha'}
                onChange={(e) => handleCheckbox(e)}
            />
            <h5 className="form-check-label m-1">Fecha</h5>
        </div>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <FontAwesomeIcon className="m-4 fa-2x" icon={faMagnifyingGlass} />
            <input className="form-input fs-5" onInput={(e)=>handleSearch(e)} placeholder='Buscar por signo..'>

            </input>
        </div>

    </div>
    )
};