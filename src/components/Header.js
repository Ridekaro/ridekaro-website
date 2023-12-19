import React from 'react';
const Header = () => {


  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center  mb-12 mx-auto lg:mx-0'>
        <a href='/'>
          <div><span className='text-gradient font-bold text-[35px]'>RIDEKARO</span></div>
        </a>
        <a href='https://api.whatsapp.com/send?phone=+918188822242'>
        <button className='btn  btn-lg'>Lets ride</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
