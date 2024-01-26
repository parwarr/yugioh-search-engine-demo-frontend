import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='h-20 max-w-1100 bg-gradient-to-tr from-green-400 to-purple-500 rounded-md'>
      <div className='container mx-auto flex align-middle items-center justify-between h-20'>
        <Link to='/'>
          <img src='/test.gif' alt='logo' className='h-16 border-blue-400 border-2 rounded-full' />
        </Link>
        <div className='flex items-center'>
          <Navigation />
        </div>
        <div className='flex items-center'></div>
      </div>
    </header>
  );
};

export default Header;
