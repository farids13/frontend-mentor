"use client"

import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';

export function CredentialsForm(){

    const route = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
   
    
        const signInResponse = await signIn("credentials", {
          email: data.get("email"),
          password: data.get("password"),
          redirect: false,
        });

        console.log("Email", data.get("email"));
    
        if (signInResponse && !signInResponse.error) {
            console.log("Ini Harusnya masuk");
            route.push("/ping");
        } else {
          console.log("Error: ", signInResponse);
          route.push("/login");
        }
      };


    return(
        <form onSubmit={handleSubmit} className='w-[80%] h-auto text-xl flex flex-col gap-2'>
            <h3 className='flex flex-row gap-3'>
            <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                Email
            </h3>
            <input placeholder='Email' type="email" name='email' className='indent-8 border-2 border-solid border-gray-400 rounded-lg'/>
            <h3 className='flex flex-row gap-3'>
            <svg className='h-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                Password
            </h3>
            <input placeholder='Password' type="password" name = "password" className='indent-8 border-2 border-solid border-gray-400 rounded-lg' />
            <button className='mt-5 hover:shadow-xl text-white font-bold uppercase h-10 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' >Login</button>
        </form>
    )

};