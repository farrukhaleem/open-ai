import React from 'react'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import Tiktok from './icons/Tiktok'
import Twitter from './icons/Twitter'
import facebook from './../images/facebook.png';
import instagram from './../images/instagram.png';
import twitter from './../images/twitter.png';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="socials">
          <a href="#"><Image src={twitter} alt="Twitter" width={30} height={30} /></a>
          <a href="#"><Image src={instagram} alt="Instagram" width={30} height={30} /></a>
          <a href="#"><Image src={facebook} alt="Facebook" width={30} height={30} /></a>
        </div>
        <div className="footer-links">
          
          <Link href="/">Chat</Link>
          <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
          
          <Link href="/about-us">About Us</Link>
          <span style={{ margin: '0 10px', borderLeft: '2px solid #fff', height: '12px', display: 'inline-block' }}></span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer