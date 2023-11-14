import styled from 'styled-components';
import {THEME_MEDIA_ENUM} from "../../context/theme";

export const HeaderView = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #141722;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #474747;
  .header-view{
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .logo{
      width: 96px;
      &>img{
        width: 100%;
      }
    }
    .logo-menu{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`
