"use client"
import Image from 'next/image'

import React, { useEffect, useState } from 'react';
import heroImg from "@/public/bg-hero.jpg";
import ValidationUtil from  '@/utils/ValidationUtil';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import googleImg from "@/public/google.png";

function HomePage(props:any) {

  const { data: session } = useSession();
  const [validEmail, setValidEmail] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");
  const route = useRouter();
  const userEmail = session?.user?.email;

  async function submit(e:any){
    e.preventDefault();
    !ValidationUtil.validateEmail(email)? setValidEmail(true) : setValidEmail(false);
    
    const signInResponse = await signIn("credentials", {
        email: email,
        password: "guest",
        redirect: false,
    });

      if (signInResponse && !signInResponse.error) {
          console.log("Ini Harusnya masuk");
          route.push("/ping");
      } else {
        console.log("Error: ", signInResponse);
        route.push("/");
      }
  }

  return (
    <HomePage email = {session?.user?.email}/>
  )
}

export default HomePage
