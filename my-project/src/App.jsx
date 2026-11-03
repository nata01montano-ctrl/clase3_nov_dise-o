import { useState } from 'react'

import './App.css'
import {PokemonBasic }from './components/PokeemonBasic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <PokemonBasic> </PokemonBasic>
        </section>
    </>
  )
}

export default App
