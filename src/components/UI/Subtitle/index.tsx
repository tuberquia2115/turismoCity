import './styles.css';

interface Props {
  subtitle: string;
}

const Subtitle = ({ subtitle }: Props) => {
  return <h6 className="header_subtitle">{subtitle}</h6>;
};

export default Subtitle;
