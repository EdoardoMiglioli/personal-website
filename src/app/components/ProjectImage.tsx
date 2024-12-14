'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  imageSrc: StaticImageData | string;
}

const ProjectImage: React.FC<ImageProps> = ({ imageSrc }) => {
  return (
    <button
      className="relative min-w-[489px] min-h-[332px]"
      onClick={() => window.open("https://chiarabarbieri.biz", "_blank")}
    >
      <Image
        className="absolute ml-[50%] min-w-[489px] transition-all duration-500 hover:min-w-[520px]"
        src={imageSrc}
        alt="MacBook mockup with past work showcase"
        style={{ objectFit: 'cover', transform: "translate(-50%, -50%)" }}
        priority
      />
    </button>
  );
};

export default ProjectImage;
