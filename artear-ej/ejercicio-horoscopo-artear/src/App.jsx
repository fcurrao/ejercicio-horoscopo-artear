import { HoroscopoContextProvider } from "./context/HoroscopoContextProvider.jsx";
import { HoroscopoListContainer } from "../src/Components/HoroscopoListContainer/HoroscopoListContainer.jsx";
import { SearchBar } from "../src/Components/SearchBar/SearchBar.jsx";
import './App.css'

function App() { 

  return (
    <>
      <HoroscopoContextProvider>
        <div className="">
          <h1>Horóscopo</h1>
          <SearchBar />
          <HoroscopoListContainer />
        </div>
      </HoroscopoContextProvider>
    </>
  )
}

export default App
