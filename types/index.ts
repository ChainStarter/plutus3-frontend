export interface IAppState {
  themeMode: THEME_MODE_ENUM,
  language: LANGUAGE_ENUM,
  showConnectModal: boolean
}
export enum THEME_MODE_ENUM {
  light = "light",
  dark = "dark",
}
export enum LANGUAGE_ENUM {
  zh_CN = "zh_CN",
  en_US = "en_US",
}
export enum LANGUAGE_NAME_ENUM {
  zh_CN = "中文",
  en_US = "English",
}

export interface IPlan {
  index: number;
  frequency: number;
  amount: number;
  startAt: number;
  times: number;
  status: 0|1
}
export interface ISupportChainInfo{
  name: string
  symbol: string
  chainId: number
  rpcUrl: string
  icon: string
}
export enum SUPPORT_CHAIN_ID {
  GOERLI= 5,
  AVALANCHE= 43114,
  POLYGON= 137
}
