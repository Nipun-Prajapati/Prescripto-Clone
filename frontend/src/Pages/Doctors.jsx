import { useContext, useEffect, useState} from "react"
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../Context/AppContext.jsx'

const Doctors = () => {

   {/**Use parameter form urls */}
  const {speciality} = useParams()

  const Navigate = useNavigate()

  const [filterdoc, setFilterdoc] = useState([]);

  const { doctors } = useContext(AppContext)

  function applyFilter() {
    if(speciality){
      setFilterdoc(doctors.filter((docdata)=> docdata.speciality === speciality ))
    }
    else {
      setFilterdoc(doctors)
    }
  }

  useEffect(()=> {
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className="ml-5 hover:border-blue-500">Browsr through the doctors speciality.</p>
      <div className="grid grid-cols-[300px_1000px] gap-5">
        <div>
        <div className="flex flex-col text-xl gap-5 mt-5 ml-2 text-center">
          <p onClick={()=> (speciality === 'General physician') ? Navigate('/doctors') : Navigate('/doctors/General physician')} className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">General Physician</p>
          <p onClick={()=> (speciality === 'Gynecologist') ? Navigate('/doctors') : Navigate('/doctors/Gynecologist')}className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">Gynecologist</p>
          <p onClick={()=> (speciality === 'Dermatologist') ? Navigate('/doctors') : Navigate('/doctors/Dermatologist')}className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">Dermatologist</p>
          <p onClick={()=> (speciality === 'Pediatricians') ? Navigate('/doctors') : Navigate('/doctors/Pediatricians')}className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">Pediatricians</p>
          <p onClick={()=> (speciality === 'Neurologist') ? Navigate('/doctors') : Navigate('/doctors/Neurologist')}className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">Neurologist</p>
          <p onClick={()=> (speciality === 'Gastroentrologist') ? Navigate('/doctors') : Navigate('/doctors/Gastroentrologist')}className="border-gray border-1 rounded text-gray-500 hover:bg-gray-200 cursor-pointer hover:border-blue-500">Gastroentrologist</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                filterdoc.map((items,index)=>(
                    <div onClick={()=> Navigate(`/appointment/${items._id}`)} className="border-black border-2 rounded-2xl">
                        <img src={items.image} className="w-70 bg-blue-300 rounded-2xl" />
                        <p className="pl-3 text-green-950">Available</p>
                        <h3 className="pl-3 text-2xl">{items.name}</h3>
                        <p className="pl-3 font-bold text-gray-700">{items.speciality}</p>
                    </div>
                ))
            }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Doctors