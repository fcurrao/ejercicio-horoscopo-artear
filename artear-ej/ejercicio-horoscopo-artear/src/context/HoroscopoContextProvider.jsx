import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const HoroscopoContext = createContext(null);

// Creamos el provider
export const HoroscopoContextProvider = ({ children }) => { 
  
const [valueViewBy, setValueViewBy] = useState("grilla")
const [valueOrderBy, setValueOrderBy] = useState("today")
const [searchHoroscopo, setSearchHoroscopo] = useState("")
 
   useEffect( () => {  
    }, [] )

  const objectValues = {
    valueViewBy,
    setValueViewBy,
    valueOrderBy,
    setValueOrderBy,
    setSearchHoroscopo,
    searchHoroscopo,
  };

  return <HoroscopoContext.Provider  value={objectValues}>  {children} </HoroscopoContext.Provider>;
};