import React from 'react'
import imgHero from '../../public/order/images/illustration-hero.svg'
import Image from 'next/image'
import iconMusic from '../../public/order/images/icon-music.svg';
import bgStyle from '../../public/order/images/pattern-background-desktop.svg';

const order = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-paleBlue z-0'>
      <Image src={bgStyle} alt='Background Style' className='absolute top-0 h-1/2 z-10'/>
      <main className="container flex drop-shadown-lg justify-start items-center flex-col z-20 font-redHatDisplay w-[450px] h-[700px] rounded-3xl overflow-hidden text-center bg-white">
        <Image src ={imgHero} alt="Image Hero"/>
        <h1 className='mt-12 font-[900] text-[28px]'>Order Summary</h1>
        <p className='px-16 tracking-normal leading-[26px] my-3 text-base'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className='square my-2 p-[25px] rounded-lg w-[80%] h-[100px] flex items-center bg-veryPaleBlue'>
          <Image src={iconMusic} alt='Icon Music'/>
          <span className='ml-[22px]'>
            <h4 className='font-[900] -mt-1 mb-1'>Annual Plan</h4>
            <p>$59.99/year</p>
          </span>
          <button className='ml-auto text-brightBlue underline text-[15px] -mt-1 font-[600]'>Change</button>
        </div>
        <button className="submit-btn mt-5 w-[79%] h-[50px] rounded-xl text-white font-[600] bg-brightBlue ">Proceed to Payment</button>
        <button className="cancel-btn my-4 w-[79%] h-[50px] rounded-xl text-[15px] font-[600] text-grayishBlue">Cancel Order</button>
      </main>
    </div>
  )
}

export default order
