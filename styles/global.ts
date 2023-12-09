import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth;
    font-family: Gilroy;
    background: #00000F;
  }
  .primary-input{
      width: 100%;
      height: 100%;
      font-family:HarmonyOS Sans SC;
      font-weight:500;
      color:#e6e6e6;
      font-size:14px;
      line-height:22px;
      border:none;
      background: transparent;
      outline: none;
      box-sizing: border-box;
      font-weight: 600;
      &::placeholder{
        color:rgba(230, 230, 230, 0.6);
        font-weight: 400;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button{
        -webkit-appearance: none;
      }
  }
  @keyframes loading-ani {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-ani {
    animation: loading-ani 2s linear infinite;
  }
`;
