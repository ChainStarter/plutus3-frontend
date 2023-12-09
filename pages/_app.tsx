import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../context/store";
import useLocalData from "../hooks/useLocalData";
import ThemeProvider from "../context/theme/provider";
import LanguageProvider from "../context/locales";
import {GlobalStyle} from "../styles/global";
import { Web3ReactProvider } from '@web3-react/core'
import {connectors} from "../connectors/V2/walletConnectV2";
import "../styles/reset.css"
import "../styles/font.css"
import ConnectWalletModal from "../components/ConnectWalletModal";

function UData(){
  useLocalData()
  return <>
    <GlobalStyle/>
    <ConnectWalletModal/>
  </>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
    <Provider store={store}>
      <ThemeProvider>
          <UData/>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
      </ThemeProvider>
    </Provider>
    </Web3ReactProvider>
  );
}
