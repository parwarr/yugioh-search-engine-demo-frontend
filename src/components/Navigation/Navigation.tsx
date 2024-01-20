import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>
        <NavItem title='Home' />
      </Link>
    </nav>
  );
};

export default Navigation;
