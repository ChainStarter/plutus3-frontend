export function decode16(hex_:string) {
  let hex = hex_.toString();//force conversion
  let str = '';
  for (let i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

export function encode16(str: string) {
  let result = '';
  for (let i=0; i<str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

export const clearWalletConnectLocalStore = () => {
  if (typeof window !== 'undefined'){
    for (let i = 0; i < window.localStorage.length; i++) {
      const key:string|null = localStorage.key(i)
      if (key && key.indexOf('wc@') === 0) {
        localStorage.removeItem(key)
      }
    }
  }
}
