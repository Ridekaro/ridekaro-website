import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import banner from "../assets/banner-remove.png";

const Banner = () => {
  return <section className="min-h-[85vh lg:min-h-[78vh] flex items-center" id='home'>
    <div className='conatainer mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Ridekaro</motion.h1>

          <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>

            <span className=' text-white mr-4'>I am a </span>
            <TypeAnimation sequence={['Rider', 2000, 'Hodophile', 2000, 'Bike enthusiast', 2000,]} speed={50}
              className='text-accent' wrapper='span' repeat={Infinity} />
          </motion.div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            <text>Cheers! Now you can rent a bike in PANTNAGAR, RUDRAPUR, KICHHA, LALKUAN at really unbelievable prices. We have come up with a wide range of two-wheelers to choose at really affordable prices.....

Ridekaro.. is also offering a free helmet with every bike/ Scooty on rent. You just need to take an original ID proof and a valid driving license at the time of picking up your bike.
<br />
RIDE KARO<br />
Quality. Service. Safety.</text>
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href='https://api.whatsapp.com/send/?phone=%2B918188822242&text&type=phone_number&app_absent=0'>
              <button className='btn btn-lg'>Contact me</button>
            </a>
            <a href='/' className=' text-gradient btn-link'>Let's Ride</a>
          </div>
          <div className=' flex text-[20px] gap-x-6 max-w-max mx-auto'>
            <a href='https://api.whatsapp.com/send/?phone=%2B918188822242&text&type=phone_number&app_absent=0'>
              <FaWhatsapp />
            </a>
            <a href='https://instagram.com/ride.karoo?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
              <FaInstagram />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>
          </div>
        </div>
        <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px] mx-auto'>
          <img className="mix-blend-normal" src={banner} alt='' />
        </motion.div>
      </div>

    </div>
  </section>;
};

export default Banner;


