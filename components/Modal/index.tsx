import React, { useMemo, useState} from "react";
import {ModalContentView, ModalView, ModalViewBox} from "./style";
import ReactDOM from "react-dom";
import cs from "classnames";
import X from '/public/image/x.png'

interface Props {
  propsClassName?: string;
  children?: React.ReactNode;
  width?: string | number;
  visible: boolean;
  onClose?: Function;
  title?: any;
  showHeader?: boolean;
  padding?: string;
  paddingBox?: string;
  zIndex?: number;
  showLine?: boolean
  scroll?: boolean
}

export default function Modal(
  {
    propsClassName = "",
    children,
    width = "500px",
    visible,
    onClose,
    title,
    showHeader = true,
    padding = "0",
    paddingBox,
    zIndex = 999,
    showLine = true,
    scroll = true
  }: Props) {



  const [isAnimating, setIsAnimating] = useState(false);
  const closeModal = () => {
    if (!onClose){
      return
    }
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  useMemo(() => {
    if (visible){
      setTimeout(() => {
        setIsAnimating(true)
      },20)
    }
  }, [visible])

  if (!visible){
    return null
  }
  const doc = document.body;
  return ReactDOM.createPortal(<ModalView className={cs(propsClassName, isAnimating && 'animating')} zIndex={zIndex}>
    <ModalViewBox
      className="modal-view-box"
      width={width}
      paddingBox={paddingBox}
      showLine={showLine}
      scroll={scroll}
    >
      {showHeader && (
        <div className="modal-header">
          <h1>{typeof title === "function" ? title() : title}</h1>
          {
            onClose && <div className="modal-x" onClick={() => closeModal()}>
              <img src={X.src} alt=""/>
            </div>
          }
        </div>
      )}
      <ModalContentView padding={padding}>{children}</ModalContentView>
    </ModalViewBox>
  </ModalView>,doc)
}
