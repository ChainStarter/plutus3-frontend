import {UserView} from "./style";
import UsdtIcon from '/public/image/usdt.png'
import EthIcon from '/public/image/eth.png'
import ArrowDIcon from '/public/image/arrow-d.png'
import {IPlan, SUPPORT_CHAIN_ID} from "../../../types";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {formatValue, fromValue} from "../../../utils/format";
import {ABI_DCA, DCA_CONTRACT_MAP, USDT_ADDRESS_MAP} from "../../../types/constant";
import cs from "classnames";
import {getContract} from "../../../utils";
import React, {useMemo, useState} from "react";
import LoadingIcon from "/public/image/loading.svg";
import {setShowSuccessModal} from "../../../context/store/app";
import {useDispatch} from "react-redux";
import BigNumber from "bignumber.js";
import axios from "axios";
import useUsdtAllowance from "../../../hooks/useUsdtAllowance";
import useEthPrice from "../../../hooks/useEthPrice";

export default function User({
                               plan,
                               setTab,
                               getPlan
                             }: { plan: IPlan, setTab: (tab: 0 | 1) => void, getPlan: () => void }) {
  const {account, chainId, library} = useActiveWeb3React()
  const {allowance, decimals:usdtDecimals} = useUsdtAllowance()
  const ethPrice = useEthPrice()
  const [loading, setLoading] = useState(false)
  const [graphData, setGraphData] = useState<{
    planAmount: "0",// 计划总投入多少usdt
    investAmount: "0",// 已经投入的usdt的量
    totalBuy: "0" // 总计买了多少eth
  }>({
    planAmount: "0",
    investAmount: "0",
    totalBuy: "0"
  })
  const dispatch = useDispatch()
  const getData = () => {
    if (!account){
      return
    }
    axios.post('https://api.thegraph.com/subgraphs/name/rowen007/plutus3-goerli', {
      query: `
{
  users(where: {address: "${account}"}) {
    address
    totalBuy
    planAmount
    investAmount
  }
}
      `
    }).then(res => {
      if (res.data.data.users.length > 0) {
        console.log("graphData", res.data.data.users[0])
        setGraphData(res.data.data.users[0])
      }
    })
  }
  useMemo(() => {
    getData()
  }, [account])
  const onChangeStatus = (status: 0 | 1) => {
    if (loading) {
      return
    }
    setLoading(true)
    const contract = getContract(library, ABI_DCA, DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID])
    contract.methods[['stopPlan', 'startPlan'][status]]().send({from: account}).on("receipt", async function () {
      await getPlan()
      dispatch(setShowSuccessModal(true))
      setLoading(false)
    })
      .on("error", (error: any) => {
        console.log("error", error)
        setLoading(false)
      });
  }
  useMemo(() => {
    if (!plan) {
      setTab(0)
    }
  }, [plan])
  return <UserView>
    <div className="user-item">
      <div className="tokens">
        <img src={UsdtIcon.src} alt=""/>
        <span>
          <img src={ArrowDIcon.src} alt=""/>
        </span>
        <img src={EthIcon.src} alt=""/>
      </div>
      <div>
        <p>Price(USDT)</p>
        <h2>{ethPrice}</h2>
      </div>
      <div>
        <p>Average price(USDT)</p>
        <h2>{+graphData.investAmount > 0 ? new BigNumber(fromValue(graphData.investAmount, usdtDecimals)).div(fromValue(graphData.totalBuy, 18, 18)).dp(2).toFormat(): '-'}</h2>
      </div>
      <div>
        <p>coherence</p>
        <h2>{plan.times}</h2>
      </div>
      <div>
        <p>Buy total(ETH)</p>
        <h2>{formatValue(graphData.totalBuy, 18, 12)}</h2>
      </div>
      <div>
        <p>Loop buy vol</p>
        <h2>{formatValue(plan.amount,usdtDecimals)}USDT/
          {plan.frequency % 86400 === 0 ? plan.frequency / 86400 + "Day": plan.frequency % 3600 === 0 ? plan.frequency / 3600 + "Hour": plan.frequency / 60 + "Minute"}</h2>
      </div>
      <div>
        <p>Remaining(USDT)</p>
        <h2>{formatValue(allowance, usdtDecimals)}</h2>
      </div>
      <div className="actions">
        <div className="action-btn" onClick={() => setTab(0)}>
          Edit
        </div>
        <div className={cs("action-btn", plan.status === 1 && "btn-error", loading && "loading")}
             onClick={() => onChangeStatus(plan.status === 1 ? 0 : 1)}>
          {loading ? <img src={LoadingIcon.src} className="loading-ani" alt=""/> : ["Start", "Stop"][plan.status]}
        </div>
      </div>
      <div className={["tag-stop", "tag-start"][plan.status]}>{["Stopped", "Started"][plan.status]}</div>
    </div>
  </UserView>
}
