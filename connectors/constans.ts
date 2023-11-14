import {ChainId} from "@chainstarter/multicall-client.js";

export const RPC_MAP:{[key: string]: string} = {
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org'
}

export const SUPPORTED_CHAIN_IDS:ChainId[] = [ChainId.GOERLI,ChainId.BSC]
