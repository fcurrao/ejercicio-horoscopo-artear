import { createContext, useEffect, useState } from "react";

export const HoroscopoContext = createContext(null);

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