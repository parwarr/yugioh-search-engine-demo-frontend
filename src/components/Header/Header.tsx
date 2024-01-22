import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='h-20 bg-gradient-to-tr from-green-400 to-purple-500 opacity-75 rounded-md'>
      <div className='container mx-auto flex items-center justify-between h-20'>
        <Link to='/'>
          <img src='/pp.jpg' alt='logo' className='h-16 border-blue-400 border-2 rounded-full' />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
