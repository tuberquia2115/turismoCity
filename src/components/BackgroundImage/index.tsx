import './styles.css';

interface Props {
  title: string;
  srcImg: string;
}

const BackgroundImage = ({ title, srcImg }: Props) => (
  <div className="container_background_img">
    <img src={srcImg} alt={`${title}`} className="background_img" />
    <p className="title">{title}</p>
  </div>
);

export default BackgroundImage;

