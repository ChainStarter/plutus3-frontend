import {UserView} from "./style";
import UsdtIcon from '/public/image/usdt.png'
import EthIcon from '/public/image/eth.png'
import ArrowDIcon from '/public/image/arrow-d.png'
import {IPlan, SUPPORT_CHAIN_ID} from "../../../types";
import useActiveWeb3React from "../../../hooks/useActiveWeb3React";
import {formatValue} from "../../../utils/format";
import {USDT_ADDRESS_MAP} from "../../../types/constant";

export default function User({plan, setTab}: {plan:IPlan, setTab: (tab: 0|1) => void}) {
  const {account, chainId} = useActiveWeb3React()
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
        <h2>{formatValue(plan.frequency, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals)}USDT/D</h2>
      </div>
      <div>
        <p>Remaining(USDT)</p>
        <h2>{formatValue(plan.amount, USDT_ADDRESS_MAP[chainId as SUPPORT_CHAIN_ID]?.decimals)}</h2>
      </div>
      <div className="actions">
        <div className="action-btn" onClick={() => setTab(0)}>
          Setting
        </div>
      </div>
      {
        +plan.status === 0 && <div className="tag-stop">Stop</div>
      }

      {
        +plan.status === 1 && <div className="tag-start">Starting</div>
      }

    </div>
  </UserView>
}
