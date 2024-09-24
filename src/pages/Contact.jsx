import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
       <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img src={assets.contact_img} alt="" className='w-full md:w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>123 street <br />golf city 20354</p>
          <p className='text-gray-500'>Tel: 12345678</p>
          <p className='font-semibold text-xl text-gray-600'>Careers At Forever</p>
          <p className='text-gray-500'>Learn More About Our Team & Job Openings</p>
          <button className='border bg-black text-white px-8 py-3 active:bg-cyan-500'>Explore Jobs</button>
        </div>
        
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
