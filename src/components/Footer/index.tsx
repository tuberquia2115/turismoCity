import { routersFooter } from '../../constants/routers';
import imgCodeQR from '../../assets/codeQR.png';

import './styles.css';

const Footer = () => {
  return (
    <div className="container_root">
      <div className="container_footer">
        <div className="container_informaction">
          <div className="container_about">
            <h4 className="about_title">Sobre Turismocity.com</h4>
            <ul className="about_list">
              {routersFooter().aboutUs.map(({ label, value }) => (
                <li key={value}>
                  <a href={value} className="about_list_item_link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="about_title">Soporte</h4>
            <ul className="about_list">
              {routersFooter().support.map(({ label, value }) => (
                <li key={value} className="about_list_item">
                  <a href={value} className="about_list_item_link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container_copyright">
          <p className="copyright_text">
            Copyright 2021 Turismocity. <br /> Todos los derechos reservados
          </p>
          <img src={imgCodeQR} alt="turismo city codeGR" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
