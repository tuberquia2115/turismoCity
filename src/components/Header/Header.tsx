import React from 'react';
import { FaUser, FaBars, FaAngleDown } from 'react-icons/fa';

import Logo from '../UI/Logo';

import { routers } from '../../constants/routers';
import flag from '../../assets/Argentina.png';
import './styles.css';

const Header = () => {
  const [isSelected, setIsSelected] = React.useState('flights');

  const selectLink = (link: string) => setIsSelected(link);
  const isSelectedValid = (key: string) => isSelected === key;
  const styleIcon = { size: 25, color: '#113c73' };

  const openMenuMovil = () => {
    const navMobile = document.getElementById('navMobile');
    if (!navMobile) return;

    const display = navMobile.style.display;
    if (display === 'none') return (navMobile.style.display = 'flex');
    navMobile.style.display = 'none';
  };

  return (
    <div className="container">
      <nav className="container_nav">
        <Logo />
        {/**Menu para Desktop */}
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

        {/** Menu para mobile */}
        <div className="icon_hamburgue">
          <FaBars color="white" size={20} id="btnIconBurgue" onClick={openMenuMovil} />
        </div>
        <div className="nav_container_mobile" id="navMobile">
          <ul className="nav_menu_mobile">
            {routers(styleIcon).map(({ key, name, icon }) => {
              return (
                <li key={key} className="nav_item_mobile">
                  <a className="nav_item_link_mobile" href="!#" onClick={() => selectLink(key)}>
                    {icon} <p className="nav_item_mobile_name">{name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
