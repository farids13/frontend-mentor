"use client"

import { error } from 'console';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const SignUp = () => {

  const valueError = "bg-red-500 bg-opacity-40 text-red-500";

  const [hidden, setHidden] = useState("hidden");
  const [errorClass, setErrorClass] = useState("");
  const [email, setEmail] = useState("");
  const route = useRouter();

  function reset () {
    setTimeout(() => {
      setErrorClass("");
      setHidden("hidden");
    }, 2000);
  }

  function submit(e:any) {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailPattern.test(email)){
      setErrorClass("text-green-500");
      route.push("/newsletter/success");
      reset();

    }else{
      setHidden("");
      setErrorClass(valueError);
      reset();
    }


  }

  return (
    <div className='w-[930px] h-[640px] rounded-[40px] p-6 flex bg-white'>
      {/* <!-- Sign-up form start --> */}
    <div className='p-10'>
      <h1 className='font-[700] text-[51px] mt-5'>Stay updated!</h1>
      <p className='mt-4 -tracking-[0.6px] text-base'>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className='mt-6 '>
        <li className='flex -tracking-[0.6px]'><img src="/newsletter/assets/images/icon-success.svg" alt="" className='h-6 mr-4' /> Product discovery and building what matters</li>
        <li className='flex -tracking-[0.6px] mt-2'><img src="/newsletter/assets/images/icon-success.svg" alt="" className='h-6 mr-4' /> Measuring to ensure updates are a success</li>
        <li className='flex -tracking-[0.6px] mt-3'><img src="/newsletter/assets/images/icon-success.svg" alt="" className='h-6 mr-4' /> And much more!</li>
      </ul>
      <form onSubmit={submit}>
        <div className='mt-10 flex flex-col'>
          <div className='text-[11px] font-bold flex justify-between first-letter mr-6'>
              <div>Email address</div>
              <div className={`${hidden} text-red-500`}>Valid email required</div>
          </div>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} className={`w-[375px] h-[55px] mt-2 rounded-lg indent-6 border border-gray-400 bg-transparent ${errorClass}`} type="email" placeholder='email@company.com' />
        </div>
        <button className='hover:bg-gradient-to-r from-newsletterFromGrad to-newsletterToGrad shadow-xl bg-newsletterDarkSlateGrey mt-7 w-[375px] h-[55px] rounded-lg text-white -tracking-wider font-bold '>Subscribe to monthly newsletter</button>
      </form>
    </div>
    {/* <!-- Sign-up form end --> */}

    <img className='rounded-2xl' src="/newsletter/assets/images/illustration-sign-up-desktop.svg" alt="Image Hero" />
    </div>
  )
}

export default SignUp;
