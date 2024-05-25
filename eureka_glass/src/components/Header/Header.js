import React from 'react';
import { Link } from 'react-router-dom';
import "components/Header/Header.scss";
import Logo from 'assets/media/icons/header/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="header-content wrap">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <nav>
          <ul>
            <li><Link to={{ pathname: "/", hash: "#about" }}>О нас</Link></li>
            <li><Link to={{ pathname: "/", hash: "#catalog" }}>Каталог</Link></li>
            <li><Link to={{ pathname: "/", hash: "#services" }}>Услуги</Link></li>
            <li><Link to="/works">Работы</Link></li>
            <li><Link to={{ pathname: "/", hash: "#faq" }}>FAQ</Link></li>
            <li><Link to={{ pathname: "/", hash: "#footer" }}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
