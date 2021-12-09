import './styles.css'
interface Props {
  title: string;
  subtitle?: string;
}

const Loading = ({ title, subtitle }: Props) => {
  return (
    <div className="container_loading">
      <p className="loading_title">{title}</p>
      {subtitle && <p className="loading_subtitle">{subtitle}</p>}
    </div>
  );
};

export default Loading;
