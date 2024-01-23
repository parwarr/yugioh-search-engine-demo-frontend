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
      <div className='container flex-shrink-0 border border-solid border-cyan-50  rounded-xl bg-opacity-5'>
        {cards.map((card: CardItemType, index) => (
          <a className='text-slate-50 hover:text-slate-50' href={card.name} target='_self' rel='name'>
            <CardItem key={index++} card={card} />
          </a>
        ))}
      </div>
    </>
  );
};

export default Card;
