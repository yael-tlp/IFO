import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MainScreen from "./components/MainScreen.jsx";

function App() {
// alert(process.env.PUBLIC_URL)
    console.log(import.meta.env.VITE_PUBLIC_PATH); // "/static/"

  return (
    <>

        <MainScreen />
    </>
  )
}

export default App
