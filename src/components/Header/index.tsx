import React from 'react';
import { FaUser, FaAngleDown } from 'react-icons/fa';

import Logo from '../UI/Logo';
import MenuMobil from '../MenuMobil';

import { routers } from '../../constants/routers';
import flag from '../../assets/Argentina.png';
import logosrc from '../../assets/logo.png';
import './styles.css';

const Header = () => {
  const [isSelected, setIsSelected] = React.useState('flights');

  const selectLink = (link: string) => setIsSelected(link);
  const isSelectedValid = (key: string) => isSelected === key;

  const openMenu = () => {
    const navMobile = document.getElementById('navMobile');
    if (!navMobile) return;

    const display = navMobile.style.display;
    if (display === 'none') return (navMobile.style.display = 'flex');
    navMobile.style.display = 'none';
  };

  return (
    <div className="container">
      <nav className="container_nav">
        <Logo srcLogo={logosrc} />

        <ul className="nav_menu_desktop">
          {routers().map(({ icon, name, key }) => {
            return (
              <li className={`nav_item_desktop ${isSelectedValid(key) && 'focus'}`} key={key}>
                <a href="!#" className="nav_list_item_link" onClick={() => selectLink(key)}>
                  {icon}
                  <p className="nav_list_item_link_name">{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav_buttons">
          <div className="container_btn_flag">
            <img src={flag} alt="flag-argentina" />
            <a href="!#" className="flag_btn_name">
              AR (ARS) <FaAngleDown />
            </a>
          </div>
          <div className="container_btn_login">
            <FaUser color="#8CC2FF" size={20} />
            <a href="!#" className="btn_login_link">
              Ingresar
            </a>
          </div>
        </div>
        <MenuMobil fnOpenMenu={openMenu} fnSelectLink={selectLink} />
      </nav>
    </div>
  );
};

export default Header;
