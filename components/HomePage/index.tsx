import {CreateView, DashboardView, HomePageView} from "./style";
import {useMemo, useState} from "react";
import cs from 'classnames'
import {IPlan} from "../../types";
import {fromValue} from "../../utils/format";
import History from "./History";

export default function HomePage(){
  const [plan, setPlan] = useState<IPlan|null>({
    index: 0,
    frequency: 1,
    amount: 10000,
    startAt: Date.now(),
    times: 2,
    status: 1
  })
  return <HomePageView>
    <div className="home-view">
      <Dashboard/>
      <h1 className="title">Create</h1>
      <Create/>
      {
        plan && <>
          <h1 className="title">Live</h1>
          <Live plan={plan}/>
        </>
      }
      <h1 className="title">History</h1>
      <History/>
    </div>
  </HomePageView>
}
function Dashboard(){
  return <DashboardView>
    <div>
      <h2>3,221</h2>
      <p>Order</p>
    </div>
    <div>
      <h2>3,221</h2>
      <p>TVL</p>
    </div>
    <div>
      <h2>21</h2>
      <p>Days</p>
    </div>
  </DashboardView>
}

function Create(){
  const CYCLE_OPTIONS = [1,2,7]
  const [frequency, setFrequency] = useState(1);
  return <CreateView>
    <div className="create-view">
      <div className="input-line">
        <span>定投周期:</span>
        <div>
          {
            CYCLE_OPTIONS.map((frequency_) => <div className={cs({active: frequency_ === frequency, "cycle-item": true})} key={frequency_} onClick={() => setFrequency(frequency_)}>{frequency_} {frequency_ > 1 ? "Days" : "Day"}</div>)
          }
        </div>
      </div>
      <div className="input-line">
        <span>每期定投数量:</span>
        <div>
          <div className="input-data">
            <input type="text"/>
            <span>USDT</span>
          </div>
        </div>
      </div>
      <div className="input-line">
        <span>定投次数:</span>
        <div>
          <div className="input-data">
            <input type="text"/>
          </div>
        </div>
      </div>
      <div className="input-line">
        <span></span>
        <div>
          <div className="action-btn">
            Approve
          </div>
        </div>
      </div>
    </div>
    <div className="create-view">
      <div className="input-line">
        <span>定投总量:</span>
        <div>
          <span className="input-line-data">100,000</span>
        </div>
      </div>
      <div className="input-line">
        <span>预计截至时间:</span>
        <div>
          <span className="input-line-data">2023/12/30</span>
        </div>
      </div>
    </div>
  </CreateView>
}
function Live({plan}:{plan: IPlan}){

  return <CreateView>
    <div className="create-view">
      <div className="input-line">
        <span>定投周期:</span>
        <div>
          <div className={cs({active: true, "cycle-item": true})}>{plan.frequency} {plan.frequency > 1 ? "Days" : "Day"}</div>)
        </div>
      </div>
      <div className="input-line">
        <span>每期定投金额:</span>
        <div>
          <div className="input-line-data">
            <span>{fromValue(plan.amount, 0, 4)} USDT</span>
          </div>
        </div>
      </div>
      <div className="input-line">
        <span>定投次数:</span>
        <div>
          <div className="input-line-data"><span style={{color: "#B97A57"}}>{plan.times}</span>/199</div>
        </div>
      </div>
      <div className="input-line">
        <span>定投数量:</span>
        <div>
          <div className="input-line-data">
            <span style={{color: "#B97A57"}}>123</span>/32,421
          </div>
        </div>
      </div>
      <div className="input-line">
        <span>计划创建时间:</span>
        <div>
          <div className="input-line-data">2023/12/24</div>
        </div>
      </div>
      <div className="input-line">
        <span>预计结束时间:</span>
        <div>
          <div className="input-line-data">2024/12/24</div>
        </div>
      </div>
    </div>
    <div className="create-view">
      <div className="input-line">
        <span>当前ETH价格:</span>
        <div>
          <span className="input-line-data">3,200</span>
        </div>
      </div>
      <div className="input-line">
        <span>平均成本:</span>
        <div>
          <span className="input-line-data">1,823.21</span>
        </div>
      </div>
      <div className="input-line">
        <span>收益:</span>
        <div>
          <span className="input-line-data" style={{color: "#00A2E8"}}>1,234USDT</span>
        </div>
      </div>
      <div className="input-line">
        <span>收益率:</span>
        <div>
          <span className="input-line-data" style={{color: "#00A2E8"}}>43.62%</span>
        </div>
      </div>
      <div className="input-line">
        <span>当前计划状态:</span>
        <div>
          <span className="input-line-data">进行中</span>
        </div>
      </div>
      <div className="input-line">
        <span></span>
        <div>
          <div className="action-btn">
            停止
          </div>
        </div>
      </div>
    </div>
  </CreateView>
}
