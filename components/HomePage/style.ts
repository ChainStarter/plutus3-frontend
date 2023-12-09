import styled from "styled-components";

export const HomePageView = styled.div`
  width: 100%;
  background: #00000F;
  padding-bottom: 50px;
  .home-view{
    max-width: 1240px;
    margin: 0 auto;
    padding-top: 40px;
    .tabs{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 96px 0;
      &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 20px;
        cursor: pointer;
        &>span{
          font-family:HarmonyOS Sans SC;
          font-weight:500;
          color:#7d7d7d;
          font-size:16px;
          line-height:24px;
          text-align:center;
        }
        &>div{
          opacity: 0;
          margin-top: 7px;
          width:30px;
          height:3px;
          background:#e6e6e6;
        }
        &:hover,&.active{
          &>span{
            color: #e6e6e6;
          }
          &>div{
            opacity: 1;
          }
        }
      }
    }
  }
  .title{
    margin-top: 80px;
    font-size: 34px;
    font-weight: 800;
    color: #fff;
  }
`

