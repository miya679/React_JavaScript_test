import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'

function App() {


  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
    </div>
  )
}

export default App
