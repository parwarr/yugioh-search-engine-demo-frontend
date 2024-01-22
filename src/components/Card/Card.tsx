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

  return <>{cards.map((card: CardItemType, index) => (console.log(card), (<CardItem key={index++} card={card} />)))}</>;
};

export default Card;
