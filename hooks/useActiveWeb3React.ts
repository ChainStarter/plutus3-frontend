import {SUPPORTED_CHAIN_IDS} from "../connectors/constans";
import {ChainId} from "@chainstarter/multicall-client.js";
import {Web3Provider} from "@ethersproject/providers";
import { useWeb3React } from '@web3-react/core'
import {useEffect} from "react";
import {getAddChainParameters} from "../connectors/V2/chains";
import {clearWalletConnectLocalStore} from "../utils";

export default function useActiveWeb3React() {
  const {chainId, provider, isActive,account, isActivating, hooks,connector, ...arg} = useWeb3React<Web3Provider>()
  const isActivity = isActive && chainId && SUPPORTED_CHAIN_IDS.includes(chainId)
  const c_chainId = isActivity ? chainId : SUPPORTED_CHAIN_IDS[0]
  const warningNetwork = !SUPPORTED_CHAIN_IDS.includes(c_chainId)


  useEffect(() => {
    clearWalletConnectLocalStore()
  },[])

  return {
    chainId: c_chainId,
    active: isActivity,
    warningNetwork,
    isActive: isActivity,
    library: provider,
    deactivate: () => {
      if (connector?.deactivate) {
        void connector.deactivate()
      } else {
        void connector.resetState()
      }
      window.localStorage.setItem('deactivate', '1')
      clearWalletConnectLocalStore()
    },
    activate: (chainId_: ChainId) => {
      window.localStorage.removeItem('deactivate')
      return connector.activate(getAddChainParameters(chainId_))
    },
    error: undefined,
    account: isActivity ? account : undefined,
    connector: connector,
    ...arg
  }
}
