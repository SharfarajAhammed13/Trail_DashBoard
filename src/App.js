import { useState } from 'react'
import { BrowserRouter as Router, Route,Switch, useLocation } from 'react-router-dom'
import './App.css'
import Header from '../src/Components/Header.js'
import Sidebar from '../src/Components/SideBar.js'
//import Home from '../src/Components/Home.js'
import Profile from './Components/Profile.js'
import Home from './Components/Home.js'
import Courses from './Components/Courses.js'


function App() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
      <BrowserRouter>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        
      <Route exact path='/' Component={Home}/>
      <Route path='/profile' Component={Profile}/>
      <Route path='/courses' Component={Courses}/>
        
      
      </BrowserRouter>
      
    </div>
  )
}

export default App