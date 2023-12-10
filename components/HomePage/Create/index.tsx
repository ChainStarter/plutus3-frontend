import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {useMemo, useRef, useState} from "react";
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
  // 每次定投多少
  const [amount, setAmount] = useState<string>('');
  // 间隔多久投一次 interval
  const [tap, setTap] = useState<string>('');
  // 总投资次数 times
  const [count, setCount] = useState<string>('')
  const {balance: usdtBalance, updateBalance, decimals: usdtDecimals} = useUsdtBalance()
  const {allowance, updateAllowance} = useUsdtAllowance()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [dimensions, setDimensions] = useState<number>(86400)

  const totalAmount = useMemo(() => {
    if (!amount || !count){
      return '0';
    }
    return +amount * +count
  }, [amount, count])
  const onCreate = (isUpdate:boolean) => {
    if (loading || !totalAmount || +totalAmount <= 0) {
      return
    }
    setLoading(true)
    const contract = getContract(library, ABI_DCA, DCA_CONTRACT_MAP[chainId as SUPPORT_CHAIN_ID])
    console.log(+tap*dimensions,
      toValue(totalAmount, usdtDecimals), toValue(amount, usdtDecimals))
    contract.methods[isUpdate ? 'updatePlan' : 'createPlan'](
      +tap*dimensions,
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
      toValue(totalAmount, usdtDecimals)
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
  const setRef: any = useRef()
  useMemo(() => {
    if (plan) {
      const dimensions_ = plan.frequency % 86400 === 0 ? 86400: plan.frequency % 3600 === 0 ? 3600 : 60
      setTap(new BigNumber(plan.frequency).div(dimensions_).dp(0, 1).toString())
      setDimensions(dimensions_)
      setAmount(fromValue(plan.amount, usdtDecimals))
    }
  }, [plan, usdtDecimals, allowance])

  useMemo(() => {
    if (plan &&+allowance>0&& !setRef.current) {
      setRef.current = true
      // 总共周期 = 授权量 / 一个周期的量 * 周期
      const count_ = new BigNumber(allowance).div(plan.amount).toString()
      setCount(count_ || '0')
    }
  }, [plan, allowance])
  console.log("allowance", allowance)
  const showApprove = useMemo(() => {
    if (!totalAmount) {
      return false
    }

    if (!new BigNumber(allowance).eq(toValue(totalAmount, usdtDecimals))) {
      return true
    }
    return false
  }, [allowance, totalAmount, usdtDecimals])
  return <CreateView>
    <div className="create-panel">
      <h1>{plan ? 'Update' : 'Create'} a DCA plan</h1>
      <p>{plan ? 'Update' : 'Create'} your fixed investment plan, determine your investment amount and determine the
        periodic schedule.</p>
      <div className="select-assets">
        <div className="select-assets-item">
          <p className="form-title">From</p>
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
          <p className="form-title">To</p>
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
        <p className="form-title">Amount</p>
        <div className="input-amount-box">
          <div className="amount-symbol">
            <img src={USDTIcon.src} alt=""/>
          </div>
          <input className="primary-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                 placeholder="Amount"/>
        </div>
      </div>
      <div className="input-amount">
        <p className="form-title">Times</p>
        <div className="input-amount-box">
          <input style={{paddingLeft: 0}} className="primary-input" type="number" value={count} onChange={(e) => setCount(e.target.value)}
                 placeholder="Times"/>
        </div>
      </div>
      <div className="cycle-time">
        <p className="form-title">Interval</p>
        <div className="cycle-time-box">
          <div className="cycle-time-input">
            <input className="primary-input" type="number" placeholder="Interval" value={tap}
                   onChange={(e) => setTap(e.target.value)}/>
          </div>
          <div className={cs("cycle-time-btn", dimensions === 60 && "active")} onClick={() => setDimensions(60)}>Minutes</div>
          <div className={cs("cycle-time-btn", dimensions === 3600 && "active")} onClick={() => setDimensions(3600)}>Hours</div>
          <div className={cs("cycle-time-btn", dimensions === 86400 && "active")} onClick={() => setDimensions(86400)}>Days</div>
        </div>
      </div>
      <div className="total-amount">
        <p className="form-title">Total</p>
        <div>{new BigNumber(totalAmount).toFormat()} USDT</div>
      </div>
      <div className="balance">Balance: {formatValue(usdtBalance, usdtDecimals, 1)}USDT</div>

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
