import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import Myprofile from './Pages/Myprofile'
import Myappointment from './Pages/Myappointment'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ErrorPage from './Components/ErrorPage'
import Appointment from './Pages/Appointment'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>
        
        <Route path='/my-appointment' element={<Myappointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route  path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}


export default App