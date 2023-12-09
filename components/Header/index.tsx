import {HeaderView} from "./style";
import {useDispatch} from "react-redux";
import LogoPng from '/public/image/logo.png'
import Link from "next/link";
import {setShowConnectModal} from "../../context/store/app";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {toFormatAccount} from "../../utils/format";
import {SUPPORT_CHAIN_INFO} from "../../connectors/V2/chains";
import {useRouter} from "next/router";
import cs from "classnames";

export default function Header() {
  const dispatch = useDispatch()
  const {account, chainId} = useActiveWeb3React()
  const router = useRouter()

  const onConnectWallet = () => {
    dispatch(setShowConnectModal(true))
  }

  return <HeaderView>
    <div className="header-view">
      <div className="logo">
        <img src={LogoPng.src} alt=""/>
      </div>
      <div className="nav">
        <Link href="/" className={cs(router.pathname === "/" && "active")}>DCA</Link>
        <Link href="/grid_trading" className={cs(router.pathname === "/grid_trading" && "active")}>Grid</Link>
        <Link href="/tactics_trading" className={cs(router.pathname === "/tactics_trading" && "active")}>Tactics</Link>
      </div>
      <div className="actions">
        <div className="connect-wallet-btn" onClick={onConnectWallet}>
          {account && <img src={SUPPORT_CHAIN_INFO[chainId]?.icon} alt=""/>}
          {account ? toFormatAccount(account, 4, 5) : 'Connect Wallet'}
        </div>
      </div>
    </div>
    <div className="bg-line"/>
  </HeaderView>
}
