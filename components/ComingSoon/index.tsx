import {ComingSoonView} from "./style";
import ComingSoonImg from '/public/image/comingsoon.png'

export default function ComingSoon(){
  return <ComingSoonView>
    <img src={ComingSoonImg.src} alt=""/>
    <p>COMING SOON</p>
  </ComingSoonView>
}
