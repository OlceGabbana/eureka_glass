import './Before-Header-Contact.scss';
import BHeaderCElem from './Before-Header-Contact-Elem/Before-Header-Contact-Elem';
import IconAddress from '../../../assets/media/icons/header/header-address.svg';
import IconPhone from '../../../assets/media/icons/header/header-phone.svg';
import IconTime from '../../../assets/media/icons/header/header-time.svg';
import variables from '../../variables.modules.scss';

const BHeaderContact = () => {
  return (
    <div className="bheader-contact">
      <BHeaderCElem imgPath={IconAddress} text="Россия, Москва, Золоторожский Вал 32, стр. 6"/>
      <BHeaderCElem imgPath={IconPhone} text="+7 (495) 181-58-07"/>
      <BHeaderCElem imgPath={IconTime} text="Пн-Пт: 9:00 - 20:00"/>
    </div>
  )
}

export default BHeaderContact;