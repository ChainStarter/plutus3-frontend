import {UserView} from "./style";
import UsdtIcon from '/public/image/usdt.png'
import EthIcon from '/public/image/eth.png'
import ArrowDIcon from '/public/image/arrow-d.png'
import {IPlan, SUPPORT_CHAIN_ID} from "../../../types";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {formatValue} from "../../../utils/format";
import {ABI_DCA, DCA_CONTRACT_MAP, USDT_ADDRESS_MAP} from "../../../types/constant";
import cs from "classnames";
import {getContract} from "../../../utils";
import React, {useMemo, useState} from "react";
import LoadingIcon from "/public/image/loading.svg";
import {setShowSuccessModal} from "../../../context/store/app";
import {useDispatch} from "react-redux";
import BigNumber from "bignumber.js";

export default function User({
                               plan,
                               setTab,
                               getPlan
                             }: { plan: IPlan, setTab: (tab: 0 | 1) => void, getPlan: () => void }) {
  const {account, chainId, library} = useActiveWeb3React()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
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
        <h2>-</h2>
      </div>
      <div>
        <p>Average price(USDT)</p>
        <h2>-</h2>
      </div>
      <div>
        <p>coherence</p>
        <h2>-</h2>
      </div>
      <div>
        <p>Buy total(ETH)</p>
        <h2>-</h2>
      </div>
      <div>
        <p>Day buy vol</p>
        <h2>-USDT/D</h2>
      </div>
      <div>
        <p>Remaining(USDT)</p>
        <h2>-</h2>
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
