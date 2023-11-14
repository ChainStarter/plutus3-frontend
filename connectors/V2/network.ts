import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { CHAINS_CONFIG } from './chains'

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS_CONFIG).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS_CONFIG[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)


// @ts-ignore
export const [network, hooks] = initializeConnector<Network>((actions) => new Network({ actions, urlMap: URLS }))
