import React from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import MainProfile from './components/MainProfile/MainProfile'


function App() {
 return (
   <div>
     <Header/>
     <MainProfile/>
     <Homepage/>
     <Footer/>
   </div>
 )
}

export default App
