import Links from '../../components/Links';
import Button from '../../components/UI/Button';
import Logo from '../../components/UI/Logo';
import Subtitle from '../../components/UI/Subtitle';
import Title from '../../components/UI/Title';

import { Product } from '../../interfaces/product';
import './styles.css';

interface Props {
  products: Product[];
}

const Containerproducts = ({ products }: Props) => {
  return (
    <div className="container_products">
      {products.map((product, index) => (
        <>
          <div className="container_header">
            <div className="container_header_titles">
              <Title title={product.title} />
              <Subtitle subtitle={product.subtitle} />
            </div>
            <Logo srcLogo={product.image} isLogoProduct />
          </div>
          <Links links={product.links} />
          <Button title={product.name} url={product.home} />
          
          {products.length !== index + 1 && <hr className="line" />}
        </>
      ))}
    </div>
  );
};

export default Containerproducts;
