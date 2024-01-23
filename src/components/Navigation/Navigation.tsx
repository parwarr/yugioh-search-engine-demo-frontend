import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

const Navigation = () => {
  return (
    <nav className='flex flex-row'>
      <div>
        <Link to='/'>
          <NavItem title='Home' />
        </Link>
      </div>
      <div>
        <Link to='/about'>
          <NavItem title='About' />
        </Link>
      </div>
      <div>
        <Link to='https://github.com/parwarr?tab=repositories'>
          <NavItem title='Github' />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
