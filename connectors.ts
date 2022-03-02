import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 1666700000, 1337, 31337, 1666600000, 3, 4, 5, 42, 1337, 10, 137, 250, 43114, 42161, 288, 1313161554, 122, 56, 1285],
});

export const networks = {
  hardhat: {
    chainId: `0x${Number(31337).toString(16)}`
  }
}