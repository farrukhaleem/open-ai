'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import krishna from './../images/krishna.png';

const ImageBox = () => {
  const [isScrolled, setIsScrolled] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      
      setIsScrolled(300 - (window.scrollY * 0.9));
    };
    
    setIsScrolled(300 - (window.scrollY * 0.9));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <div style={{
      height: 300
    }}>
    <div className="fixed top-0 left-0 w-full">
      <div className="pt-4 flex items-center justify-center">
        <Image
          src={krishna}
          alt="Ask Krishna"
          width={isScrolled}
          height={isScrolled}
          className="transition-all duration-10"
        />
      </div>
    </div>

    </div>
  );
};

export default ImageBox;
