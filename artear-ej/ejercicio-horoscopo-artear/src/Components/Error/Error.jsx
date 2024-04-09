import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Error = ({ id, code, title, subtitle }) => {
    const [titleLocal, setTitleLocal] = useState("")
    const [subtitleLocal, setSubtitleLocal] = useState("")

    // funcion que segun el codigo, cambia el texto de la pantalla, si ya es pasado por props se deja esas.
    const handleErrorTitles = () => {
        if (title === undefined && subtitle === undefined) {
            let newTitle = "";
            let newSubtitle = "";
            console.warn(code)
            switch (code) {
                case 401:
                    newTitle = `Error de Autorización ${code}`;
                    newSubtitle = "Corrobore sus credenciales";
                    break;
                case 404:
                    newTitle = `Error ${code}`;
                    newSubtitle = "NOT FOUND";
                    break;
                case 0:
                    newTitle = `Error `;
                    newSubtitle = "Tu Servidor esta caido";
                    break;
                default:
                    if (code > 399 && code < 500) {
                        newTitle = `Error ${code}`;
                        newSubtitle = "Por favor intente corroborando el servidor";
                    }
                    break;
            }
            if (newTitle !== "" && newSubtitle !== "") {
                setTitleLocal(newTitle)
                setSubtitleLocal(newSubtitle)
            }
        }
    }

    useEffect(() => {
        handleErrorTitles()
    }, [id, code, title, subtitle, titleLocal, subtitleLocal]);


    return (
        <>
            <div style={{ height: "auto" }} className="bg-light align-content-center fs-3 fw-bold p-5">
                <h2>{titleLocal}  {title}</h2>
                <h3>{subtitleLocal}  {subtitle}</h3>
                <img style={{ width: "50%", margin: "5%" }} src="../../../public/error.png" />
                {id == 1 ? <> </> : <Link to="/" ><h1 className="bg-primary p-1 text-black">Volver</h1></Link>}
            </div>
        </>
    );
};