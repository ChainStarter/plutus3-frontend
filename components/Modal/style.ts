import styled from "styled-components";

export const ModalView = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background: rgba(0, 0, 0, 0.53);
  z-index: ${({zIndex}) => zIndex};
  opacity: 0;
  transition: opacity 0.3s;
  backdrop-filter: blur(5px);

  &.animating {
    opacity: 1;
  }
`;

export const ModalViewBox = styled.div<{ width: string | number, paddingBox?: string,showLine?:boolean, scroll?: boolean }>`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  border-radius: 20px;
  background: #10111F;
  padding: ${({paddingBox}) => paddingBox || '25px 30px 30px 30px'};
  width: ${({width}) => (typeof width === "number" ? `${width}px` : width)};
  max-width: 98vw;
  max-height: 100vh;
  overflow-y: ${({ scroll }) => scroll ? 'auto' : 'visible'};
  min-height: 300px;
  .modal-header {
    display: flex;
    justify-content: end;
    .modal-x{
      cursor: pointer;
      padding: 8px;
      img {
        width: 24px;
        height: 24px;
        transition: all 100ms;
        &:hover{
          transform: scale(1.05);
        }
      }
    }
  }
`;

export const ModalContentView = styled.div<{ padding: string }>`
  padding: ${({padding}) => padding};
`;
