import { useState } from 'react'
import './App.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Section from './componentes/section/Section'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='cuadro'>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </div>
  )
}

export default App
