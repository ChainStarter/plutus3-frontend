import {useMemo, useState} from "react";
import useNow from "./useNow";
import useActiveWeb3React from "./useActiveWeb3React";
import {multicallClient, newContract} from "@chainstarter/multicall-client.js";
import {ABI_ERC20, DCA_CONTRACT_MAP, USDT_ADDRESS_MAP} from "../types/constant";
import {SUPPORT_CHAIN_ID} from "../types";

export default function useUsdtAllowance():{
  allowance: string
  updateAllowance: () => void
  decimals: number
}{
  const {account, chainId} = useActiveWeb3React()
  const [allowance, setAllowance] = useState<string>('0')
  const now = useNow()
  const getAllowance = () => {
    if (!account){
      return
    }
    const contract = newContract(ABI_ERC20, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID].address, chainId)
    return multicallClient([
      contract.allowance( account, DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID])
    ]).then(res => {
      if (res[0].success){
        setAllowance(res[0].returnData)
      } else {
        setAllowance('0')
      }
    })
  }
  useMemo(() => {
    if (now % 10 === 0){
      getAllowance()
    }
  }, [account, now])
  return {
    allowance,
    decimals: USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals,
    updateAllowance: getAllowance
  }
}
