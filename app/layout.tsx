import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import Footer from './footer'
import Provider from './context/client-provider'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Front End Mentor By Farid Satria',
  description: 'My Project With Next Js Step By Step Challange in Front End Mentor',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider session={session}>
          {children}
      </Provider>
        <Footer/>
      </body>
    </html>
  )
}
