/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react'
import bgExam from '../../public/base/images/hero-desktop.jpg'
import bgExamPhone from '../../public/base/images/hero-mobile.jpg'
import iconError from '../../public/base/images/icon-error.svg'
import iconArrow from '../../public/base/images/icon-arrow.svg'
import logo from '@/public/base/images/logo.svg';
import Image from 'next/image'
import './style.css'
  
const base = () => {

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [border, setBorder] = useState('border-2 border-zinc-400');
  const [isHidden, setIsHidden] = useState('hidden');

  const emailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const validate = (p: any) =>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(p);
  }; 

  const submit = (e:any) => {
    e.preventDefault();

    const isValid = validate(email);
    setIsValidEmail(isValid);

    if(isValid){
      setBorder('border-2 border-green-500')
    }
    else{
      setIsHidden('');
      setBorder('border-2 border-softRed')
      setTimeout(() => {
        setIsHidden('hidden');
        setBorder('border-2 border-zinc-400');
      }, 2000);
    }

  }

  return (
    <main className='flex justify-center items-center h-screen bg-baseBgColor'>
        <div className="transition-all duration-300 ease-out lg:mt-5 font-josefin w-[1440px] h-[800px] flex relative lg:flex-col items-center lg:w-[375px] lg:h-[700px] bg-[url('/base/images/bg-pattern-desktop.svg')] bg-no-repeat shadow-lg">
            <Image className='absolute top-16 left-[11.5%] lg:-top-[55px] lg:left-8 lg:w-[100px]' src={logo} alt='Logo'/>
            <Image src={bgExamPhone} alt='Image Hero Mobile' className='order-1 hidden lg:block '/>
            <Image src={bgExam} alt='Image Hero' className='order-2 lg:hidden' />

            <div className='order-1 flex justify-center items-center'>
              <div className='w-[60%] h-[60%] pt-[70px] lg:pt-[5px] lg:w-[80%] lg:text-center'>
                <h1 className='text-6xl tracking-[20px] leading-[70px] uppercase lg:text-[40px] lg:leading-[40px] lg:tracking-[10px] lg:text-center'><p className='font-[300] text-desaturatedRed'>We're</p>coming soon</h1>
                <p className='mt-5 w-[90%] leading-7 lg:w-full text-sm lg:leading-[21px] lg:mt-4'>
                  Hello fellow shoppers! We're currently building our new fashion store.
                  Add your email below to stay up-to-date with announcements and our launch deals.
                </p>

                <form onSubmit={submit}>
                  <div className='flex mt-10 w-[79%] h-[55px] rounded-full placeholder:text-slate-400 relative lg:mt-9 lg:w-[91%] lg:h-[48px]'>
                    <input className={`w-full indent-8 bg-transparent rounded-full ${border}`} type="text"
                      placeholder='Email Address'
                      value={email}
                      onChange={emailChange}
                    />
                    <Image src={iconError} alt='Icon Error' className={`absolute right-16 top-1/4 ${isHidden}`} />
                    <button className="submit absolute flex justify-center items-center right-0 h-full w-[100px] transform translate-x-1/2 rounded-full shadow-2xl border-none lg:w-[70px]">
                      <Image src={iconArrow} alt='Icon Arrow'/>
                      </button>
                  </div>
                </form>
                {!isValidEmail && (
                  <p className="text-red-500 ml-7 mt-2 text-sm tracking-tight lg:text-left">Please provide a valid email!</p>
                )}
              </div>
            </div>
        </div>
    </main>
  )
}

export default base
