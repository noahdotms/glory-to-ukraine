import { useWeb3React } from '@web3-react/core';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { injected } from '../connectors';

type WalletProps = {
  triedToEagerConnect: boolean;
};

const Wallet = ({ triedToEagerConnect }: WalletProps) => {
  const { active,error,activate,chainId,account,setError } = useWeb3React();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
    }
  }, [active, error]);

  if (error) return null;
  if (!triedToEagerConnect) return null;

  if (typeof account !== 'string') { // Checks if there is a usable account - returns 'Connect Wallet' if not, and 0x0000.0000 if so
    return (
      <div>
        <button className='cursor-pointer flex items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-gray-900 font-bold text-sm transition-all duration-200 ease-in-out hover:text-base shadow-sm hover:shadow-ukraineyellow/90'
          disabled={connecting}
          onClick={() => {
            setConnecting(true);

            activate(injected, undefined, true).catch((error) => {
              // ignore the error if it's a user rejected request
              if (error instanceof UserRejectedRequestError) {
                setConnecting(false);
              } else {
                setError(error);
              }
            });
          }}
        >
        <span>Connect</span>
        </button>
      </div>
    );
  } else if (chainId !== 1) {
    return (
      <button className='cursor-pointer flex items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-gray-900 font-bold text-sm transition-all duration-200 ease-in-out hover:text-base shadow-sm hover:shadow-ukraineyellow/90'
      onClick={changeToEthereumMainnet}
      >
      <span>Switch Network</span>
    </button>
    )
  }
  return (
    <Link href='/'>
    <div className='cursor-pointer flex items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-gray-900 font-bold text-sm transition-all duration-200 ease-in-out hover:text-base shadow-sm hover:shadow-ukraineyellow/90'>
      {shortenHex(account)}
    </div>
    </Link>
  );
};

const shortenHex = (hex: string, length = 4) => {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export default Wallet;

export const changeToEthereumMainnet = async () => {
  try {
    if (window.ethereum) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }]
      }).then(() => {
        console.log('Switched to Ethereum Mainnet 👍')
      })
    }
  } catch (err: any) {
    console.error(err.message);
  }
}

declare let window: any;