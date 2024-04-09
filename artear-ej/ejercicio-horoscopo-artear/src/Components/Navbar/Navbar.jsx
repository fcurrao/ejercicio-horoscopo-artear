
import { useContext, useEffect, } from "react";
import { Searchbar } from '../Searchbar/Searchbar.jsx'
import { HoroscopoContext } from "../../context/HoroscopoContextProvider.jsx";
import './Navbar.css'

// en este caso el navbar se utiliza para que maneje la logica de la buqueda
export const Navbar = () => {
    const { setCategorySelected, categorySelected, valueViewBy, setValueViewBy, setValueOrderBy, setSearchHoroscopo } = useContext(HoroscopoContext);


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
        setValueOrderBy(e.target.value)
    };

    const handleCategory = (e) => {
        setCategorySelected(e.target.value)
    };

    useEffect(() => { 
        cleanSerch()
    }, [categorySelected])


    return (
        <Searchbar handleCheckbox={handleCheckbox} handleCategory={handleCategory} ChangeView={ChangeView} cleanSerch={cleanSerch} handleSearch={handleSearch} />
    )
};