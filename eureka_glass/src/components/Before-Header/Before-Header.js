import "./Before-Header.scss";
import BHeaderContact from './Before-Header-Contact/Before-Header-Contact'
import variables from '../../components/variables.modules.scss';

const BeforeHeader = () => {
  return (

    <div className="wrap before-header">
    <BHeaderContact/>
    {/* <div className="bheader-buttons">
      <a href="#feedback" className="bheader-button">Оставить заявку</a>
      <a href=""><img src="/assets/media/icons/header/telegram.svg" alt=""></a>
      <a href=""><img src="/assets/media/icons/header/whatsapp.svg" alt=""></a>
    </div> */}
  </div>
  // <hr className="bheader-hr">
    
  )
}

export default BeforeHeader;