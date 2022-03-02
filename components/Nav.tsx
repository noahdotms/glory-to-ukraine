import React from 'react'
import Link from 'next/link'
import useEagerConnect from '../hooks/useEagerConnect'
import Wallet from './Wallet'
import { FiInfo } from 'react-icons/fi'

export const Nav = () => {
  let triedToEagerConnect = useEagerConnect();

  return (
    <nav className='bg-ukraineblue/70 backdrop-blur'>
      <header className='flex justify-end h-12
        items-center w-full space-x-4 py-8 pr-4'>
            <Wallet triedToEagerConnect={triedToEagerConnect} />
            <Link href='about'>
            <button className='text-ukraineyellow/80 hover:text-ukraineyellow
              text-2xl group text-center flex flex-col items-center'>
              <FiInfo />
              <div className='absolute mt-8 text-sm text-white font-medium
                transition-all duration-100 scale-0 origin-top group-hover:scale-100'>
                About
              </div>
            </button>
          </Link>
      </header>
    </nav>
  )
}
