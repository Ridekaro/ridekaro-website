import React from 'react';

const Footer = () => {
  return <footer className="text-white body-font" style={{ marginBottom: '80px' }}>
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl text-gradient">Ridekaro</span>
      </a>
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Ridekaro —
        <a href='https://instagram.com/ride.karoo?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' className="text-white ml-1" >@ride.karoo</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Co-Founder — Tanishq Dhariwal, Aman Gupta
        </p>

      </span>
    </div>
  </footer>
};

export default Footer;