import React from 'react';
import Link from 'next/link';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className='bottom-0 fixed py-3 items-center justify-center flex flex-col space-y-1 w-screen'>
      <Link href='/'>
        <div className='flex items-center space-x-2.5 mb-1 cursor-pointer'>
          <button className='cursor-pointer flex items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-gray-900 font-bold text-base transition-all duration-200 ease-in-out hover:text-lg shadow-sm hover:shadow-ukraineyellow/90'>
            Donate
          </button>
        </div>
      </Link>
    </footer>
  );
};