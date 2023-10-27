import React from 'react';
import './style.css';
import Image from 'next/image';
import logoPing from '@/public/ping/images/logo.svg';

export const metadata = {
    title: "Frontend Mentor | Ping coming soon page",
}

function Ping() {
  return (
    <main className="font-libreFranklin min-h-screen flex flex-col justify-start items-center">
        <Image src={logoPing} alt='Logo Ping' className='mt-7'/>
        <h1 className='text-[44px] font-[600] mt-11'>We are launching <b>soon!</b></h1>
        <h2 className='mt-5 text-xl'>Subscribe and get notified</h2>
        <div>
            <input type="text" placeholder='Your Email Address....' />
            <button className=''>Notify Me</button>

        </div>

        &copy; Copyright Ping. All rights reserved.
    </main>
  );
}

export default Ping;
