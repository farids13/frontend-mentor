import { NextAuthOptions, getServerSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import {User} from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NextAuth from "next-auth/next";
 
export const authConfig : NextAuthOptions = {
    session : {
        strategy : "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            name: "SignIn",

            credentials: {
                email: {
                    label: "Email",
                    type:   "email",
                    placeholder: "example@example.com",
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },

            async authorize(credentials){

                const {email, password} = credentials as {
                    email: string;
                    password : string;
                };
                
                if(!credentials || !credentials.email || !credentials.password)
                    return null;

                const user = { id: "1", name: "Farid Satria", email: "faridsatria24@gmail.com" }

                if(credentials.email === user.email)
                    return user;

                return null;
            },
        })
    ],
    callbacks: {
        jwt({token, account, profile, user}) {
            if(account?.provider === "credentials"){
                token.email = user.email;
            }
            return token;
        },

        async session({session, token}) {
            if(token){
                session.user = token;
                if("email" in token){
                    session.user.email = token.email;
                }
            }
            return session;
        },
    }
   
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    console.log("INI SESSION NYA OM", session);
    if(!session) return redirect("/login");
}

export function loginIsRequiredClient(){
    if(typeof window !== "undefined"){
        const session = useSession();
        const router = useRouter();
        if(!session) router.push("/");
    }
}