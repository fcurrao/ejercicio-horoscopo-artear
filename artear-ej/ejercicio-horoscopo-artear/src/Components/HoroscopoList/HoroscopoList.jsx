import PropTypes from 'prop-types';
import { useContext , useEffect} from "react";
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";
import "./HoroscopoList.css";

export const HoroscopoList = ({ dataHoroscopo }) => {
    
    const { valueViewBy , valueOrderBy} = useContext(HoroscopoContext);
 
    
   


    return (
        <>
            <div className={valueViewBy=='grilla' ? 'grilla' : 'lista'}>
                {dataHoroscopo && dataHoroscopo.map((eachHoroscopo, index) => (
                    <>
                        {(index == 0) ?
                            <>
                                <div className='card p-2 d-flex flex-row flex-wrap m-2 border-3 border-dark shadow-lg p-3 mb-5 bg-body  rounded justify-content-between yy' >
                                    <img className='img w-25' src={"../../../public/" + eachHoroscopo.image} />
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title m-2">{eachHoroscopo.name}</h2>
                                            <p className="card-text fs-4">{eachHoroscopo.prediction}</p>
                                            <span style={{ color: 'gray' }}>{eachHoroscopo.init_date} &nbsp; ~ &nbsp; {eachHoroscopo.end_date}</span>
                                        </div>
                                    </div>
                                </div></>

                            :
                            <>
                    <div key={index} className={`card ${valueViewBy === 'grilla' ? 'w-40 m-2 justify-content-center ' : ''}  d-flex flex-row flex-wrap m-2 border border-dark shadow p-3 mb-5 bg-body rounded align-items-center`}>                                    
                                <div className={` ${valueViewBy === 'grilla' ? ' justify-content-center ' : ''} row g-0`} >
                                        <div className="col-md-4 d-flex flex-column  align-items-center fitcontent"> 
                                            <h2 className="card-title m-2">{eachHoroscopo.name}</h2>
                                            <img style={{width: "15%"}}  className='img-fluid m-2 ' src={"../../../public/" + eachHoroscopo.image} alt={eachHoroscopo.name} />
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center">
                                            <div className="card-body ">
                                                <p className="card-text fs-5">{eachHoroscopo.prediction}</p>

                                                <span style={{ color: 'gray' }}>{eachHoroscopo.init_date} &nbsp; ~ &nbsp; {eachHoroscopo.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                    </>
                ))}
            </div>
        </>

    );


};

// Aca se necesita validar propiedad pasada por el padre 
HoroscopoList.propTypes = {
    dataHoroscopo: PropTypes.object.isRequired
};