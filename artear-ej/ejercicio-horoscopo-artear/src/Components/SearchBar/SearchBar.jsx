import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTableCellsLarge, faList, } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";

export const SearchBar = () => {
    const { valueViewBy, setValueViewBy, valueOrderBy, setValueOrderBy } = useContext(HoroscopoContext);

    //! limpiar y mejorar esta funcion
    const handleCheckbox = (e) => {
        if (e.target.value == "defaul") {
            setValueOrderBy('today')
        }
        else {
            if (e.target.value == "alfabetico") {
                if (e.target.checked == true) {
                    if (valueOrderBy == 'fecha') {
                        setValueOrderBy('alfaYfecha')
                    } else {
                        setValueOrderBy("alfabetico")
                    }
                } else {
                    if (valueOrderBy == 'alfabetico') {
                        setValueOrderBy('today')
                    } else {
                        setValueOrderBy("fecha")
                    }
                }
            } else {
                if (e.target.checked == true) {
                    if (valueOrderBy == 'alfabetico') {
                        setValueOrderBy('alfaYfecha')
                    } else {
                        setValueOrderBy("fecha")
                    }
                } else {
                    if (valueOrderBy == 'fecha') {
                        setValueOrderBy('today')
                    } else {
                        setValueOrderBy("alfabetico")
                    }
                }
            }
        }
    };


 

    return (<div className="d-flex justify-content-evenly">

        <div className="d-flex justify-content-space-evenly align-items-center">
            <h4 style={{ width: '12em' }} >Ver como</h4>
            <select className="form-select" onChange={(e) => setValueViewBy(e.target.value)}>
                <option value="grilla" >Grilla</option>
                <option value="lista">Lista</option>
            </select>
            {(valueViewBy === "grilla") ? <FontAwesomeIcon className="m-4 fa-2x" icon={faTableCellsLarge} /> : (valueViewBy === "lista") ? <FontAwesomeIcon className="m-4  fa-2x" icon={faList} /> : ""}
        </div>

        <div className="d-flex justify-content-space-evenly align-items-center">
            <h4 style={{ width: 'auto', margin: '1em' }} >Orden</h4>
            <button className='btn btn-dark' value="defaul" onClick={(e) => handleCheckbox(e)}>
                Default
            </button>
            <input
                type="checkbox"
                value="alfabetico"
                className="form-check m-2"
                style={{ width: '1.5em', height: '1.5em' }}
                checked={valueOrderBy === 'alfabetico' || valueOrderBy === 'alfaYfecha'  }
                onChange={(e) => handleCheckbox(e)}
            />
            <label className="form-check-label m-1">Alfabetico</label>
            <input
                type="checkbox"
                value="fecha"
                className="form-check m-2"
                style={{ width: '1.5em', height: '1.5em' }}
                checked={valueOrderBy === 'fecha' || valueOrderBy === 'alfaYfecha'  }
                onChange={(e) => handleCheckbox(e)}
            />
            <label className="form-check-label m-1">Fecha</label>
        </div>

        <div className="d-flex justify-content-space-evenly align-items-center">
            <FontAwesomeIcon className="m-4 fa-2x" icon={faMagnifyingGlass} />
            <input className="form-input" placeholder='Buscar por signo..'>

            </input>
        </div>

    </div>
    )
};