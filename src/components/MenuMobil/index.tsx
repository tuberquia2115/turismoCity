import { FaBars } from 'react-icons/fa';
import { routers } from '../../constants/routers';

interface Props {
  fnSelectLink: (key: string) => void;
  fnOpenMenu: () => void;
}

const MenuMobil = ({ fnSelectLink, fnOpenMenu }: Props) => {
  const styleIcon = { size: 25, color: '#113c73' };

  return (
    <>
      <div className="icon_hamburgue">
        <FaBars color="white" size={20} id="btnIconBurgue" onClick={fnOpenMenu} />
      </div>
      <div className="nav_container_mobile" id="navMobile">
        <ul className="nav_menu_mobile">
          {routers(styleIcon).map(({ key, name, icon }) => {
            return (
              <li key={key} className="nav_item_mobile">
                <a className="nav_item_link_mobile" href="!#" onClick={() => fnSelectLink(key)}>
                  {icon} <p className="nav_item_mobile_name">{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuMobil;
