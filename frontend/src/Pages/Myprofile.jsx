import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Myprofile = () => {
  const [userData, setuserData] = useState({
    name: "Nipun Prajapati",
    image: assets.profile_pic,
    email: "xyz@gmail.com",
    phone: +913456783672,
    address: {
      line1: "B-10,Stark Tower",
      line2: "New York, America",
    },
    gender: "Male",
    dob: "2006-08-04",
  });

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col p-3  ">
      <div className="rounded-full border-2 border-black overflow-hidden">
        <img src={userData.image} alt=""className="rounded-full" />
      </div>

      <div className="text-2xl text-center">
        {isEdit === true ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        ) : (
          <p>{userData.name}</p>
        )}
        <hr className="w-200"/>
      </div>

      <p className="underline">CONTACT INFORMATION</p>

      <div className="flex gap-5">
        <p>Email :</p>
        {isEdit === true ? (
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        ) : (
          <p>{userData.email}</p>
        )}
      </div>

      <div className="flex gap-5" >
        <p>Phone :</p>
        {isEdit === true ? (
          <input
            type="tel"
            value={userData.phone}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
          />
        ) : (
          <p>{userData.phone}</p>
        )}
      </div>

      <div className="flex gap-5">
        <p>Address :</p>
        {isEdit === true ? (
          <input
            type="text"
            value={userData.address.line1}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                address: { ...prevState.address, line1: e.target.value },
              }))
            }
          />
        ) : (
          <p>{userData.address.line1}</p>
        )}
      </div>

      <p className="underline">BASIC INFORMATION</p>
      <div className="flex gap-5">
        <p>Gender :</p>
        {isEdit === true ? (
          <input
            type="text"
            value={userData.gender}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                gender: e.target.value,
              }))
            }
          />
        ) : (
          <p>{userData.gender}</p>
        )}
      </div>
      <div className="flex gap-5">
        <p>Data of Birth :</p>
        {isEdit === true ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setuserData((prevState) => ({
                ...prevState,
                dob: e.target.value,
              }))
            }
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>
      <div>
        {
          isEdit === true ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setisEdit(false)}
            >
              Save Information
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setisEdit(true)}
            >
              Edit Information
            </button>
          )} 
      </div>
    </div>
  );
};

export default Myprofile;
