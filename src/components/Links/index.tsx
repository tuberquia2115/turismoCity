import { Link } from '../../interfaces/product';
import Itemlink from '../Itemlink';

import './styles.css';

interface Props {
  links: Link[];
}
const Links = ({ links }: Props) => {
  return (
    <div className="container_links">
      {links.map((link) => (
        <Itemlink {...link} />
      ))}
    </div>
  );
};
export default Links;
