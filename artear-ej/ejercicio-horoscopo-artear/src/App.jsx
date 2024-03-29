import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HoroscopoContextProvider } from "./context/HoroscopoContextProvider.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { DetailsHoroscopo } from "./Components/DetailsHoroscopo/DetailsHoroscopo.jsx";
import { NotFound } from "./Components/NotFound/NotFound.jsx";
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
            <Route path="/:id" element={<DetailsHoroscopo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HoroscopoContextProvider>
    </>
  )
}

export default App
