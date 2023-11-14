import styled from "styled-components";

export const HistoryView = styled.div`

  margin-top: 20px;

  .history-item{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    background: #303030;
    border-radius: 10px;
    &.history-title{
      background: #000000;
      font-weight: 700;
    }
    &>div{
      word-break: break-all;
      padding: 5px;
    }
  }
  .more-view{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>span{
      color: saddlebrown;
      font-size: 18px;
      cursor: pointer;
      user-select: none;
    }
  }
`
