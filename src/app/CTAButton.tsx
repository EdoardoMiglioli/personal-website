import React from 'react'

const CTAButton = () => {
  return (
    <button className='z-50 group fixed flex items-center justify-center w-[104px] h-[104px] transition-all duration-[400ms] hover:w-32 hover:h-32 rounded-full bg-white right-[60px] bottom-[60px] shadow-custom-1' >
        <span className='flex items-center justify-center w-[80px] h-[80px] transition-all duration-[400ms] group-hover:w-24  group-hover:h-24 rounded-full bg-white shadow-custom-2 leading-none text-[16px] font-medium opacity-[64%]'>Let's<br />talk</span>
    </button>
  )
}

export default CTAButton