import styled from "styled-components";

export const ConnectWalletBtnView = styled.div`
  .connected-btns{
    .connected-disconnect{
      display: none;
    }
    &:hover{
      .connected-account{
        display: none;
      }
      .connected-disconnect{
        display: flex;
      }
    }
  }
`
