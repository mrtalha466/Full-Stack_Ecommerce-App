import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div className="">
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w2/4">
          <p>Forever was born out passion for innovation and desire selection discover, explore, and purchase a wide range of products from the comfort from thier homes. explore, and purchase a wide range of products from the comfort from thier homes.</p>
          <p>since our inception , we've worked tirelesly to curate a deserve seletion  discover, explore, and purchase a wide range of products from the comfort from thier homes explore, and purchase a wide range of products from the comfort from thier homes.</p>
          <b className='text-gray-700'>Our Mission</b>
          <p>Our mission at  explore, and purchase a wide range of products from the comfort from thier homes. explore, and purchase a wide range of products from the comfort from thier homes.</p>
        </div>

      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">

        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticolsy select and vet each product to ensure it meets our stringent Quality standards.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle free ordering process, shipping has never been easier.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Our team of dedicated profestionals is here to assits you the way, ensurring your satisfaction is our top priority.</p>
        </div>

      </div>

        <NewsLetterBox />
        
    </div>
  )
}

export default About
