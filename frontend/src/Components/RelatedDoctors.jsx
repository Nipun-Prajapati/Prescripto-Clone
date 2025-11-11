import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";


const RelatedDoctors = ({docId,speciality}) => {

    const { doctors } = useContext(AppContext);
    const [relatedDoctors, setRelatedDoctors] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        if(doctors.length > 0 && speciality)
            {
                const relatedData = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId);
                setRelatedDoctors(relatedData);
            }
    }, [doctors, docId, speciality]);


  return (
    <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl">Top Doctors to Book</h1>
        <p>simply browse through our extensive list of trusted doctors.</p>
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                relatedDoctors.map((items,index)=>(
                    <div onClick={()=> {Navigate(`/appointment/${items._id}`), scrollTo(0,0  )}} className="border-black border-2 rounded-2xl">
                        <img src={items.image} className="w-70 bg-blue-300 rounded-2xl" />
                        <p className="pl-3 text-green-950">Available</p>
                        <h3 className="pl-3 text-2xl">{items.name}</h3>
                        <p className="pl-3 font-bold text-gray-700">{items.speciality}</p>
                    </div>
                ))
            }
        </div>
        <div className="mt-5">
            <button onClick={()=> Navigate('/doctors')} className="p-3 bg-gray-300 rounded-3xl">See More</button>
        </div>
    </div>
  )
}

export default RelatedDoctors