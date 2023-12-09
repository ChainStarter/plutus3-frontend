import type { AddEthereumChainParameter } from '@web3-react/types'
import {ISupportChainInfo, SUPPORT_CHAIN_ID} from "../../types";
import GoerliImg from '/public/image/goerli.png'
import AvalancheImg from '/public/image/avalanche.png'
import PolygonImg from '/public/image/polygon.png'

interface BasicChainInformation {
  urls: string[]
  name: string
}
interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}
type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const SUPPORT_CHAIN_INFO: {[key: number]: ISupportChainInfo} = {
  [SUPPORT_CHAIN_ID.GOERLI]: {
    name: 'Goerli',
    symbol: 'ETH',
    rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    chainId: SUPPORT_CHAIN_ID.GOERLI,
    icon: GoerliImg.src
  },
  [SUPPORT_CHAIN_ID.POLYGON]: {
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: "https://polygon.llamarpc.com",
    chainId: SUPPORT_CHAIN_ID.POLYGON,
    icon: PolygonImg.src
  },
  [SUPPORT_CHAIN_ID.AVALANCHE]: {
    name: 'Avalanche C-Chain',
    symbol: 'AVAX',
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    chainId: SUPPORT_CHAIN_ID.AVALANCHE,
    icon: AvalancheImg.src
  }
}





export const CHAINS_CONFIG: ChainConfig = {
  [SUPPORT_CHAIN_ID.GOERLI]: {
    urls: [SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.GOERLI].rpcUrl],
    name: SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.GOERLI].name,
    blockExplorerUrls: ['']
  },
  [SUPPORT_CHAIN_ID.AVALANCHE]: {
    urls: [SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.AVALANCHE].rpcUrl],
    name: SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.AVALANCHE].name,
    blockExplorerUrls: ['']
  },
  [SUPPORT_CHAIN_ID.POLYGON]: {
    urls: [SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.POLYGON].rpcUrl],
    name: SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.POLYGON].name,
    blockExplorerUrls: ['']
  },

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
