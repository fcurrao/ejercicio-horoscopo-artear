import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HoroscopoContextProvider } from "./context/HoroscopoContextProvider.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { DetailsHoroscopo } from "./Components/DetailsHoroscopo/DetailsHoroscopo.jsx";
import { Error } from "./Components/Error/Error.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import './App.css'

function App() {

  return (
    <>
      <HoroscopoContextProvider>
        <BrowserRouter>
          <Link to="/"><h1 className="bg-primary p-4 text-black">Horóscopo</h1></Link>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/:id" element={<DetailsHoroscopo />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HoroscopoContextProvider>
    </>
  )
}

export default App
