import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Nav } from '../components/Nav';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className='flex flex-col w-full h-screen z-10 text-white/80 bg-ukraineblue'>
      <Head>
        <title>Donate to Kharkiv, Ukraine | Слава Україні</title>
        <meta name='description' content='(🇺🇦, 🇺🇦) Glory to Ukraine. Donations will be used to send canned provisions and helpful supplies to Kharkiv directly via @NFTshawty. Слава Україні' />
        <meta name='keywords' content='ukraine, glory, fuck putin, kharkiv, 0xnaut, naut, kiev, kharkiv, food, canned, goods, supplies, help, donate, charity' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col h-full
        overflow-y-scroll bg-transparent justify-between'>
        <div className='top-0 z-50 sticky'><Nav /></div>
        <div className='min-h-max flex flex-col justify-between h-full'><Component {...pageProps} /></div>
      </main>

    </div>
    </Web3ReactProvider>
  )}

export default MyApp