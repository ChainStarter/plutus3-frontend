import {ChainId} from "@chainstarter/multicall-client.js";
import {SUPPORT_CHAIN_ID} from "../types";
import {CHAINS_CONFIG} from "./V2/chains";

export const RPC_MAP:{[key: string]: string} = {
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org',
}

export const SUPPORTED_CHAIN_IDS:SUPPORT_CHAIN_ID[] = [SUPPORT_CHAIN_ID.GOERLI,SUPPORT_CHAIN_ID.AVALANCHE, SUPPORT_CHAIN_ID.POLYGON]
