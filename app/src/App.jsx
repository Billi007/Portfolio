import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {
 
  return (
    <>
   <div className='bg-[#121e27] text-white'>
   <Navbar/>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  <Footer/>
   </div>

    </>
  )
}

export default App
