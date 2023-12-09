import Modal from "../Modal";
import {ConnectWalletModalView} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {IAppState, SUPPORT_CHAIN_ID} from "../../types";
import {setShowConnectModal} from "../../context/store/app";
import {SUPPORTED_V2_WALLETS} from "../../connectors";
import {getAddChainParameters, SUPPORT_CHAIN_INFO} from "../../connectors/V2/chains";
import {SUPPORTED_CHAIN_IDS} from "../../connectors/constans";

export default function ConnectWalletModal(){
  const { showConnectModal } = useSelector((state: { AppReducer: IAppState }) => state.AppReducer);
  const dispatch = useDispatch()
  const onConnect = async (chainId: SUPPORT_CHAIN_ID) => {
    window.localStorage.removeItem('deactivate')
    try{
      await SUPPORTED_V2_WALLETS['METAMASK'].connector.activate(getAddChainParameters(chainId))
      dispatch(setShowConnectModal(false))
    }catch (e){
      console.log('error',e)
    }
  }
  return <Modal visible={showConnectModal} onClose={() => dispatch(setShowConnectModal(false))}>
    <ConnectWalletModalView>
      <h2>Network</h2>
      <div className="network-list">
        <div onClick={() => onConnect(SUPPORT_CHAIN_ID.GOERLI)}>
          <img src={SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.GOERLI].icon} alt=""/>
          <p>{SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.GOERLI].name}</p>
        </div>
        <div onClick={() => onConnect(SUPPORT_CHAIN_ID.POLYGON)}>
          <img src={SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.POLYGON].icon} alt=""/>
          <p>{SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.POLYGON].name}</p>
        </div>
        <div onClick={() => onConnect(SUPPORT_CHAIN_ID.AVALANCHE)}>
          <img src={SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.AVALANCHE].icon} alt=""/>
          <p>{SUPPORT_CHAIN_INFO[SUPPORT_CHAIN_ID.AVALANCHE].name}</p>
        </div>
      </div>
    </ConnectWalletModalView>
  </Modal>
}
