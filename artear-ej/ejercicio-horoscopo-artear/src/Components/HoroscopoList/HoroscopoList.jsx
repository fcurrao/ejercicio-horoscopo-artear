import { useContext } from "react";
import { Link } from "react-router-dom";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";
import "./HoroscopoList.css";

export const HoroscopoList = ({ dataHoroscopo }) => {

    //traigo de mi context la vista elegida traida del Navbar
    const { valueViewBy } = useContext(HoroscopoContext);

    // mapeo la data pasada por props  y lo condiciono segun la vista elegida
    // tambien resalto mediante estilos el primer elemento
    return (
        <>
            <div className={valueViewBy == 'grilla' ? 'grilla' : 'lista'}>
                {dataHoroscopo && dataHoroscopo.map((eachHoroscopo, index) => (
                    <>
                        {(index == 0) ?
                            <>    <Link to={`/${eachHoroscopo.id}`} key={eachHoroscopo.id} className='card firstOne' >
                                <img className='img w-15' src={"../../../public/" + eachHoroscopo.image} />
                                <div className="col-md-8 d-flex align-items -center">
                                    <div className="card-body  d-flex flex-row flex-wrap justify-content-center align-items-center flex-column">
                                        <h4 className="card-title m-2 text-primary">{eachHoroscopo.name}</h4>
                                        <p className="card-text fs-6">{eachHoroscopo.prediction}</p>
                                        <span style={{ color: 'gray' }}>{eachHoroscopo.init_date} &nbsp; ~ &nbsp; {eachHoroscopo.end_date}</span>
                                    </div>
                                </div>
                            </Link>
                            </>
                            :
                            <>
                                <Link to={`/${eachHoroscopo.id}`} key={eachHoroscopo.id} className={`card ${valueViewBy === 'grilla' ? ' othersElementsInGrid' : 'othersElementsInList'}`}>
                                    <div className={` ${valueViewBy === 'grilla' ? 'd-flex align-items-center flex-column justify-content-center ' : ''}  h-fit-content row g-0 p-2`} >
                                        <div className="col-md-4 justify-content-center d-flex flex-column  align-items-center ">
                                            <h4 className="card-title m-2">{eachHoroscopo.name}</h4>

                                            <div>
                                                <img style={{ width: "25%" }} className='img m-2 ' src={"../../../public/" + eachHoroscopo.image} alt={eachHoroscopo.name} />
                                            </div>
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center align-items-center">
                                            <div className="card-body  flex-row flex-wrap justify-content-center">
                                                <p className="card-text fs-6 p-3">{eachHoroscopo.prediction}</p>
                                                <span style={{ color: 'gray' }}>{eachHoroscopo.init_date} &nbsp; ~ &nbsp; {eachHoroscopo.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        }
                    </>
                ))}
            </div>
        </>
    );
};