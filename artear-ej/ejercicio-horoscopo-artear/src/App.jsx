import { HoroscopoContextProvider } from "./context/HoroscopoContextProvider.jsx";
import { HoroscopoListContainer } from "../src/Components/HoroscopoListContainer/HoroscopoListContainer.jsx"; 
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import './App.css'

function App() { 

  return (
    <>
      <HoroscopoContextProvider>
        <div >
          <h1 className="m-2">Horóscopo</h1>
          <Navbar />
          <HoroscopoListContainer />
        </div>
      </HoroscopoContextProvider>
          <Footer />
    </>
  )
}

export default App
