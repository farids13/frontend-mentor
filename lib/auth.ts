import { PrismaClient } from "@prisma/client";
import { NextAuthOptions, getServerSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
 
export const authConfig : NextAuthOptions = {
    session : {
        strategy : "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        GoogleProvider({
            clientId: "898862951743-8uri3uj23b09fldhv2e34t8gbbqs3jmi.apps.googleusercontent.com",
            clientSecret: "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"
        }),
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

                const user = await prisma.user.findFirst({
                    where: {
                        email
                    }
                });
                
                if(credentials?.email === user?.email)
                    return user;
                else{
                    const createUser = await prisma.user.create({
                        data: {
                            email,
                            password,
                        }
                    });
                    return createUser;
                }

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