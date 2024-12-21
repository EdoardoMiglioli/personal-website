'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  imageSrc: StaticImageData | string;
}

const ProjectImage: React.FC<ImageProps> = ({ imageSrc }) => {
  return (
    <button
      className="relative mt-64 xxs:mt-72 sm:mt-[420px] lg:m-0 min-w-[240px] xxs:min-w-[296px] xs:min-w-[320px] sm:min-w-[489px] lg:min-w-[400px] lg2:min-w-[440px] xl:min-w-[489px]"
      onClick={() => window.open("https://chiarabarbieri.biz", "_blank")}
    >
      <Image
        className="absolute ml-[50%] transition-all duration-500 hover:scale-120"
        src={imageSrc}
        alt="MacBook mockup with past work showcase"
        style={{ objectFit: 'cover', transform: "translate(-50%, -96%)" }}
        priority
      />
    </button>
  );
};

export default ProjectImage;
