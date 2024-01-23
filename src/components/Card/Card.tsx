import { useEffect, useState } from 'react';
import { getAllCards } from '../../service/api/api.service';
import { CardItemType } from '../../types/CardItem.type';
import CardItem from '../CardItem/CardItem';

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCards();
        setCards(result);
      } catch (error: any) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='container flex-shrink-0 bg-gray-700 border border-solid border-cyan-50 rounded-xl bg-opacity-5'>
        {cards.map((card: CardItemType, index) => (
          <CardItem key={index++} card={card} />
        ))}
      </div>
    </>
  );
};

export default Card;
