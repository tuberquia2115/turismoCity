import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/Header';
import Loading from '../../components/UI/Loading';
import useProducts from '../../hooks/useProducts';
import Footer from '../../components/Footer';

import imgFondo from '../../assets/fondo_cuarentena.png';
import Containerproducts from '../../containers/Products';

const HomeScreen = () => {
  const { isLoading, products } = useProducts();

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <BackgroundImage srcImg={imgFondo} title="Ofertas para aprovechar desde tú casa" />
      {isLoading && <Loading title="Cargando Productos..." subtitle="Por favor espera un momento" />}
      {!isLoading && <Containerproducts products={products} />}
      <Footer />
    </div>
  );
};

export default HomeScreen;
