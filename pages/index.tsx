import { Tab } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { useState } from "react";
import { ethers } from "ethers";
import { changeToEthereumMainnet } from "../components/Wallet";
import { categories } from "../config";

const Index: NextPage = () => {
  const web3 = useWeb3React();
  web3.active
    ? console.log("You are connected via", web3.account)
    : console.log("Web3 not connected");

  const payTip = async ({ setError, setTxs, ether, addr }: any) => {
    try {
      ethers.utils.getAddress(addr);
      const tx = await web3.library.getSigner(web3.account).sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const [error, setError]: any = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await payTip({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: "0x165CD37b4C644C2921454429E7F9358d18A45e14",
    });
  };

  const DonationForm = () => {
    const classNames = (...classes: string[]) => {
      return classes.filter(Boolean).join(" ");
    };

    return (
      <div className="w-full max-w-md px-2 py-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1.5 bg-blue-500/40 rounded-xl shadow-inner">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-lg leading-5 rounded-lg focus:outline-none transition-all duration-100 ease-in-out",
                    selected
                      ? "bg-gradient-to-tr from-ukraineyellow to-yellow-200 shadow text-ukraineblue font-bold"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white font-medium"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          {Object.values(categories).map((i: any) => (
            <Tab.Panels className="mt-2" key={i}>
              <Tab.Panel className="bg-blue-500/40 backdrop-blurtext-white backdrop-blur-md rounded-2xl p-3 focus:outline-none ring-1 ring-ukraineyellow/90">
                <p className="text-base text-white font-medium items-center justify-center flex text-center py-2">
                  {i.message}
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="w-full mx-auto px-4 py-1.5 space-y-6">
                    <div>
                      <span>To</span>
                      <input
                        type="text"
                        name="addr"
                        className="text-[.905rem] font-light hover:cursor-not-allowed rounded-lg shadow-inner bg-white/10 text-white placeholder-white z-50 p-3 backdrop-blur w-full focus:outline-none"
                        placeholder={i.addr}
                        disabled
                      />
                    </div>
                    <div>
                      <span>Amount</span>
                      <input
                        name="ether"
                        type="text"
                        className="text-white rounded-lg shadow-inner bg-white/10 placeholder-white z-50 p-3 backdrop-blur w-full focus:outline-none"
                        placeholder="Enter Donation"
                      />
                    </div>

                    {web3.chainId !== 1 ? (
                      <button
                        onClick={changeToEthereumMainnet}
                        className="w-full flex cursor-pointer justify-center items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-ukraineblue font-bold text-xl transition-all duration-200 ease-in-out hover:text-[1.35rem] shadow-sm hover:shadow-ukraineyellow/90 hover:-translate-y-0.5"
                      >
                        Switch Network
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full flex cursor-pointer justify-center items-center rounded-3xl bg-gradient-to-tr from-ukraineyellow to-yellow-200 px-5 py-2.5 text-ukraineblue font-bold text-xl transition-all duration-200 ease-in-out hover:text-[1.35rem] shadow-sm hover:shadow-ukraineyellow/90 hover:-translate-y-0.5"
                      >
                        Donate
                      </button>
                    )}
                  </div>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          ))}
        </Tab.Group>
      </div>
    );
  };

  return (
    <div className="py-6 flex flex-col h-max items-center justify-center w-full">
      <div className="text-center max-w-xl space-y-2.5 mx-8">
        <p className="text-6xl text-white font-semibold">Слава Україні</p>
        <p className="text-4xl font-semibold text-ukraineyellow/100">
          Glory to Ukraine
        </p>
      </div>
      <DonationForm />
    </div>
  );
};

export default Index;
