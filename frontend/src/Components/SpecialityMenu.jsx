import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <>
    <div id="speciality" className="h-70 flex flex-col items-center gap-3">
      <h1 className="text-4xl">Find by Speciality</h1>
      <p>
        Simply browse through our extensive list of trusted doctors,schedule
        your appointment hassle-free.
      </p>
      <div className="flex gap-10 text-center">
        {
        specialityData.map((items, index) => (
          <Link onClick={()=> scrollTo(0,0)} key={index} to={`/doctors/${items.speciality}`}>
            <img src={items.image} />
            <p>{items.speciality}</p>
          </Link>
        ))
        }
      </div>
    </div>
    </>
  );
};

export default SpecialityMenu;
