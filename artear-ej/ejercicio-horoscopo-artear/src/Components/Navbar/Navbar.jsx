import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTableCellsLarge, faList, } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";
import './Navbar.css'
export const Navbar = () => {
    const { valueViewBy, setValueViewBy, valueOrderBy, setValueOrderBy, setSearchHoroscopo, searchHoroscopo } = useContext(HoroscopoContext);

    const handleSearch = (event) => {
        if (event.keyCode === 8) {
            setSearchHoroscopo("")
        }
        const searchText = event.target.value;
        setSearchHoroscopo(searchText);

    };

    const cleanSerch = () => {
        setSearchHoroscopo("")
        document.getElementById("inputSearch").value = "";
    }


    const ChangeView = () => {
        const newViewBy = valueViewBy === "lista" ? "grilla" : "lista";
        setValueViewBy(newViewBy);
        document.getElementById("selectView").value = newViewBy;

    }


    const handleCheckbox = (e) => {
        switch (e.target.value) {
            case "today":
                setValueOrderBy('today')
                // cleanSerch()
                break;
            case "alfabetico":
                setValueOrderBy('alfabetico')
                break;
            case "fecha":
                setValueOrderBy('fecha')
                break;
        }
    };

    useEffect(() => {
    }, [])

    return (<div className="p-2 bg-info d-flex flex-row flex-wrap justify-content-evenly">
        {window.innerWidth < 499 ? <>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                <h4 style={{ width: '12em' }} >Ver como</h4>
                <select value={valueViewBy} className="form-select 6" onChange={(e) => setValueViewBy(e.target.value)}>
                    <option value="grilla" >Grilla</option>
                    <option value="lista">Lista</option>
                </select>
                {(valueViewBy === "grilla") ? <div value="grilla" className="btnbtn" onClick={(e) => ChangeView(e)}><FontAwesomeIcon className="m-4 fa-2x" icon={faTableCellsLarge} /></div> : (valueViewBy === "lista") ? <div className="btnbtn" value="lista" onClick={(e) => ChangeView(e)}><FontAwesomeIcon className="m-4  fa-2x" icon={faList} /></div> : ""}
            </div>
        </> : <>
            <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center">
                <h4 style={{ width: '12em' }} >Ver como</h4>
                <select id="selectView" className="form-select fs-5" onChange={(e) => setValueViewBy(e.target.value)}>
                    <option value="grilla" >Grilla</option>
                    <option value="lista">Lista</option>
                </select>
                {(valueViewBy === "grilla") ? <div value="grilla" className="btnbtn" onClick={(e) => ChangeView(e)}><FontAwesomeIcon className="m-4 fa-2x " icon={faTableCellsLarge} /></div> : (valueViewBy === "lista") ? <div className="btnbtn" value="lista" onClick={(e) => ChangeView(e)}><FontAwesomeIcon className="m-4 fa-2x" icon={faList} /></div> : ""}
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

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center btnbtn">
            <FontAwesomeIcon onClick={cleanSerch} className="m-4 fa-2x" icon={faMagnifyingGlass} />
            <input id="inputSearch" className="form-input form-select fs-5 noticon w-auto " onInput={(e) => handleSearch(e)} placeholder='Buscar por signo..'>

            </input>
        </div>

    </div>
    )
};