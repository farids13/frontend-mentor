import HomePage from '@/component/homePage'
import { authConfig } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const Home = async () => {
  const session = await getServerSession(authConfig);

  return (
    <HomePage email = {session?.user?.email}/>
  )
}

export default Home
