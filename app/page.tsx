import Image from 'next/image'

import React from 'react';
import heroImg from "@/public/bg-hero.jpg";

function Home() {
  return (
    <div className={`font-josefin min-h-screen justify-center flex items-center `}>
        <Image src={heroImg} alt='Hero Image' className='h-screen w-screen absolute object-cover blur-md'/>
        <main className={`relative flex flex-col justify-start items-center rounded-lg h-[1080px] w-[1920px] text-white bg-[url('/bg-hero.jpg')] bg-center bg-no-repeat bg-cover`}>
          <h1 className={`mt-20 text-[120px] font-bold`}>WELCOME</h1>
          <p className='mt-10'>Hello There, Please continue with your email </p>
          <form className='mt-32 flex gap-5'>
            <input className='w-[720px] shadow-2xl h-[80px] font-bold text-3xl pt-2 text-white indent-10 bg-transparent border-y-red-400 border-2 rounded-full' placeholder='Your Email ..' type="text" />
            <button className='hover:bg-black hover:text-white rounded-full shadow-2xl w-[200px] font-bold text-4xl uppercase pt-2 h-full bg-red-400 ' >next</button>
          </form>
        </main>
      </div>
  )
}

export default Home;

