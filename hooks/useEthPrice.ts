import {useMemo, useState} from "react";
import useNow from "./useNow";
import useActiveWeb3React from "./useActiveWeb3React";
import {multicallClient, newContract} from "@chainstarter/multicall-client.js";
import {ABI_ECA, ABI_ERC20, DCA_CONTRACT_MAP, EAC_CONTRACT_MAP, USDT_ADDRESS_MAP} from "../types/constant";
import {SUPPORT_CHAIN_ID} from "../types";
import {fromValue} from "../utils/format";

export default function useEthPrice():string{
  const {account, chainId} = useActiveWeb3React()
  const [price, setPrice] = useState<string>('0')
  const now = useNow()
  const getPrice = () => {
    if (!account){
      return
    }
    const contract = newContract(ABI_ECA, EAC_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID], chainId)
    return multicallClient([
      contract.latestAnswer(),
      contract.decimals()
    ]).then(res => {
      if (res[0].success){
        setPrice(fromValue(res[0].returnData, res[1].returnData, 2))
      } else {
        setPrice('0')
      }
    })
  }
  useMemo(() => {
    if (now % 10 === 0){
      getPrice()
    }
  }, [account, now])
  return price
}
