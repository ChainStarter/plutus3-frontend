import Modal from "../Modal";
import {SuccessModalView} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setShowSuccessModal} from "../../context/store/app";
import {IAppState} from "../../types";
import SuccessImg from '/public/image/successful.png'

export default function SuccessModal(){
  const dispatch = useDispatch()
  const { showSuccessModal } = useSelector((state: { AppReducer: IAppState }) => state.AppReducer);
  return <Modal visible={showSuccessModal} onClose={() => dispatch(setShowSuccessModal(false))}>
    <SuccessModalView>
      <img src={SuccessImg.src} alt=""/>
      <p>Success!</p>
    </SuccessModalView>
  </Modal>
}
