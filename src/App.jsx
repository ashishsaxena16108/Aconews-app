import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Dark from './assets/dark.svg'
import Light from './assets/light.svg'


function App() {
  const [genre, setGenre] = useState('general')
  const [selectedLang, setSelectedLang] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [Mode, setMode] = useState(Light)
  useEffect(() => {
    const mode = localStorage.getItem('Mode')
    setMode(mode=='dark'?Dark:Light)
    if(mode==='dark')
    document.documentElement.classList.add('dark')
    else
    document.documentElement.classList.remove('dark')
    setSelectedLang(localStorage.getItem('selectedLang'))
    setSelectedCountry(localStorage.getItem('selectedCountry'))
  }, [])
  
  const toggledark = () => {
    document.documentElement.classList.toggle('dark')
    setMode(Mode===Dark?Light:Dark)
    localStorage.setItem('Mode',document.documentElement.classList.contains('dark')?'dark':'');
  }
  const handleLang = (event) => {
    const value = event.target.value;
    setSelectedLang(value);
    localStorage.setItem('selectedLang', value); 
  };
  const handleCount = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    localStorage.setItem('selectedCountry', value); 
  }
  return (
    <>
    <div className="flex flex-col gap-3">
      <NavBar setTheme={setGenre} Mode={Mode} toggledark={toggledark} setmode={setMode} handleLang={handleLang} handleCount={handleCount} selectedLang={selectedLang} selectedCountry={selectedCountry}/>
      <Home genre={genre} lang={selectedLang} coun={selectedCountry}/>
    </div>
    </>
  )
}

export default App
