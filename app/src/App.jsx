import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/project/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Netflix_project from './Components/project/Netflix_project'
import Chat_project from './Components/project/Chat_project'

function App() {
 
  return (
    <>
   <div className=' text-white'>
   <Navbar/>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/project/netflix' element={<Netflix_project/>}/>
  <Route path='/project/chat' element={<Chat_project/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  <Footer/>
   </div>

    </>
  )
}

export default App
