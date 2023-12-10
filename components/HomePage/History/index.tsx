import {HistoryView} from "./style";
import {doubleData, formatValue, fromValue, toFormatAccount} from "../../../utils/format";
import axios from "axios";
import {useMemo, useState} from "react";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import moment from "moment";
import {USDT_ADDRESS_MAP} from "../../../types/constant";
import {SUPPORT_CHAIN_ID} from "../../../types";
import BigNumber from "bignumber.js";

export default function History(){
  const {account, chainId} = useActiveWeb3React()
  const [history, setHistory] = useState<{
    investAt: number,
    investAmount: string,
    amount: string,
    ethReceived: string,
    hash: string
  }[]>([])
  const getHistory = () => {
    if (!account) {
      return
    }
    axios.post('https://api.thegraph.com/subgraphs/name/rowen007/plutus3-goerli', {
      query: `
{
userPlanHistories(first: 100, where: {address: "${account}"}, orderBy: investAt, orderDirection:desc){
address
      investAt
      amount
      investAmount
      ethReceived
      hash
    }
}
      `
    }).then(res => {
      if (res.data.data.userPlanHistories.length > 0) {
        console.log("history", res.data.data.userPlanHistories)
        setHistory(res.data.data.userPlanHistories)
      }
    })

  }
  useMemo(() => {
    getHistory()
  }, [account])
  return <HistoryView>
    <div className="history-item history-title">
      <div>Time</div>
      <div>From</div>
      <div>To</div>
      <div>Price</div>
      <div>Hash</div>
    </div>

    {
      history.map((item, index) => <div className="history-item" key={index}>
        <div>{moment(item.investAt * 1000).format('YYYY-MM-DD HH:mm:ss')}</div>
        <div>{formatValue(item.amount, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals)} USDT</div>
        {/*todo*/}
        <div>{formatValue(doubleData(item.ethReceived, 'mul'), 18, 4)} ETH</div>
        <div>{new BigNumber(
          fromValue(item.amount, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals, 18)
        ).div(
          fromValue(doubleData(item.ethReceived, 'mul'), 18, 18)
        ).dp(2).toFormat()}</div>
        <div>
          <a href={'https://goerli.etherscan.io/tx/'+item.hash} target="_blank" rel="noreferrer">{item.hash.slice(0, 18)}...</a>
        </div>
      </div>)
    }
  </HistoryView>
}
