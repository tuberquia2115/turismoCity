import './styles.css';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <h3 className="title_header">{title}</h3>;
};

export default Title;
