import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import DashBoard from './Pages/DashBoard.jsx'
import MedicationPage from './Pages/MedicationPage.jsx'
import AddItemPage from './Pages/AddItemPage.jsx'
import Consumeables from './Pages/Consumeables.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<DashBoard/>}/>
      <Route path="/dashboard"element={<DashBoard/>}/>
      <Route path="/Medication"element={<MedicationPage/>}/>
      <Route path="/AddItemPage"element={<AddItemPage/>}/>
      <Route path="/Consumeables"element={<Consumeables/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
