import './styles.css';

interface Props {
  srcLogo: string;
  isLogoProduct?: boolean;
}

const Logo = ({srcLogo, isLogoProduct}: Props) => (
  <div className={`container_logo ${isLogoProduct && 'size_logo_product'}`}>
    <img src={srcLogo} alt="logo-turismo-city" className="logo" />
  </div>
);

export default Logo;
