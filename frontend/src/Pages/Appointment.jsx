import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../Components/RelatedDoctors";

const Appointment = () => {
    const { docId } = useParams();
    const { doctors } = useContext(AppContext);
    const [docInfo, setdocInfo] = useState(null);
    const [docSlots, setdocSlots] = useState([])
    const [slotIndex, setslotIndex] = useState(0)
    const [slotTime,setslotTime] = useState('')
    const dayOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setdocInfo(docInfo);
    }

  // fetchDocInfo identity shouldn't be a dependency
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

    const getAvailableSlots = async() => {
        const today = new Date();
        // build slots locally to avoid accumulating duplicates when effects run multiple times
        const slotsByDay = [];

        for (let i = 0; i < 7; i++) {
          const currentDate = new Date(today);
          currentDate.setDate(today.getDate() + i);

          const endTime = new Date(today);
          endTime.setDate(today.getDate() + i);
          endTime.setHours(21,0,0,0);

          // check same calendar day (compare date strings)
          if (today.toDateString() === currentDate.toDateString()) {
            const now = new Date();
            const startHour = now.getHours() > 10 ? now.getHours() + 1 : 10;
            const startMinutes = now.getMinutes() > 30 ? 30 : 0;
            currentDate.setHours(startHour, startMinutes, 0, 0);
          } else {
            currentDate.setHours(10, 0, 0, 0);
          }

          const timeSlots = [];
          const cursor = new Date(currentDate);
          while (cursor < endTime) {
            const formatedTime = cursor.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeSlots.push({ datetime: new Date(cursor), time: formatedTime });
            cursor.setMinutes(cursor.getMinutes() + 30);
          }

          slotsByDay.push(timeSlots);
        }

        // set once to prevent duplicate accumulation (React StrictMode may call effects twice in dev)
        setdocSlots(slotsByDay);
    }


    useEffect(()=>{
      getAvailableSlots()
    },[doctors,docId])


    return docInfo && (
        <div>
            <div className="flex justify-center m-5 gap-5">
                <div className="bg-blue-500 rounded-2xl">
                    <img src={docInfo.image} alt="Doctor" className="w-200 h-80" />
                </div>
                <div className="border-1 border-black rounded-2xl p-5">
                  <h1 className="text-2xl mb-5 flex gap-2">{docInfo.name}
                    <img src={assets.verified_icon} alt="" />
                  </h1>
                  <p className="mb-3">{docInfo.degree} - {docInfo.speciality}
                    <button className="border-1 ml-4 p-1 border-black rounded">{docInfo.experience}</button>
                  </p>
                  <p className="flex gap-2">About 
                    <img src={assets.info_icon} alt="" />
                  </p>
                  <p className="mb-3">{docInfo.about}</p>

                  <p>Appointment fees :- $ {docInfo.fees}</p>
                </div>
            </div>
            {/**Booking Slots */}
            <div className="flex flex-col justify-center items-center gap-10">
              <p className="text-2xl">Booking Slots</p>
              <div className="flex gap-3 cursor-pointer">
                {
                  docSlots.length > 0 && docSlots.map((item, index) => (
                    <div key={index} onClick={()=> setslotIndex(index)} className={`${slotIndex === index ? 'bg-blue-500 text-white' : 'border-black' } p-5 border-1 border-black rounded-2xl text-center`}>
                      <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                      <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  ))
                }
              </div>
              {/**Select Time */}
              <div className="flex w-3xl  overflow-x-auto gap-5 whitespace-nowrap">
                {
                  docSlots.length && docSlots[slotIndex].map(
                    (item, index) => (
                      <p
                        className={`border-1 border-black px-4 py-2 rounded cursor-pointer ${slotTime === item.time ? 'bg-blue-500 text-white' : ''}`}
                        key={index}
                        onClick={() => setslotTime(item.time)}
                      >
                        {item.time.toLowerCase()}
                      </p>
                    )
                  )
                }
              </div>

                <button className="w-70 h-10 bg-blue-500 rounded-4xl hover:text-white cursor-pointer">Book An Appointment</button>

            </div>
              <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    )
}

export default Appointment