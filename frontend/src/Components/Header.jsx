import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets_frontend/assets"


const Header = () => {
  return (
    <div className="h-[90dvh] w-dvw flex items-center justify-center">
        <div className="h-130 w-320 bg-blue-400 grid grid-cols-2 rounded-2xl">
        {/* LEFT Side */}
        <div className="flex flex-col ml-20 gap-5 justify-center">
            <p className="text-4xl">Book Appointment With <br/>Trusted Doctors</p>
            <div className="flex">
                <img src={assets.group_profiles} />
                <p>
                    Simply browse through our extensive list of trusted<br/> doctors,
                    schedule your appointment hassle-free
                </p>
            </div>
            <a href='#speciality' className="flex bg-amber-100 w-55 rounded-2xl cursor-pointer">
                <button className="p-5 cursor-pointer">Book Appointment</button>
                <img src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* RIGHT Side */}

        <div>
            <img src={assets.header_img} alt="" />
        </div>

    </div>
    </div>
  )
}

export default Header