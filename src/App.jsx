import './App.css'
import Data from './components/data'
import Head from './components/heading'
import Nav from './components/navbar'
import { Helper } from './store/collection'
import Res from "./components/result.jsx";
import Pro from './components/prompt.jsx'
import { useContext } from 'react'
import { Donor } from './store/collection'
function Innerapp(){
  const {cond}=useContext(Donor);
  return (
    <div className=' min-h-screen bg-gradient-to-r from-gray-950 to-gray-950 text-amber-50 font-sans w-full h-full '>
      <Nav/>
    <Pro/>
    <Res/>
    {cond&&<Head/>}
  
  
  <Data/>

    </div>
  )

}
function App() {
  
  return <div className='min-h-screen bg-gradient-to-r from-gray-950 to-gray-950 text-amber-50 font-sans w-full h-full  '>
  <Helper>
    <Innerapp/>
    
  </Helper>
  </div>

}

export default App
