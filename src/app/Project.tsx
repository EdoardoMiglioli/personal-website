import React from 'react'
import mockup from '/public/images/Transparent_MacBook_Pro.png'
import ProjectImage from './components/ProjectImage'

const Project = () => {
  return (
    <section className='flex flex-col lg:justify-between min-h-screen bg-background'>
      <div className='flex justify-between items-start font-inter mx-6 xs2:mx-20'>
        <p className='text-[24px] font-semibold leading-none'>CHIARA<br />BARBIERI</p>
        <p className='hidden sm:block text-[16px] leading-none'>Personal<br />website</p>
        <p className='text-[16px] font-semibold'>(2024)</p>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-end lg:justify-between mt-auto sm:mt-32 lg:mt-0 mx-6 xs2:mx-20 mb-44 sm:mb-40'>
        <p className='text-justify lg:text-left lg:w-[420px] lg2:w-[440px] xl:w-[484px] text-[16px] xs:text-[18px] sm:text-[24px] 2lg:text-[28px] leading-snug md:leading-[34px]'>Lorem ipsum dolor sit amet consectetur. Vel lectus sodales sed laoreet in auctor porttitor arcu. Purus viverra iaculis magna aliquet accumsan.</p>
        <ProjectImage imageSrc={mockup} />     
      </div>
    </section>
  )
}

export default Project