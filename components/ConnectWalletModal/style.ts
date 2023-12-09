import styled from "styled-components";

export const ConnectWalletModalView = styled.div`
  &>h2{
    font-family:Montserrat;
    font-weight:500;
    color:#ffffff;
    font-size:16px;
    line-height:16px;
    text-align: center;
  }
  .network-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    &>div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 15px;
      &>img{
        width:32px;
        height:32px;
      }
      &>p{
        font-family:Montserrat;
        font-weight:700;
        color:#ffffff;
        font-size:14px;
        line-height:18px;
        margin-top: 5px;
      }
      &:hover{
        background: #8A6CFF;
      }
    }
    
  }

`
