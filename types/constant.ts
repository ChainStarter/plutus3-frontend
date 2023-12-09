import erc20Abi from './abi/erc20.json'
import dcaAbi from './abi/dca.json'
import {SUPPORT_CHAIN_ID} from "./index";
export const LANG_LOCAL_KEY = "LANG_LOCAL_KEY";
export const THEME_LOCAL_KEY = "THEME_LOCAL_KEY";

export const ENV_PRODUCTION = process.env.APP_ENV === 'pro'
export const ABI_ERC20 = erc20Abi
export const ABI_DCA = dcaAbi
export const USDT_ADDRESS_MAP = {
  [SUPPORT_CHAIN_ID.GOERLI]: {
    address: "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49",
    decimals: 6
  },
  [SUPPORT_CHAIN_ID.POLYGON]: {
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    decimals: 6
  },
  [SUPPORT_CHAIN_ID.AVALANCHE]: {
    address: "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49",
    decimals: 6
  }
}

export const DCA_CONTRACT_MAP = {
  [SUPPORT_CHAIN_ID.GOERLI]: "0x5649800F04aa1FB684b3e4217f84956f67CD49ce",
  [SUPPORT_CHAIN_ID.POLYGON]: "",
  [SUPPORT_CHAIN_ID.AVALANCHE]: ""
}
