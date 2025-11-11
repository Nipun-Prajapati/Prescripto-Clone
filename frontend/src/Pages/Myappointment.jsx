import { useContext } from 'react'
import {AppContext} from '../Context/AppContext'

const Myappointment = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='text-2xl text-center'>My Appointment</p>
      <div>
        {
          doctors.slice(0,3 ).map((item,index) => (
            <div key={index} className='border-b-1 h-100 w-full flex items-center justify-between p-5'>
              <div>
                <img src={item.image} alt="" className='w-70 bg-blue-500 rounded-2xl'/>
              </div>
              <div >
                <p className='text-2xl p-3'>{item.name}</p>
                <p>{item.specialization}</p>
                <p className='ml-3'>Address :</p>
                <p className='ml-3'>{item.address.line1}</p>
                <p className='ml-3'>{item.address.line2}</p>
                <p className='p-3'><span>Date & Time :</span> 25 Jan 2023, 10:00 AM</p>
              </div>
              <div className='flex flex-col gap-5 '>
                <button  className='bg-blue-500 p-3 rounded-2xl hover:text-white cursor-pointer'>Pay Online</button>
                <button  className='bg-blue-500 p-3 rounded-2xl hover:text-white cursor-pointer'>Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Myappointment