import React from 'react'
import HeroHeader from './components/HeroHeader'

const Hero = () => {
  return (
    <header className='h-screen'>
      <div className='flex flex-col items-center gap-5 mt-14 sm:mt-20'>
        <HeroHeader />
        <h4 className='text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] md:leading-snug text-center opacity-70 text-secondary'>Make your brand stand out, be different, be unique.</h4>
      </div>

      <div className='absolute left-[28px] xs:left-[40px] sm:left-[60px] bottom-[112px] sm:bottom-[128px] flex flex-col gap-1 xs:gap-[7px]'>
        <h3 className='text-[18px] xs:text-[20px] leading-[24px] font-semibold'>Edoardo Miglioli</h3>
        <div className='flex flex-col'>
          <p className='text-[14px] xs:text-[16px] leading-[20px] text-secondary'>Web designer & developer</p>
          <p className='text-[14px] xs:text-[16px] leading-[20px] text-secondary'>hello@edoardomiglioli.com</p>
        </div>
      </div>

    </header>
  )
}

export default Hero