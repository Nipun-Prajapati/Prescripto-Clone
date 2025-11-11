import {assets} from '../assets/assets_frontend/assets.js'
import { useNavigate } from 'react-router-dom'


const Banner = () => {

    const Navigate = useNavigate()
    
  return (
    <div className="flex justify-center mt-20">
        <div className="bg-blue-500 w-300 h-100 rounded-2xl grid grid-cols-2">
            <div className='flex items-center justify-center flex-col h-100'>
                <h1 className='text-4xl'>Book Appointment With <br/>100+ Trusted Doctors</h1>
                <button onClick={()=> Navigate('/login') } className='cursor-pointer m-10 p-3 text-2xl bg-amber-50 rounded-4xl hover:bg-black hover:text-white '>Create Account</button>
            </div>
            <div className='h-100 relative flex justify-center'>
                <img src={assets.appointment_img} className='h-110 absolute bottom-0' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner