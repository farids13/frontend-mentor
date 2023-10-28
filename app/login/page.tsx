import React, { useEffect} from 'react'
import './style.css'
import logoIr from '@/public/ir/IRCellLogo.png'
import Image from 'next/image'
import { getServerSession } from "next-auth";
import { authConfig } from '@/lib/auth';
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { CredentialsForm } from './component/formLogin';

export default async function Login() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const session = await getServerSession(authConfig);
    console.log("Session: ", session);
    
    if(session) return redirect("/ping");
    
  return (
    <div>
        <main className='flex justify-center items-center h-screen bg-irSoftBlue'>
            <div className='w-[450px] h-[750px] flex flex-col items-center gap-10 bg-white rounded-3xl shadow-2xl'>  
                <Image src={logoIr} alt="logoIr" className='w-[50%]'/>

                <div className='title text-center w-full text-3'>
                    <h1 className='text-4xl mb-10 bg-irBlue shadow-lg font-sans font-bold text-white'>IR-CELL</h1>
                    <span className='text-3xl uppercase '>Login</span>
                </div>
               
               <CredentialsForm />

                <p className='text-sm text-gray-400 mt-auto'>Powered {year} By IR CELL Suport By <a href="https://github.com/farids13">Farid Satria</a></p>
            </div>
        </main>
    </div>
  )
};
