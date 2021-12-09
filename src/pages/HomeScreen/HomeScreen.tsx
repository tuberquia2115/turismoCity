
import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/Header';
import imgFondo from '../../assets/fondo_cuarentena.png'
import useProducts from '../../hooks/useProducts';

const HomeScreen = () => {
  const { isLoading } = useProducts();

  if (isLoading) return <p>Caragando...</p>;

  return (
    <div>
      <Header />
      <BackgroundImage srcImg={imgFondo} title="Ofertas para aprovechar desde tú casa"/>
    </div>
  );
};

export default HomeScreen;
