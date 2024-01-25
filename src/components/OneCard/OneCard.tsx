import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCard } from '../../service/api/api.service';

const OneCard = () => {
  const [card, setCard] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getOneCard = async name => {
      const response = await getCard(name);
      setCard(response.data);
      console.log(response);
    };

    // Parse the query string
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    getOneCard(name);
  }, [location]); // Add location to the dependency array

  console.log(card);
  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <div className='flex max-w-4xl bg-gray-800 text-white rounded-lg border border-gray-700 shadow-xl'>
        <img
          className='flex-none w-1/3 rounded-l-lg object-cover'
          src='https://images.ygoprodeck.com/images/cards/12482652.jpg'
          alt='Card'
        />
        <div className='p-8 flex flex-col justify-between w-2/3'>
          <h3 className='text-yellow-300 text-2xl font-bold mb-2'>{card.name}</h3>
          <div className='mb-8'>
            <div className='text-sm text-gray-400'>Type</div>
            <div className='text-white'>{card.type}</div>
            <div className='text-sm text-gray-400'>Attribute</div>
            <div className='text-white'>{card.attribute}</div>
            <div className='text-sm text-gray-400'>Level/Rank</div>
            <div className='text-white'>{card.level}</div>
            <div className='text-sm text-gray-400'>TCG Date</div>
            <div className='text-white'>ad</div>
            <div className='text-sm text-gray-400'>OCG Date</div>
            <div className='text-white'>asd</div>
          </div>
          <p className='text-gray-400'>{card.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
