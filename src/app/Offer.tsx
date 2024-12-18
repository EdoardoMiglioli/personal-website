import React from 'react'
import Image from 'next/image'
import iphones from '/public/images/Iphone_13_Pro_Mockup_5.png'

const Offer = () => {
  const steps = [
    {
      id: 1,
      title: 'Call',
      text: 'After hiring me, we\'ll hop on a call to talk about your idea and requests'
    },
    {
      id: 2,
      title: 'Design',
      text: 'I\'ll then design the website. We\'ll have a feedback call so you can tell me what to fix'
    },
    {
      id: 3,
      title: 'Reviews',
      text: 'You\'ll have 2 extra reviews on the design to make all the changes you want'
    },
    {
      id: 4,
      title: 'Coding',
      text: 'After having made all the changes, I\'ll code the final version and I’ll ship it.'
    },
  ]

  return (
    <section className='flex flex-col justify-between xs2:items-center md:items-start min-h-screen bg-background'>
      <div className='-mt-[160px] h-[160px] w-screen fading' />
      
      <div className='hidden xs2:flex justify-between xs:ml-10 sm:mx-[60px] md:mx-20 mt-[88px]'>
        <div className='font-medium sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] lg:leading-[42px] xl:leading-[48px]'>
          <div className='flex gap-4 lg:gap-6'>
            <Image className='xs2:w-24 xs2:h-[58px] md:w-[128px] md:h-[77px] lg:w-[146px] lg:h-[88px] xl:w-40 xl:h-24 rounded-2xl' src={iphones} alt='Work showcase iphones mockup' />
            <h4 className='flex items-center'>A unique person deserves a unique<br />website. That's what I'm specialised in.</h4>
          </div>
          <h4 className='mt-[6px] xl:mt-2 xs2:w-[408px] sm:w-[508px] md:w-[616px] lg:w-[820px] xl:w-[928px]'>I rapidly build quality websites by following a clear system that has proved itself with several clients</h4>
        </div>
        <p className='hidden lg2:block min-w-[178px] font-inter text-[16px] font-semibold text-right'>(MY OFFER)</p>
      </div>

      <div className='xs2:hidden flex justify-between mx-[28px] mt-[88px]'>
        <div className='font-medium sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] lg:leading-[42px] xl:leading-[48px]'>
        <div className="relative">
          <Image
            className="w-24 h-[66px] rounded-lg float-left mr-4 lg:mr-6 mb-2"
            src={iphones}
            alt="Work showcase iphones mockup"
          />
          <h4 className="leading-[1.56] text-justify">
            A unique person deserves a unique website. That's what I'm specialised in. I rapidly build quality websites by following a clear system that has proved itself with several clients.
          </h4>
        </div>

          <h4 className='mt-[6px] xl:mt-2 xs2:w-[408px] sm:w-[508px] md:w-[616px] lg:w-[820px] xl:w-[928px]'></h4>
        </div>
        <p className='hidden lg2:block min-w-[178px] font-inter text-[16px] font-semibold text-right'>(MY OFFER)</p>
      </div>

      <ul className='md:w-[calc(100%-160px)] flex sm:hidden lg:flex justify-between flex-col gap-16 lg:gap-auto lg:flex-row ml-6 xs2:ml-0 mt-20 sm:mt-0 md:mx-20 mb-16'>
        {steps.map((step) => 
          <li className='flex flex-col gap-4' key={step.id}>
            <span className='text-[18px] lg:text-[20px] leading-none'>00{step.id}.</span>
            <h4 className='font-medium leading-none text-[24px] lg:text-[32px]'>{step.title}</h4>
            <p className='max-w-[280px] xs:max-w-[320px] xs2:max-w-[340px] lg:max-w-[200px] xl:max-w-[220px] leading-[24px] xs2:text-[18px] lg:leading-[22px] lg:text-[18px] xl:leading-[24px] xl:text-[20px]'>{step.text}</p>
          </li>
        )}
      </ul>

      <div className='hidden sm:flex lg:hidden mt-16 flex-col gap-16'>
        <ul className='flex sm:gap-24 md:gap-32 mx-20'>
          {steps.slice(0,2).map((step) => 
            <li className='flex flex-col gap-4' key={step.id}>
              <span className='sm:text-[18px] md:text-[20px] leading-none'>00{step.id}.</span>
              <h4 className='font-medium leading-none sm:text-[28px] md:text-[32px]'>{step.title}</h4>
              <p className='max-w-[200px] leading-[22px] md:text-[18px] '>{step.text}</p>
            </li>
          )}
        </ul>
  
        <ul className='flex sm:gap-24 md:gap-32 mx-20'>
          {steps.slice(2).map((step) => 
            <li className='flex flex-col gap-4' key={step.id}>
              <span className='sm:text-[18px] md:text-[20px] leading-none'>00{step.id}.</span>
              <h4 className='font-medium leading-none sm:text-[28px] md:text-[32px]'>{step.title}</h4>
              <p className='max-w-[200px] leading-[22px] sm:text-[16px] md:text-[18px] '>{step.text}</p>
            </li>
          )}
        </ul>
      </div>

    </section>
  )
}

export default Offer