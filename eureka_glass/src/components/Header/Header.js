import "./Header.scss";
import variables from '../variables.modules.scss';

const Header = () => {
  return (

  <header>
    <div className="header-content wrap">
      <a href=""></a>
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
  </header>
    
  )
}

export default Header;