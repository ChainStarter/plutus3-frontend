import styled from "styled-components";

export const ButtonView = styled.div<{type: 'primary'|'error'}>`
  height: 46px;
  padding: 0 20px;
  border-radius: 16px;
  background: ${({ theme, type }) => theme[type] || theme.primary};
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @keyframes loading-ani {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-icon {
    width: 22px;
    height: 22px;
    animation: loading-ani 2s linear infinite;
    margin-right: 10px;
  }
`
