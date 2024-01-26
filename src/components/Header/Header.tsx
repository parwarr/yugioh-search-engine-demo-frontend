import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCards } from '../../service/api/api.service';
import { CardItemType } from '../../types/CardItem.type';
import Navigation from '../Navigation/Navigation';
import { ModeToggle } from '../Theme-provider/Mode-Toggle/Mode-Toggle';

const Header = () => {
  const [data, setData] = useState<CardItemType[]>([]);

  useEffect(() => {
    getAllCards().then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <header className='h-20 max-w-1100 bg-gradient-to-tr from-green-400 to-purple-500 rounded-md'>
      <div className='container mx-auto flex align-middle items-center justify-between h-20'>
        <Link to='/'>
          <img src='/test.gif' alt='logo' className='h-16 border-blue-400 border-2 rounded-full' />
        </Link>
        <div className='flex items-center'>
          <Navigation />
        </div>
        <div className='flex items-center'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
