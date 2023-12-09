import {HomePageView} from "./style";
import {useMemo, useState} from "react";
import {IPlan, SUPPORT_CHAIN_ID} from "../../types";
import History from "./History";

import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {ABI_DCA, DCA_CONTRACT_MAP} from "../../types/constant";

import {multicallClient, newContract} from "@chainstarter/multicall-client.js";
import Create from "./Create";
import User from "./User";
import cs from "classnames";

export default function HomePage() {
  const {account, chainId} = useActiveWeb3React()
  const [tab, setTab] = useState<0 | 1>(0)
  const [plan, setPlan] = useState<IPlan | null>(null
    //   {
    //   index: 0,
    //   frequency: 1,
    //   amount: 10000,
    //   startAt: Date.now(),
    //   times: 2,
    //   status: 1
    // }
  )
  console.log("plan", plan)
  const getPlan = () => {
    if (!account) {
      return
    }
    const contract = newContract(ABI_DCA, DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID], chainId)
    return multicallClient([
      contract.plans(account)
    ]).then(res => {
      if (res[0].success) {
        console.log(res)
        const data = res[0].returnData
        setPlan({
          index: data[0],
          frequency: data[1],
          amount: data[2],
          startAt: data[3],
          times: data[4],
          status: (+data[5]) as 0|1
        })
      } else {
      }
    })
  }
  useMemo(() => {
    getPlan()
  }, [account])
  return <HomePageView>
    <div className="home-view">
      <div className="tabs">
        <div className={cs(tab === 0 && "active")} onClick={() => setTab(0)}>
          <span>Create DCA</span>
          <div/>
        </div>
        {
          plan && <div className={cs(tab === 1 && "active")} onClick={() => setTab(1)}>
            <span>My DCA</span>
            <div/>
          </div>
        }
      </div>
      <div style={{display: tab === 0 ? "block" : "none"}}>
        <Create getPlan={getPlan} plan={plan}/>
      </div>
      {
        plan && <div style={{display: tab === 1 ? "block" : "none"}}>
          <User plan={plan} setTab={setTab} getPlan={getPlan}/>
          <History/>
        </div>
      }
    </div>
  </HomePageView>
}
