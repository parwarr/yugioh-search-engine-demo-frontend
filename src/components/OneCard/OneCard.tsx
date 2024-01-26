import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCard } from '../../service/api/api.service';
import { CardItemType } from '../../types/CardItem.type';
import FormatName from '../helpers/FormatName';
import formatString from '../helpers/FormatString';

const OneCard = () => {
  const [card, setCard] = useState<CardItemType>({} as CardItemType);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    if (!name) {
      navigate('/');
      return;
    }

    getCard(name).then(response => {
      setCard(response.data);
    });
  }, [location.search]);

  const cardStats = [
    { title: 'Attribute', value: formatString(card.monsterAttribute) },
    { title: 'Typing', value: formatString(card.monsterType) },
    { title: 'Type', value: formatString(card.cardType) },
    { title: 'Level/Rank', value: card.level },
    { title: 'ATK', value: card.atk },
    { title: 'DEF', value: card.def },
  ];

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-4xl bg-transparent bg-gray-800  text-white rounded-3xl p-5 border border-slate-50 shadow-xl'>
        <div className='md:w-1/2 flex justify-center'>
          <img
            className='w-[80%] h-auto object-cover rounded-lg shadow-lg hover:scale-150 transition duration-300 ease-in-out'
            src={card.cardImagePresignedUrl}
            alt={FormatName(card.name)}
          />
        </div>
        <div className='md:w-1/2 p-4 flex flex-col justify-between'>
          <div>
            <h3 className='text-slate-50 text-3xl font-bold mb-3'>{FormatName(card.name)}</h3>
            <div className='grid grid-cols-2 gap-4'>
              {cardStats.map(stat => (
                <div key={stat.title} className='flex items-center bg-gray-700 bg-opacity-15 rounded p-2'>
                  <div>
                    <div className='text-sm text-gray-400'>{stat.title}</div>
                    <div className='text-lg text-white'>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4'>
              <div className='text-lg text-white'>Card Text</div>
              <p className='text-white font-bold mt-2'>{card.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
