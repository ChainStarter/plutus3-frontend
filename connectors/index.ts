import { MetaMask } from '@web3-react/metamask'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import { metaMask } from './V2/metaMask'
import { walletConnectV2 } from './V2/walletConnectV2'




export const SUPPORTED_V2_WALLETS: { [key: 'METAMASK' | 'WALLET_CONNECT' | string]: {
    connector: MetaMask | WalletConnectV2 | any
    name: string,
    iconName: string,
    description: string,
    href: string|null,
    color: string,
    mobile: boolean
    mobileOnly?: boolean
  }} = {
  METAMASK: {
    connector: metaMask,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
    mobile: false,
    mobileOnly: false
  },
  WALLET_CONNECT: {
    connector: walletConnectV2,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
    mobileOnly: false
  },
}
