import React from 'react'
import Image from 'next/image'
import mockup from '/public/images/Transparent_MacBook_Pro.png'

const Project = () => {
  return (
    <section className='flex flex-col justify-between min-h-screen mt-[200px]'>
      <div className='flex justify-between items-start font-inter mx-20'>
        <p className='text-[24px] font-semibold leading-none'>CHIARA<br />BARBIERI</p>
        <p className='text-[16px] leading-none'>Personal<br />website</p>
        <p className='text-[16px] font-semibold'>(2024)</p>
      </div>

      <div className='flex items-end justify-between mx-20 mb-40'>
        <p className='w-[484px] text-[28px] leading-[34px]'>Lorem ipsum dolor sit amet consectetur. Vel lectus sodales sed laoreet in auctor porttitor arcu. Purus viverra iaculis magna aliquet accumsan.</p>
        <Image
          className="min-w-[489px]"
          src={mockup}
          alt="Mackbook mockup with past work showcase"
          style={{ objectFit: 'cover' }}
          priority
        />
        
      </div>
    </section>
  )
}

export default Project