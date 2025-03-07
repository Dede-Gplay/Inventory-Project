import React from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideBar from './components/SideBar'
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AddItemPage from './components/AddItemPage';
import MedicationPage from './components/MedicationPage';

function App() {
  

  return (
    <>
      <Header/>
      <SideBar/>
      {/* <AddItemPage/> */}
      {/* <Main/> */}
      <MedicationPage/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App
