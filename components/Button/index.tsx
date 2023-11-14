import {ButtonView} from "./style";
import React from "react";
import LoadingIcon from '/public/image/loading.svg'

interface IProps {
  onClick?: () => void
  children?: React.ReactNode
  type: 'primary' | 'error'
  className?: string
  loading?: boolean
}

export default function Button({
                                 onClick,
                                 children,
                                 type,
                                 className,
                                 loading
                               }: IProps) {
  const onClick_ = () => {
    if (loading || !onClick) {
      return
    }
    onClick()
  }
  return <ButtonView onClick={onClick_} type={type} className={className}>
    {
      loading ? <>
        <img src={LoadingIcon.src} className="loading-icon" alt=""/>
      </>: children
    }
  </ButtonView>
}
