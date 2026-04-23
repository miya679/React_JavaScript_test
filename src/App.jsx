import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'

function App() {


  return (
    <div className="App">
      <PrimaryButton>Click Me</PrimaryButton>
    </div>
  )
}

export default App
