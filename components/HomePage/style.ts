import styled from "styled-components";

export const HomePageView = styled.div`
  width: 100%;
  background: #2a2d32;
  padding-bottom: 50px;
  .home-view{
    max-width: 1240px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .title{
    margin-top: 80px;
    font-size: 34px;
    font-weight: 800;
    color: #fff;
  }
`

export const DashboardView = styled.div`
  padding: 40px 20px;
  border-radius: 20px;
  background: #444444;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &>div{
    text-align: center;
    color: white;
    &>h2{
      font-size: 32px;
      font-weight: 600;
    }
    &>p{
      margin-top: 10px;
      font-size: 18px;
    }
  }
`

export const CreateView = styled.div`
  background: #262626;
  border: 1px solid #474747;
  border-radius: 20px;
  padding: 20px 0;
  box-sizing: border-box;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .create-view {
    padding: 0 20px;
    &:nth-child(1) {
      border-right: 1px solid #474747;
    }

    .input-line {
      display: flex;
      align-items: center;
      margin-top: 20px;

      & > span {
        text-align: right;
        font-size: 18px;
        color: #ffffff;
        width: 120px;
      }

      & > div {
        flex: 1;
        padding-left: 10px;

        .cycle-item {
          display: inline-block;
          padding: 5px 10px;
          background: #7F7F7F;
          color: #fff;
          margin-right: 5px;
          cursor: pointer;

          &.active {
            background: #B97A57;
          }
        }
        .input-data{
          display: flex;
          align-items: center;
          width: 300px;
          height: 30px;
          border: 1px solid #7e7e7e;
          border-radius: 5px;
          padding: 2px 10px;
          input {
            flex: 1;
            background: transparent;
            border: 0;
            color: white;
            font-size: 16px;
            &:focus{
              outline: none;
              border: 0;
              box-shadow: none;
            }
          }
          span{
            margin-left: 5px;
            color: white;
            font-size: 16px;
          }
        }
        .action-btn{
          width: 180px;
          height: 45px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          cursor: pointer;
        }
        .input-line-data{
          color: white;
          font-size: 18px;
          font-weight: 16;
        }
      }
    }
  }
`
