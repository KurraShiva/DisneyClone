import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'
import Footer from './Componets/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>

        <Footer/>
    </div>
  )
}

export default App
