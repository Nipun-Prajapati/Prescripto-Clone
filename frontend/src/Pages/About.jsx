import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div>
        <p className='text-2xl text-center m-5'>About Us</p>
      </div>
      <div className='flex justify-center items-center m-5 gap-5'>
        <img src={assets.about_image} className='w-80 h-80 rounded-2xl'/>
        <div className='w-200 p-5 border-1 border-black rounded-2xl line-clamp-13 m-5'>
          <p>We are a team of dedicated professionals committed to providing top-notch healthcare services. Our mission is to ensure that every patient receives personalized care and attention, fostering a healthy and happy community.</p>
          <p>Our vision is to be a leading healthcare provider known for excellence, innovation, and compassion. We strive to create a supportive environment where patients feel valued and empowered to take charge of their health.</p>
          <p>Our values include integrity, empathy, and collaboration. We believe in treating every patient with respect and dignity, working together with our team and the community to achieve the best possible outcomes.</p>
          <p>We are committed to continuous improvement and staying at the forefront of medical advancements to provide the best care possible.</p>
          <p>Thank you for choosing us as your healthcare partner. We look forward to serving you!</p>
        </div>
      </div>
      <p className='text-center text-2xl'>WHY CHOOSE US</p>
      <div className='flex justify-center items-center m-5 gap-5 '>
        <div className='w-100 border-1 border-black rounded-2xl p-5'>
          <p>EFFICIENCY :</p>
          <p>We streamline our processes to minimize wait times and maximize patient satisfaction.</p>
        </div>
        <div className='w-100 border-1 border-black rounded-2xl p-5'>
          <p>EXPERTISE :</p>
          <p>Our team is composed of highly qualified professionals extensive experience in their fields.</p>
        </div>
        <div className='w-100 border-1 border-black rounded-2xl p-5'>
          <p>COMPASSION :</p>
          <p>We treat every patient with kindness and respect, ensuring a supportive environment for all.</p>
        </div>
      </div>
    </div>
  )
}

export default About