"use client"
import React, { useEffect } from 'react';
import "./style.css";
import Success from './component/successMessage';
import SignUp from './component/singupStart';


const Newsletter = () => {


  const bool = false;

    useEffect(() => {
        document.title = "Frontend Mentor | Newsletter sign-up form with success message";
    });


  return (
    <main className='flex bg-newsletterCharcoalGrey justify-center min-h-screen items-center'>
        {/* <Success/> */}
        <SignUp />
    </main>
  )
}

export default Newsletter;