import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets_frontend/assets.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

    const Navigate = useNavigate()
    const [showMenu, setshowMenu] = useState(false)
    const [token, setToken] = useState(true)


  return (
    <div className='border-b-1 border-black flex h-[60px] w-full'>
        <div className='ml-20'>
            <img src={assets.logo} className='cursor-pointer p-2'/>
        </div>
        <ul className='h-[60px] w-3xl flex justify-around items-center'>
            <NavLink to='/' className={({isActive}) => isActive ? "text-blue-900 font-bold": "text-black "}>
                <li>HOME</li>
            </NavLink>
            <NavLink  to='/doctors' className={({isActive}) => isActive ? "text-blue-900 font-bold" : "text-black"}>
                <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink  to='/about' className={({isActive}) => isActive ? "text-blue-900 font-bold" : "text-black"}>
                <li>ABOUT</li>
            </NavLink>
            <NavLink  to='/contact' className={({isActive}) => isActive ? "text-blue-900 font-bold" : "text-black"}>
                <li>CONTACT</li>
            </NavLink>
        </ul>
        <div className='h-[60px] flex items-center'>
          {
            token 
            ? <div className='flex gap-3 ml-20 group'>
                <img src={assets.profile_pic} className='rounded-full w-10'/>
                <img src={assets.dropdown_icon} />
                <div className='h-20 w-50 absolute top-10 right-8 hidden group-hover:block'>
                    <div className='h-30 w-50 mt-7 bg-stone-200 p-4 rounded'>
                        <p  onClick={()=> Navigate('my-profile')} className='p-1 hover:border-black hover:border-1 cursor-pointer'>My Profile</p>
                        <p  onClick={()=> Navigate('my-appointment')} className='p-1 hover:border-black hover:border-1 cursor-pointer'>My Appointment</p>
                        <p onClick={()=> setToken(false)} className='p-1 hover:border-black hover:border-1   cursor-pointer'>Logout</p>
                    </div> 
                </div>
            </div>
            : <button onClick={()=> Navigate('/login')} className='m-10 p-2 pl-5 pr-5 cursor-pointer rounded-2xl bg-blue-400 hover:text-white hover:bg-blue-600'>Create Account</button>
          }  
        </div>
    </div>
  )
}

export default Navbar