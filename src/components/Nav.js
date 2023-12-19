import React from 'react';
import { IoMdPhotos, IoIosHome, IoMdChatbubbles, IoIosBriefcase, IoMdQuote } from "react-icons/io";
import { Link } from "react-scroll";

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
        <Link to="home" activeclass="active" smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <IoIosHome />
        </Link>
        <Link to="gallery" activeclass="active" smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <IoMdPhotos />
        </Link>
        <Link to="available" activeclass="active" smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <IoIosBriefcase />
        </Link>
        <Link to="contact" activeclass="active" smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <IoMdChatbubbles />
        </Link>
        <Link to="qoute" activeclass="active" smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <IoMdQuote />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;