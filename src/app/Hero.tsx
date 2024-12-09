import React from 'react'
import HeroHeader from './components/HeroHeader'

const Hero = () => {
  return (
    <header className='h-screen'>
      <div className='flex flex-col items-center gap-5 mt-20'>
        <HeroHeader />
        <h4 className='text-[24px] leading-[32px] text-center opacity-70 text-secondary'>Make your brand stand out, be different, be unique.</h4>
      </div>

      <div className='absolute left-[60px] bottom-[65px] flex flex-col gap-[7px]'>
        <h3 className='text-[20px] leading-[24px] font-semibold'>Edoardo Miglioli</h3>
        <div className='flex flex-col'>
          <p className='text-[16px] leading-[20px] text-secondary'>Web designer & developer</p>
          <p className='text-[16px] leading-[20px] text-secondary'>hello@edoardomiglioli.com</p>
        </div>
      </div>

    </header>
  )
}

export default Hero