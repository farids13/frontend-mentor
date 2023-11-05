"use client"
import Image from 'next/image'

import React, { useState } from 'react';
import heroImg from "@/public/bg-hero.jpg";
import ValidationUtil from  '@/utils/ValidationUtil';

function Home() {

  const [validEmail, setValidEmail] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");

  function submit(e:any){
    e.preventDefault();

    !ValidationUtil.validateEmail(email)? setValidEmail(true) : setValidEmail(false);

  }

  return (
    <div className={`font-josefin min-h-screen justify-center flex items-center `}>
        <Image src={heroImg} alt='Hero Image' className='h-screen w-screen absolute object-cover blur-md'/>
        <main className={`relative flex flex-col justify-start items-center rounded-lg h-[1080px] w-[1920px] text-white bg-[url('/bg-hero.jpg')] bg-center bg-no-repeat bg-cover`}>
          <h1 className={`mt-20 text-[120px] font-bold`}>WELCOME</h1>
          <p className='mt-10'>Hello There, Please continue with your email </p>
          <form className='mt-32 flex gap-5' onSubmit={(e) => submit(e)}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${validEmail ? "border-yellow-500 border-4 placeholder-yellow-500" : "border-amber-500 border"} w-[720px] shadow-2xl h-[80px] font-bold text-3xl pt-2 text-white indent-10 bg-transparent rounded-full`} placeholder={validEmail ? "example@gmail.com" : "Your Email ..."} type="text" />
            <button className='hover:bg-black hover:text-white rounded-full shadow-2xl w-[200px] font-bold text-4xl uppercase pt-2 h-full bg-red-400 ' >next</button>
          </form>
          <p className={`${validEmail ? "" : "hidden"} mr-[600px] mt-8 text-yellow-400 shadow-lg `}> !!! Please Input Valid Email Format</p>
        </main>
      </div>
  )
}

export default Home;
