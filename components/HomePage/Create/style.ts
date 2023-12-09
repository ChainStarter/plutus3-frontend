import styled from "styled-components";
import Bg1 from "/public/image/bg1.png";

export const CreateView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  .form-title{
    font-family:PingFang SC;
    font-weight:600;
    color:#ffffff;
    font-size:18px;
    line-height:18px;
  }
  .create-panel{
    background-color: #10111F;
    background-image: url("${Bg1.src}");
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-radius:20px;
    padding: 40px;
    box-sizing: border-box;
    &>h1{
      font-family:PingFang SC;
      font-weight:600;
      color:#ffffff;
      font-size:36px;
      line-height:50px;
    }
    &>p{
      font-family:PingFang SC;
      font-weight:600;
      color:#ffffff;
      font-size:14px;
      line-height:20px;
      margin-top: 10px;
    }
    .select-assets{
      display: grid;
      grid-template-columns: 1fr 32px 1fr;
      grid-column-gap: 30px;
      margin-top: 30px;
      &>.select-assets-item{
        &>p{
          font-family:PingFang SC;
          font-weight:600;
          color:#ffffff;
          font-size:18px;
          line-height:18px;
        }
        &>div{
          display: flex;
          align-items: center;
          background:rgba(255, 255, 255, 0.06);
          border:1px solid rgba(255, 255, 255, 0.2);
          border-radius:8px;
          margin-top: 12px;
          padding: 12px 16px;
          &>div{
            display: flex;
            align-items: center;
            flex: 1;
            &>img{
              width: 24px;
              height: 24px;
            }
            &>span{
              font-family:HarmonyOS Sans SC;
              font-weight:500;
              color:#e6e6e6;
              font-size:14px;
              line-height:22px;
              margin-left: 4px;
            }
          }
          &>img{
            width: 16px;
            height: 16px;
          }
        }
      }
      &>.select-assets-item-c{
        display: flex;
        align-items: center;
        padding-top: 30px;
        &>img{
          width: 32px;
          height: 32px;
        }
      }
    }
    .input-amount{
      margin-top: 30px;
      .input-amount-box{
        position: relative;
        height:48px;
        background:rgba(255, 255, 255, 0.06);
        border:1px solid rgba(255, 255, 255, 0.2);
        border-radius:8px;
        padding: 12px 16px;
        box-sizing: border-box;
        margin-top: 12px;
        .amount-symbol{
          width: 24px;
          height: 100%;
          display: flex;
          align-items: center;
          position: absolute;
          left: 16px;
          top: 0;
          &>img{
            width: 24px;
            height: 24px;
          }
        }
          &>input{
            padding-left: 30px;
          }
      }
      .balance{
        font-family:HarmonyOS Sans SC;
        font-weight:500;
        color:#e6e6e6;
        font-size:14px;
        line-height:22px;
        margin-top: 4px;
      }
    }
    .cycle-time{
      margin-top: 30px;
      .cycle-time-box{
        display: grid;
        grid-template-columns: 1fr 60px 60px 60px;
        grid-column-gap: 15px;
        height: 48px;
        margin-top: 12px;
        .cycle-time-input{
          border:1px solid rgba(255, 255, 255, 0.2);
          border-radius:8px;
          &>input{
            padding-left: 10px;
          }
        }
        .cycle-time-btn{
          border:1px solid rgba(255, 255, 255, 0.2);
          border-radius:8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family:HarmonyOS Sans SC;
          font-weight:500;
          color:#e6e6e6;
          font-size:14px;
          line-height:22px;
          cursor: pointer;
          &.active{
            border-color: rgba(138, 108, 255, 1);
          }
        }
      }
    }
    .submit-btn{
      height:48px;
      background:#8a6cff;
      border-radius:10px;
      box-shadow:0px -8px 32px #1e0d49,0px 0px 0px rgba(16, 0, 51, 0.4),0px 2px 4px rgba(16, 0, 51, 0.39),0px 8px 8px rgba(16, 0, 51, 0.34),0px 19px 11px rgba(16, 0, 51, 0.2),0px 34px 14px rgba(16, 0, 51, 0.06),0px 53px 16px rgba(16, 0, 51, 0.01);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family:PingFang SC;
      font-weight:600;
      color:#ffffff;
      font-size:18px;
      line-height:25px;
      margin-top: 40px;
      cursor: pointer;
      &:hover{
        opacity: 0.95;
      }
    }
  }
  .create-poster{
    .create-poster-box{
      background-color: #10111F;
      border:1px solid rgba(151, 151, 151, 0.2);
      border-radius:20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 100px 0;
      &>img{
        width:280px;
        height:280px;
      }
      &>p{
        font-family:PingFang SC;
        font-weight:500;
        color:#ffffff;
        font-size:20px;
        line-height:28px;
        margin-top: 16px;
      }
    }
  }

`
