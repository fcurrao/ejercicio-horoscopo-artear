import { createContext, useState } from "react";
export const HoroscopoContext = createContext(null);

export const HoroscopoContextProvider = ({ children }) => {
  const [valueViewBy, setValueViewBy] = useState("grilla")
  const [valueOrderBy, setValueOrderBy] = useState("today")
  const [searchHoroscopo, setSearchHoroscopo] = useState("")


  const objectValues = {
    valueViewBy,
    setValueViewBy,
    valueOrderBy,
    setValueOrderBy,
    setSearchHoroscopo,
    searchHoroscopo,
  };

    // Provengo a mi app desde el objeto objectValues que contiene todos los estados que voy a utilizar en varios componentes del aplicativo
  return <HoroscopoContext.Provider value={objectValues}>  {children} </HoroscopoContext.Provider>;
};