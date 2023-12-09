import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {useMemo, useState} from "react";
import useUsdtBalance from "../../../hooks/useUsdtBalance";
import useUsdtAllowance from "../../../hooks/useUsdtAllowance";
import {useDispatch} from "react-redux";
import {getContract} from "../../../utils";
import {ABI_DCA, ABI_ERC20, DCA_CONTRACT_MAP, USDT_ADDRESS_MAP} from "../../../types/constant";
import {IPlan, SUPPORT_CHAIN_ID} from "../../../types";
import {formatValue, fromValue, toValue} from "../../../utils/format";
import BigNumber from "bignumber.js";
import {CreateView} from "./style";
import USDTIcon from "/public/image/usdt.png";
import SelectIcon from "/public/image/select.png";
import ChangeIcon from "/public/image/change.png";
import ETHIcon from "/public/image/eth.png";
import cs from "classnames";
import {setShowConnectModal, setShowSuccessModal} from "../../../context/store/app";
import Poster1Img from "/public/image/poster1.png";

export default function Create({getPlan, plan}: { getPlan: () => void, plan: IPlan | null }) {
  const {account, library, chainId} = useActiveWeb3React()
  const [amount, setAmount] = useState<string>('');
  const [days, setDays] = useState<string>('');
  const {balance: usdtBalance, updateBalance, decimals: usdtDecimals} = useUsdtBalance()
  const {allowance, updateAllowance} = useUsdtAllowance()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const onCreate = (isUpdate:boolean) => {
    if (loading || !amount || +amount <= 0) {
      return
    }
    setLoading(true)
    const contract = getContract(library, ABI_DCA, DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID])
    contract.methods[isUpdate ? 'updatePlan' : 'createPlan'](
      days,
      toValue(amount, usdtDecimals)
    ).send({from: account}).on("receipt", async function () {
      await getPlan()
      await updateAllowance()
      await updateBalance()
      dispatch(setShowSuccessModal(true))
      setLoading(false)
    })
      .on("error", (error: any) => {
        console.log("error", error)
        setLoading(false)
      });
  }
  const onApprove = () => {
    if (loading) {
      return
    }
    setLoading(true)
    const contract = getContract(library, ABI_ERC20, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID].address)
    contract.methods.approve(
      DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID],
      toValue(amount, usdtDecimals)
    ).send({from: account}).on("receipt", async function () {
      await updateAllowance()
      dispatch(setShowSuccessModal(true))
      setLoading(false)
    })
      .on("error", (error: any) => {
        console.log("error", error)
        setLoading(false)
      });
  }
  useMemo(() => {
    if (plan) {
      setDays(String(plan.frequency))
      setAmount(fromValue(plan.frequency, usdtDecimals))
    }
  }, [plan, usdtDecimals])
  const showApprove = useMemo(() => {
    if (!amount) {
      return false
    }
    if (new BigNumber(allowance).lt(toValue(amount, usdtDecimals))) {
      return true
    }
    return false
  }, [allowance, amount, usdtDecimals])
  return <CreateView>
    <div className="create-panel">
      <h1>{plan ? 'Update' : 'Create'} a DCA plan</h1>
      <p>{plan ? 'Update' : 'Create'} your fixed investment plan, determine your investment amount and determine the
        periodic schedule.</p>
      <div className="select-assets">
        <div className="select-assets-item">
          <p className="form-title">Spend</p>
          <div>
            <div>
              <img src={USDTIcon.src} alt=""/>
              <span>USDT</span>
            </div>
            <img src={SelectIcon.src} alt=""/>
          </div>
        </div>
        <div className="select-assets-item-c">
          <img src={ChangeIcon.src} alt=""/>
        </div>
        <div className="select-assets-item">
          <p className="form-title">Receive</p>
          <div>
            <div>
              <img src={ETHIcon.src} alt=""/>
              <span>ETH</span>
            </div>
            <img src={SelectIcon.src} alt=""/>
          </div>
        </div>

      </div>
      <div className="input-amount">
        <p className="form-title">Spend Amount</p>
        <div className="input-amount-box">
          <div className="amount-symbol">
            <img src={USDTIcon.src} alt=""/>
          </div>
          <input className="primary-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                 placeholder="Input amount"/>
        </div>
        <div className="balance">Balance: {formatValue(usdtBalance, usdtDecimals, 1)}USDT</div>
      </div>
      <div className="cycle-time">
        <p className="form-title">Cycle time</p>
        <div className="cycle-time-box">
          <div className="cycle-time-input">
            <input className="primary-input" type="number" placeholder="days" value={days}
                   onChange={(e) => setDays(e.target.value)}/>
          </div>
          <div className={cs("cycle-time-btn", +days === 7 && "active")} onClick={() => setDays('7')}>7</div>
          <div className={cs("cycle-time-btn", +days === 15 && "active")} onClick={() => setDays('15')}>15</div>
          <div className={cs("cycle-time-btn", +days === 30 && "active")} onClick={() => setDays('30')}>30</div>
        </div>
      </div>
      {
        (function () {
          if (!account) {
            return <div className="submit-btn" onClick={() => dispatch(setShowConnectModal(true))}>Connect Wallet</div>
          }
          if (showApprove) {
            return <div className="submit-btn" onClick={onApprove}>
              {loading ? 'waiting...' : "Approve"}
            </div>
          }
          if (plan) {
            return <div className="submit-btn" onClick={() => onCreate(true)}>
              {loading ? 'waiting...' : "Update"}
            </div>
          }
          return <div className="submit-btn" onClick={() => onCreate(false)}>
            {loading ? 'waiting...' : "Create"}
          </div>
        }())
      }
    </div>
    <div className="create-poster">
      <div className="create-poster-box">
        <img src={Poster1Img.src} alt=""/>
        <p>Start DCA and surpass the bull and bear market</p>
      </div>
    </div>
  </CreateView>
}
