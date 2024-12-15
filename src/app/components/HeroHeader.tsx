'use client'
import React, { useState } from 'react'

const HeroHeader = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number | null>(null);
  const text = "I build tailored website\nfor freelancers";

  const characters = text.split("");

  return (
    <h1 className="w-[740px] text-[28px] xs:text-[36px] sm:text-[48px] md:text-[64px] leading-[32px] xs:leading-[40px] sm:leading-[52px] md:leading-[68px] font-medium text-center whitespace-pre-line">
      {characters.map((char, index) => {
        let fontWeight = "font-medium";
        if (currentLetterIndex === index) {
          fontWeight = "font-black";
        } else if (
          currentLetterIndex === index - 1 || 
          currentLetterIndex === index + 1 
        ) {
          fontWeight = "font-bold";
        } else if (
            currentLetterIndex === index - 2 || 
            currentLetterIndex === index + 2 
        ) {
            fontWeight = "font-semibold";
        }

        // Render each character with hover logic
        return (
          <span
            key={index}
            className={`transition-all ${fontWeight}`}
            onMouseEnter={() => setCurrentLetterIndex(index)}
            onMouseLeave={() => setCurrentLetterIndex(null)}
          >
            {char === "\n" ? <br /> : char}
          </span>
        );
      })}
    </h1>
  );
};

export default HeroHeader;
