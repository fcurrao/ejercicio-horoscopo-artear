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


      

    // traigo por id conseguido por useParams de la api : el objeto indicado y lo cargo en setThisHoroscopo
    async function getDataById(id) {
      try {
          const response = await fetch(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}/${id}`, {
              headers: {
                  'Authorization': 'qazwsx'
              }
          });
          const data = await response.json();
          setThisHoroscopo(data)
      } catch (error) {
          console.error(`Error trayendo la data en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}/${id}`, error);
          return Promise.reject(error);
      }
  }

  
  async function getDataHoroscopoByApi() { 
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}`, {
            headers: {
                'Authorization': 'qazwsx'
            }
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(`Error trayendo la data en la ruta ${import.meta.env.VITE_URL}/${import.meta.env.VITE_DATA}`, error);
        return Promise.reject(error);
    }
}


  const objectValues = {
    valueViewBy,
    setValueViewBy,
    valueOrderBy,
    setValueOrderBy,
    setSearchHoroscopo,
    searchHoroscopo,
    setThisHoroscopo,
    thisHoroscopo,
    getDataHoroscopoByApi,
    getDataById,
    dataHoroscopo,
    setDataHoroscopo,
    isLoading,
    setIsLoading,
    dataBySearch,
    setDataBySearch,
    
  };

    // Provengo a mi app desde el objeto objectValues que contiene todos los estados que voy a utilizar en varios componentes del aplicativo
  return <HoroscopoContext.Provider value={objectValues}>  {children} </HoroscopoContext.Provider>;
};