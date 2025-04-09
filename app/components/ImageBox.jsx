'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import krishna from './../images/krishna.png';

const ImageBox = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      height: 300
    }}>
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="p-4 flex items-center justify-center">
        <Image
          src={krishna}
          alt="Ask Krishna"
          width={isScrolled ? 150 : 300}
          height={isScrolled ? 150 : 300}
          className="transition-all duration-300"
        />
      </div>
    </div>

    </div>
  );
};

export default ImageBox;
