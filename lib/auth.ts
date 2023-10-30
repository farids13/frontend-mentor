import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
 
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