import styled from 'styled-components';
import {THEME_MEDIA_ENUM} from "../../context/theme";

export const HeaderView = styled.div`
  width: 100%;
  background: #00000F;

  .header-view {
    padding: 23px 0;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    .logo {
      width: 96px;
      position: relative;


      & > img {
        width: 100%;
      }

      & > span {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(100%, -10px);
        padding: 2px 5px;
        background: #d98400;
        color: #ffffff;
        border-radius: 5px;
        font-size: 12px;
      }
    }

    .nav {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 30px;

      & > a {
        font-family: PingFang SC;
        font-weight: 600;
        color: #ffffff;
        font-size: 16px;
        line-height: 24px;
        margin-left: 40px;
        text-decoration: none;

        &:hover, &.active {
          color: #8A6CFF;
        }
      }
    }
  }

  .bg-line {
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 47.73%, rgba(255, 255, 255, 0) 100%);
  }

  .actions {
    .connect-wallet-btn {
      height: 36px;
      background: radial-gradient(ellipse 97.95% 214.79% at 50% 0%, #1a0f3a 0%, #48318b 100%);
      border: 1px solid rgba(80, 55, 148, 1);
      //border-image-source: linear-gradient(180deg,#aa9ec4 0%,#503794 100%);
      //border-image-slice: 1;
      border-radius: 10px;
      box-shadow: 0px -8px 32px #1e0d49, 0px 0px 0px rgba(16, 0, 51, 0.4), 0px 2px 4px rgba(16, 0, 51, 0.39), 0px 8px 8px rgba(16, 0, 51, 0.34), 0px 19px 11px rgba(16, 0, 51, 0.2), 0px 34px 14px rgba(16, 0, 51, 0.06), 0px 53px 16px rgba(16, 0, 51, 0.01);
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      font-size: 14px;
      line-height: 16px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      & > img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
    }
  }
`
