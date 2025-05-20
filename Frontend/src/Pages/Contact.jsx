import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='text-xl text-gray-600 font-semibold'>Our Store</p>
          <p className='text-gray-500'>38000 susan road  <br /> Faisalabad, PAKISTAN. </p>
          <p className='text-gray-500'>Tel: (+92)300000000 <br /> Email: talhaakram070@gmail.com</p>
          <p>Carrers at Forever</p>
          <p className='text-gray-500'>Learn more about our team. </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Read more</button>
        </div>

      </div>
      
        <NewsLetterBox />

    </>
  )
}

export default Contact
