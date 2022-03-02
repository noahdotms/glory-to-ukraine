import type { NextPage } from 'next'
import { FiGithub } from 'react-icons/fi'
import { Tweet } from 'react-twitter-widgets'
import { Footer } from '../components/Footer'

const About: NextPage = () => {
  return (
    <div className='flex flex-col h-full w-full items-center'>
      <div className='max-w-sm pb-32 space-y-8 text-center mx-4 pt-6'>
        <p><a className='text-lg font-medium hover:text-ukraineyellow flex items-center justify-center space-x-3' href='https://github.com/0xNaut/glory-to-ukraine' target='_blank' rel='noreferrer'><FiGithub /><span>Source Code</span></a></p>
        <p>This app allows you to send ethereum transactions to the donation wallets of the Ukraine government and the direct civilian efforts in Kiev and Kharkiv.</p>
        <Tweet tweetId='1497594592438497282' />
        <p>I first created this app because of the following tweet from @NFTShawty in a grassroots attempt to supply those affected in Kharkiv. I will continue adding official donation-addresses to this app.</p>
        <Tweet tweetId='1498666633476427777' />
       </div>
      <Footer />
    </div>
  )
}

export default About