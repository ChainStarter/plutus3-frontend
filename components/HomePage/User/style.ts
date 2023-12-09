import styled from "styled-components";

export const UserView = styled.div`
  .user-item {
    background: #10111f;
    border: 1px solid rgba(151, 151, 151, 0.2);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 40px;
    padding: 30px 40px;
    box-sizing: border-box;
    position: relative;

    .tokens {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > img {
        width: 40px;
        height: 40px;
      }

      & > span {
        margin: 8px 0;

        & > img {
          width: 24px;
          height: 24px;
        }
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > p {
        font-family: PingFang SC;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
      }

      & > h2 {
        font-family: Mark Pro;
        font-weight: 700;
        color: #8a6cff;
        font-size: 18px;
        line-height: 23px;
        margin-top: 8px;
      }
    }

    .actions {
      display: flex;
      flex-direction: row;
      .action-btn {
        cursor: pointer;
        padding: 10px 15px;
        background: #8a6cff;
        border-radius: 10px;
        //box-shadow: 0px -8px 20px #1e0d49, 0px 0px 0px rgba(16, 0, 51, 0.4), 0px 2px 4px rgba(16, 0, 51, 0.39), 0px 8px 8px rgba(16, 0, 51, 0.34), 0px 19px 11px rgba(16, 0, 51, 0.2), 0px 34px 14px rgba(16, 0, 51, 0.06), 0px 53px 16px rgba(16, 0, 51, 0.01);
        font-family: PingFang SC;
        font-weight: 600;
        color: #ffffff;
        font-size: 14px;
        line-height: 25px;
        margin: 5px;
        transition: all 0.3s ease-in-out;
        &:hover{
          transform: scale(1.05);
        }
        &.btn-error{
          background: red;
        }
        &>img{
          width: 20px;
        }
      }
    }

    .tag-start {
      width: 120px;
      height: 36px;
      background: rgba(138, 108, 255, 0.2);
      border-radius: 0px 20px 0px 20px;
      position: absolute;
      right: 0;
      top: 0;
      font-family: Mark Pro;
      font-weight: 700;
      color: #8a6cff;
      font-size: 16px;
      line-height: 23px;
    }

    .tag-stop {
      width: 120px;
      height: 36px;
      background: rgba(226, 0, 15, 0.2);
      border-radius: 0px 20px 0px 20px;
      position: absolute;
      right: 0;
      top: 0;
      font-family: Mark Pro;
      font-weight: 700;
      color: red;
      font-size: 16px;
      line-height: 23px;
    }
  }

`
