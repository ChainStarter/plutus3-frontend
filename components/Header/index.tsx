import {HeaderView} from "./style";
import {IAppState} from "../../types";
import {useSelector} from "react-redux";
import LogoPng from '/public/image/logo.png'
import ConnectWalletBtn from "../ConnectWalletBtn";

export default function Header() {
  const { language, themeMode } = useSelector(
    (state: { AppReducer: IAppState }) => state.AppReducer
  );

  return <HeaderView>
    <div className="header-view">
      <div className="logo">
        <img src={LogoPng.src} alt=""/>
      </div>
      <div className="logo-menu">
        <ConnectWalletBtn/>
      </div>
    </div>
  </HeaderView>
}
