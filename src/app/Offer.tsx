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
    <section className='flex flex-col justify-between h-screen bg-background'>
      <div className='-mt-[160px] h-[160px] w-screen fading' />
      
      <div className='mx-20 mt-[88px] flex justify-between'>
        <div className='font-medium text-[36px] leading-[48px]'>
          <div className='flex gap-6'>
            <Image className='w-40 h-24 rounded-2xl' src={iphones} alt='Work showcase iphones mockup' />
            <h4>A unique person deserves a unique<br />website. That's what I'm specialised in.</h4>
          </div>
          <h4 className='mt-2 w-[928px]'>I rapidly build quality websites by following a clear system that has proved itself with several clients</h4>
        </div>
        <p className='font-inter text-[16px] font-semibold text-right'>(MY OFFER)</p>
      </div>

      <ul className='flex justify-between mx-20 mb-16'>
        {steps.map((step) => 
          <li className='flex flex-col gap-4' key={step.id}>
            <span className='text-[20px] leading-none'>00{step.id}.</span>
            <h4 className='font-medium leading-none text-[32px]'>{step.title}</h4>
            <p className='max-w-[220px] leading-[24px] text-[20px]'>{step.text}</p>
          </li>
        )}
      </ul>

    </section>
  )
}

export default Offer