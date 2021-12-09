import './styles.css';

interface Props {
  title: string;
  url: string;
}

const Button = ({ title, url }: Props) => {
  return (
    <div className="container_btn">
      <a href={url} target="noopener noreferrer">
        <button className="btn">
          Ver más opciones en <b className="btn_title">{title}</b>
        </button>
      </a>
    </div>
  );
};

export default Button;
