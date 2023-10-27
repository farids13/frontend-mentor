import React from 'react';
import './style.css';
import Image from 'next/image';
import logoPing from '@/public/ping/images/logo.svg';
import hero from '@/public/ping/images/illustration-dashboard.png';
import fb from '@/public/ping/images/facebook-176-svgrepo-com.svg';
import twitter from '@/public/ping/images/twitter-154-svgrepo-com.svg';
import Ig from '@/public/ping/images/instagram-svgrepo-com.svg';

export const metadata = {
    title: "Frontend Mentor | Ping coming soon page",
}

function Ping() {
  return (
    <main className="font-libreFranklin  min-h-screen flex flex-col justify-start items-center">
        <Image src={logoPing} alt='Logo Ping' className='mt-[85px]'/>
        <h1 className='text-[44px] font-[300] mt-12 tracking-wider'>We are launching <b>soon!</b></h1>
        <h2 className='mt-3 text-xl'>Subscribe and get notified</h2>
        <div className='mt-9 gap-5 flex h-[52px]'>
            <input className='w-[420px] indent-8 rounded-full bg-transparent' type="text" placeholder='Your Email Address....' />
            <button className='w-[200px] bg-pingBlue rounded-full text-white tracking-normal'>Notify Me</button>
        </div>

        <Image src={hero} className='opacity-25 w-[640px] mt-[90px]' alt='hero image' />
        <div className='relative w-4 h-4 gap-7  flex flex-row justify-center mt-20'>
          <Image src={fb} alt='facebook Icon'/>
          <Image src={twitter} alt='twitter Icon'/>
          <Image src={Ig} alt='Instagram Icon'/>
        </div>

        <footer className='text-[12px] opacity-50 mt-7'>&copy; Copyright Ping. All rights reserved.</footer>
    </main>
  );
}

export default Ping;
