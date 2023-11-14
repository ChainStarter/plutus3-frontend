import type { AddEthereumChainParameter } from '@web3-react/types'
import { ChainId } from '@chainstarter/multicall-client.js'

interface BasicChainInformation {
  urls: string[]
  name: string
}
interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}
type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const CHAINS_CONFIG: ChainConfig = {
  [ChainId.GOERLI]: {
    urls: ["https://goerli.infura.io/v3/24eed2d69d2b4dcba4339f5a81908cb8"].filter(Boolean),
    name: 'Goerli',
    blockExplorerUrls: ['']
  },
  [ChainId.BSC]: {
    urls: ['https://bsc-dataseed.binance.org'].filter(Boolean),
    name: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrls: ['https://bscscan.com']
  }
}
export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS_CONFIG[chainId] as ExtendedChainInformation
  if (!chainInformation) {
    return chainId
  }
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
}
