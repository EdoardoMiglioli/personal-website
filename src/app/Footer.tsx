import React from 'react'
import Image from 'next/image'

import X from '/public/icons/X.svg'
import LinkedIn from '/public/icons/LinkedIn.svg'
import Dribbble from '/public/icons/Dribbble.svg'

const Footer = () => {
  return (
    <footer id='footer' className='h-screen relative bg-background'>
      <div className='absolute inset-0 self-center mx-20 flex justify-between items-start'>
        <p className='font-inter text-[16px] font-semibold'>(GET IN TOUCH)</p>

        <div className='flex flex-col gap-6 w-[484px]'>
          <p className='text-[36px] leading-[48px] font-medium'>Let's get in touch and start talking about your idea.</p>
          <button className='w-fit px-5 py-4 border-[1px] border-foreground rounded-full text-[20px] leading-none transition-all duration-[350ms] hover:bg-foreground hover:text-background'>Let's talk</button>
        </div>

        <div className='flex flex-col justify-between h-[192px]'>
          <button><Image src={X} alt='X' height={40} width={40} /></button>
          <button><Image src={LinkedIn} alt='LinkedIn' height={40} width={40} /></button>
          <button><Image src={Dribbble} alt='Dribbble' height={40} width={40} /></button>
        </div>
      </div>

      <div className='w-full absolute bottom-0 px-20 mb-10 flex justify-between text-[16px] leading-[20px]'>
        <p>hello@edoardomiglioli.com</p>
        <p>Copyright©EdoardoMiglioli</p>
      </div>
    </footer>
  )
}

export default Footer