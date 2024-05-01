import './Before-Header-Buttons.scss';
import TelegramIcon from '../../../assets/media/icons/header/telegram.svg';
import WhatsAppIcon from '../../../assets/media/icons/header/whatsapp.svg';
import variables from '../../variables.modules.scss';

const BHeaderButtons = () => {
  return (
    <div className="bheader-buttons">
      <a href="#feedback" className="bheader-button">Оставить заявку</a>
      <a href=""><img src={TelegramIcon} alt=""/></a>
      <a href=""><img src={WhatsAppIcon} alt=""/></a>
    </div> 
  )
}

export default BHeaderButtons;