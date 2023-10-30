import { getServerSession } from 'next-auth/next';
import React from 'react'
import { authConfig } from '@/lib/auth';
import Navbar from './base/navbar';

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({children}: ProtectedLayoutProps) => {

    const session = await getServerSession(authConfig);

    if(!session || !session.user?.email) {
        return (
            <div>
                This is protected and you do not have access to it.
                {session?.user?.email}
            </div>
        )
    }

  return (
    <>
        <Navbar/>
        {children}
    </>
  );
}

export default ProtectedLayout