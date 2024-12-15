import React from 'react';

const CTAButton = () => {
  return (
    <button
      className="btn z-50 group fixed flex items-center justify-center ml-7 sm:ml-0 w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] transition-all duration-[400ms] hover:w-[108px] hover:h-[108px] sm:hover:w-32 sm:hover:h-32 rounded-full bg-white shadow-custom-1 hover:shadow-none"
      style={{
        top: "calc(100% - 96px)",
        left: "calc(100% - 108px)",
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className="flex items-center justify-center w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] transition-all duration-[400ms] group-hover:w-20 group-hover:h-20 sm:group-hover:w-24 sm:group-hover:h-24 rounded-full bg-white shadow-custom-2 group-hover:shadow-custom-3 leading-none text-[16px] font-medium opacity-[64%]"
      >
        Let's
        <br />
        talk
      </span>
    </button>
  );
};

export default CTAButton;
