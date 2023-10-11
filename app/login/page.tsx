import React from 'react'
import './style.css'
import logoIr from '@/public/ir/IRCellLogo.png'
import Image from 'next/image'

const login = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
    <div>
        <main className='flex justify-center items-center h-screen bg-irSoftBlue'>
            <div className='w-[450px] h-[750px] flex flex-col items-center gap-10 bg-white rounded-3xl shadow-2xl'>  
                <Image src={logoIr} alt="logoIr" className='w-[50%]'/>

                <div className='title text-center w-full text-3'>
                    <h1 className='text-4xl mb-10 bg-irBlue shadow-lg font-sans font-bold text-white'>IR-CELL</h1>
                    <span className='text-3xl uppercase '>Login</span>
                </div>
                <form action="" className='w-[80%] h-auto text-xl flex flex-col gap-2'>
                    <h3 className='flex flex-row gap-3'>
                    <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                        Email
                    </h3>
                    <input placeholder='Email' type="text" className='indent-8 border-2 border-solid border-gray-400 rounded-lg'/>
                    <h3 className='flex flex-row gap-3'>
                    <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                        Password
                    </h3>
                    <input placeholder='Password' type="password" className='indent-8 border-2 border-solid border-gray-400 rounded-lg' />
                    <button className='mt-5 hover:shadow-xl text-white font-bold uppercase h-10 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' >Login</button>
                </form>
                <p className='text-sm text-gray-400 mt-auto'>Powered {year} By IR CELL Suport By <a href="https://github.com/farids13">Farid Satria</a></p>
            </div>
        </main>
    </div>
  )
}

export default login
