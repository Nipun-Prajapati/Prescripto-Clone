import { assets } from "../assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className="border-black border-t-1 mt-5 p-2">
        <div className="grid grid-cols-3">
            <div>
                <img src={assets.logo} className="w-[200px] mb-8" alt="" />
                <p className="text-[15px]">Lorem ipsum dolor, sit amet adipisicing elit. Deserunt atque blanditiis repellat nobis. Expedita dolores laborum molestias, placeat maiores harum rerum dolorum sequi pariatur earum quae perspiciatis sint odio! Molestias.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl mt-2 mb-8">COMPANY</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl mb-8">GET IN TOUCH</h3>
                <ul>
                    <li>+1-452-965-8525</li>
                    <li>precriptoplatform@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className="border-t-1 border-black text-center"> 
            <p>copyright &copy; 22-9-2025 Prescipto - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer