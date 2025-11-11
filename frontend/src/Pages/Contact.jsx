import { assets } from "../assets/assets_frontend/assets"


const Contact = () => {
  return (
    <div>
      <p className="text-2xl text-center p-10">CONTACT US</p>
      <div className="flex justify-center gap-20 m-10">
        <div>
          <img src={assets.contact_image} className="w-100"/>
        </div>
        <div className="text-lg ">
          <p>OUR OFFICE</p>
          <p>123 Main St, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@ourcompany.com</p>
          <p>Business Hours: Mon-Fri 9am - 5pm</p>
          <br />
          <p>FOLLOW US</p>
          <p>Facebook | Twitter | LinkedIn | Instagram</p>
          <button className="hover:bg-blue-500 border-black border-1 p-3 m-5 cursor-pointer">Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact