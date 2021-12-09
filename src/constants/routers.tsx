import { IconBaseProps } from 'react-icons';
import { FaPlane, FaBed, FaHome, FaSuitcase, FaBriefcaseMedical, FaBusAlt, FaCarAlt, FaBullhorn } from 'react-icons/fa';
import { Router } from '../interfaces/router';

const defaultStyleIcon: IconBaseProps = {
  size: 15,
  color: 'white',
};
export const routers = (styleIcon = defaultStyleIcon): Router[] => [
  {
    name: 'Vuelos',
    key: 'flights',
    icon: <FaPlane {...styleIcon} title="hola" />,
  },
  {
    name: 'Hoteles',
    key: 'lodgings',
    icon: <FaBed {...styleIcon} />,
  },
  {
    name: 'Alquileres',
    key: 'home',
    icon: <FaHome {...styleIcon} />,
  },
  {
    name: 'Paquetes',
    key: 'suitcase',
    icon: <FaSuitcase {...styleIcon} />,
  },
  {
    name: 'Seguros Viajes',
    key: 'travel Insurance',
    icon: <FaBriefcaseMedical {...styleIcon} />,
  },
  {
    name: 'Micros',
    key: 'micros',
    icon: <FaBusAlt {...styleIcon} />,
  },
  {
    name: 'Autos',
    key: 'cars',
    icon: <FaCarAlt {...styleIcon} />,
  },
  {
    name: 'Blog',
    key: 'blog',
    icon: <FaBullhorn {...styleIcon} />,
  },
];
