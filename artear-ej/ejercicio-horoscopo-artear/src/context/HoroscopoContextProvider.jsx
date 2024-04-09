import { createContext, useState } from "react";
export const HoroscopoContext = createContext(null);

export const HoroscopoContextProvider = ({ children }) => {
  const [valueViewBy, setValueViewBy] = useState("grilla")
  const [valueOrderBy, setValueOrderBy] = useState("today")
  const [searchHoroscopo, setSearchHoroscopo] = useState("")
  const [dataHoroscopo, setDataHoroscopo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataBySearch, setDataBySearch] = useState([]);
  const [thisHoroscopo, setThisHoroscopo] = useState("")
  const [categorySelected, setCategorySelected] = useState("")
  const [errorApi, setErrorApi] = useState(null)
  const [errorApi1, seterrorApi1] = useState("")



  // traigo la data del API
  async function getDataHoroscopoByApi() {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}`, {
        headers: {
          'Authorization': 'qazwsx'
        }
      });
      // manejo de errores de respuesta 
      if (!response.ok) {
        setErrorApi(response.status)
        if (response.status === 401) {
          console.error(`Error ${response.status} \n Error de Unauthorized en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando su credenciales `);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } if (response.status > 399 && response.status < 500 && response.status !== 401) {
          console.error(`Error ${response.status} \n Error en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando sus datos `);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } if (response.status >= 500) {
          console.error(`Error ${response.status} desde Cliente ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando la informacion`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
      // atrapo el error en el fetch
    } catch (error) {
      errorApi == null ? setErrorApi(0) : "";
      throw error;
    }
  }




  // traigo por id conseguido por useParams de la api : el objeto indicado y lo cargo en setThisHoroscopo
  async function getDataById(id) {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}/${id}`, {
        headers: {
          'Authorization': 'qazwsx'
        }
      });
      // manejo de errores de respuesta
      if (!response.ok) {
        if (response.status === 401) {
          console.error(`Error ${response.status} \n Error de Unauthorized en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando su credenciales `);
          setErrorApi1(response.status)
          throw new Error(`HTTP error! Status: ${response.status}`);
        } if (response.status > 399 && response.status < 500 && response.status !== 401) {
          console.error(`Error ${response.status} \n Error en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando sus datos `);
          const status = response.status
          seterrorApi1(status)
          throw new Error(`HTTP error! Status: ${response.status}`);
        } if (response.status >= 500) {
          console.error(`Error ${response.status} desde Cliente ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA} \n Por favor intente corroborando la informacion`);
          seterrorApi1(response.status)
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else
          throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        setThisHoroscopo(await response.json())
      }
      // atrapo el error en el fetch
    } catch (error) {
      throw error;
    }
  }



  const objectValues = {
    valueViewBy,
    setValueViewBy,
    valueOrderBy,
    setValueOrderBy,
    setSearchHoroscopo,
    searchHoroscopo,
    thisHoroscopo,
    getDataHoroscopoByApi,
    getDataById,
    dataHoroscopo,
    setDataHoroscopo,
    isLoading,
    setIsLoading,
    dataBySearch,
    setDataBySearch,
    errorApi,
    errorApi1,
    setCategorySelected,
    categorySelected
  };


  // Provengo a mi app desde el objeto objectValues que contiene todos los estados que voy a utilizar en varios componentes del aplicativo
  return <HoroscopoContext.Provider value={objectValues}>  {children} </HoroscopoContext.Provider>;
};