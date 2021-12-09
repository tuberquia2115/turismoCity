import React from 'react';

import { Link } from '../../interfaces/product';
import Loading from '../UI/Loading';

import './styles.css';

const Itemlink = ({ image, title, subtitle, description, price, link }: Link) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const finishLoad = () => setIsLoading(false);

  return (
    <div className="container_item_link">
      {isLoading && <Loading title="Cargando..." />}
      <img
        src={image}
        alt={title}
        className="link_img"
        onLoad={finishLoad}
        onError={finishLoad}
        style={{
          opacity: isLoading ? 0 : 9,
        }}
      />
      <a href={link} target="noopener noreferrer" className="link_container">
        <h2 className="link_title">{title}</h2>
        <h6 className="link_subtitle">{subtitle}</h6>
        {price !== 0 && <p className="link_price">{`$ ${price}`}</p>}
        {description && <p className="link_description">{description}</p>}
      </a>
    </div>
  );
};
export default Itemlink;
