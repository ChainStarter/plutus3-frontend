import styled from "styled-components";

export const HistoryView = styled.div`
  margin-top: 50px;
  &>h1{
    font-family:Mark Pro;
    font-weight:500;
    color:#ffffff;
    font-size:18px;
    line-height:23px;
    text-align: center;
  }

  .history-item{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    background: #10111F;
    border-radius: 10px;
    &.history-title{
      background: #000000;
      font-weight: 700;
    }
    &>div{
      word-break: break-all;
      padding: 5px;
    }
    &>a{
      color: #ffffff;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .more-view{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>span{
      color: #8A6CFF;
      font-size: 18px;
      cursor: pointer;
      user-select: none;
    }
  }
`
