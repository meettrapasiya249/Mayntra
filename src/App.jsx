import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Slide1 from './Components/Home/Slide-1/Slide-1'
import Slide2 from './Components/Home/Slide-2/Slide-2'
import Slide3 from './Components/Home/Slide-3/Slide-3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slide1/>
      <Slide2/>
      <Slide3/>
    </>
  )
}

export default App
