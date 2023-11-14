
import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import type { WalletConnect as WalletConnectV2Type } from '@web3-react/walletconnect-v2'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import { network, hooks as networkHooks } from './network'
import { metaMask, hooks as metaMaskHooks } from './metaMask'
import type { Connector } from '@web3-react/types'
import { Web3ReactStore } from '@web3-react/types'
import {RPC_MAP, SUPPORTED_CHAIN_IDS} from "../constans";

const WALLET_CONNECT_PROJECT_ID = "a6cc11517a10f6f12953fd67b1eb67e7"
export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2Type>(
  (actions) =>
    new WalletConnectV2({
      actions,
      timeout: 15000,
      defaultChainId: SUPPORTED_CHAIN_IDS[0],
      options: {
        projectId: WALLET_CONNECT_PROJECT_ID,
        chains: [SUPPORTED_CHAIN_IDS[0]],
        optionalChains: SUPPORTED_CHAIN_IDS,
        showQrModal: true,
        rpcMap: RPC_MAP
      },
    })
  // appName: 'ArchiSwap',
  // appLogoUrl: 'https://app.archiswap.io/favicon.svg',
)

export const connectors: [Connector, Web3ReactHooks][] | [Connector, Web3ReactHooks, Web3ReactStore][] = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, hooks],
  [network, networkHooks],
]
