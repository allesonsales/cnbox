import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import CrossFit from './pages/crossfit/crossfit'
import AnimacoesProvider, { Animacoes } from './provider'
import Planos from './pages/planos/planos'
import Depoimentos from './pages/depoimentos/depoimentos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimacoesProvider>
      <Home />
      <CrossFit />
      <Planos />
      <Depoimentos />
    </AnimacoesProvider>
    </>
  )
}

export default App
