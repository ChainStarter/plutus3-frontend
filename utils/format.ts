import BigNumber from "bignumber.js";
import moment from "moment";

export function toFormatAccount(account: string, left: number = 6, right: number = 6) {
  if (!account) {
    return ''
  }
  return account.slice(0, left) + '...' + account.slice((account.length - right), account.length)
}

export function fromValue(num: string | number, decimals?: number, dp: number = 4, roundingMode:0|1 = 1): string {
  if (!num) {
    return '0'
  }
  return new BigNumber(num).div(10 ** (decimals || 0)).dp(dp, roundingMode).toString()
}
export function formatValue(num: string | number, decimals?: number, dp: number = 4, roundingMode:0|1 = 1): string {
  if (!num) {
    return '0'
  }
  return new BigNumber(num).div(10 ** (decimals || 0)).dp(dp, roundingMode).toFormat()
}

export function toValue(num: string | number, decimals: number = 0, ): string {
  if (!num) {
    return '0'
  }
  return new BigNumber(num).multipliedBy(10 ** decimals).toString()
}

export function formatDate(t: number, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return moment(t * 1000).format(format)
}
export function convertToShortScale(quantity:string|number) {
  const suffixes = ["", "k", "M", "B", "T", "Q"];
  if (!quantity){
    return '0'
  }
  let quantity_ = +quantity
  let index = 0;
  while (quantity_ >= 1000 && index < suffixes.length - 1) {
    quantity_ /= 1000;
    index++;
  }

  return new BigNumber(quantity_).dp(2) + suffixes[index];
}
