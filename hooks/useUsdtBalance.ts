import {useMemo, useState} from "react";
import useNow from "./useNow";
import useActiveWeb3React from "./useActiveWeb3React";
import {multicallClient, newContract} from "@chainstarter/multicall-client.js";
import {ABI_ERC20, USDT_ADDRESS_MAP} from "../types/constant";
import {SUPPORT_CHAIN_ID} from "../types";

export default function useUsdtBalance():{
  balance: string
  updateBalance: () => void
  decimals: number
}{
  const {account, chainId} = useActiveWeb3React()
  const [balance, setBalance] = useState<string>('0')
  const now = useNow()
  const getBalance = () => {
    if (!account){
      return
    }
    const contract = newContract(ABI_ERC20, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID].address, chainId)
    return multicallClient([
      contract.balanceOf(account)
    ]).then(res => {
      if (res[0].success){
        setBalance(res[0].returnData)
      } else {
        setBalance('0')
      }
    })
  }
  useMemo(() => {
    if (now % 10 === 0){
      getBalance()
    }
  }, [account, now])
  return {
    balance,
    decimals: USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals,
    updateBalance: getBalance
  }
}
