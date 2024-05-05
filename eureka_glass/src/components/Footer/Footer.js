import LogoWhite from '../../assets/media/icons/header/logo-white.svg';
import IconAddress from '../../assets/media/icons/header/header-address.svg';
import IconPhone from '../../assets/media/icons/header/header-phone.svg';
import IconTime from '../../assets/media/icons/header/header-time.svg';
import TelegramIcon from '../../assets/media/icons/header/telegram.svg';
import WhatsAppIcon from '../../assets/media/icons/header/whatsapp.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
    <div class="header-content footer-content wrap">
      <a href=""><img src={LogoWhite} alt="логотип"/></a>
      <nav>
        <ul>
          <li><a href="">О нас</a></li>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="">Работы</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#footer">Контакты</a></li>
        </ul>
      </nav>
    </div>
    <div class="wrap before-header footer-content">
      <div class="bheader-contact">
        <div class="bheader-content-elem">
          <img src={IconAddress} class="filter-white" alt=""/>
          <a href="">Россия, Москва, Золоторожский Вал 32, стр. 6</a>
        </div>
        <div class="bheader-content-elem">
          <img src={IconPhone} class="filter-white" alt=""/>
          <a href="">+7 (495) 181-58-07</a>
        </div>
        <div class="bheader-content-elem">
          <img src={IconTime} class="filter-white" alt=""/>
          <a href="">Пн-Пт: 9:00 - 20:00</a>
        </div>
      </div>
      <div class="bheader-buttons">
        <a href="#feedback" class="bheader-button">Оставить заявку</a>
        <a href=""><img src={TelegramIcon} alt=""/></a>
        <a href=""><img src={WhatsAppIcon} alt=""/></a>
      </div>
    </div>
    <div class="wrap confidence">
      <p>Политика конфиденциальности</p>
      <p>Eureka Glass 2024</p>
    </div>
  </footer>
    
  )
}

export default Footer;