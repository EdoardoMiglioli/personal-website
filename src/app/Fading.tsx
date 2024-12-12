'use client'
import React, { useEffect, useState } from 'react';

const Fading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footerElement = document.getElementById('footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.9, 
      }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
      <div
        className={`z-10 bottom-0 sticky h-[160px] w-screen fading ${
          isVisible ? '' : 'hidden'
        }`}
      />
  );
};

export default Fading;
