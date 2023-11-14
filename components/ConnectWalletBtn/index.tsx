import Button from "../Button";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {SUPPORTED_CHAIN_IDS} from "../../connectors/constans";
import {getAddChainParameters} from "../../connectors/V2/chains";
import {ConnectWalletBtnView} from "./style";
import {SUPPORTED_V2_WALLETS} from "../../connectors";
import {toFormatAccount} from "../../utils/format";

export default function ConnectWalletBtn(){
  const {account, deactivate} = useActiveWeb3React()
  const onConnect = async () => {
    window.localStorage.removeItem('deactivate')
    try{
      SUPPORTED_V2_WALLETS['METAMASK'].connector.activate(getAddChainParameters(SUPPORTED_CHAIN_IDS[0]))
    }catch (e){
      console.log('error',e)
    }
  }
  const disConnect = () => {
    deactivate()
  }

  return  <ConnectWalletBtnView>
    {
      account ? <div className="connected-btns">
        <Button type="primary" className="connected-account">{toFormatAccount(account, 5, 6)}</Button>
        <Button type="error" className="connected-disconnect" onClick={disConnect}>Disconnect</Button>
      </div> : <Button type="primary" onClick={() => onConnect()}>Connect Wallet</Button>
    }
  </ConnectWalletBtnView>
}
