import {HistoryView} from "./style";
import {toFormatAccount} from "../../../utils/format";

export default function History(){
  const list = [
    {
      tx: "0x46bf79b8515ee4b6a5c8803b5e4edb37676939b1965f089adf3c69d9fcda626e"
    },
    {
      tx: "0x46bf79b8515ee4b6a5c8803b5e4edb37676939b1965f089adf3c69d9fcda626e"
    },
    {
      tx: "0x46bf79b8515ee4b6a5c8803b5e4edb37676939b1965f089adf3c69d9fcda626e"
    }
  ]
  return <HistoryView>
    <div className="history-item history-title">
      <div>时间</div>
      <div>消耗USDT</div>
      <div>获得ETH</div>
      <div>价格</div>
      <div>交易哈希</div>
    </div>

    {
      list.map((item, index) => <div className="history-item" key={index}>
        <div>2023/12/11</div>
        <div>100</div>
        <div>0.01</div>
        <div>3,000</div>
        <div>{item.tx.slice(0, 8)}...</div>
      </div>)
    }
    <div className="more-view">
      <span>Load More 👇</span>
    </div>
  </HistoryView>
}
