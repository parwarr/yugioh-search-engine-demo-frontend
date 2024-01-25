// Card.js
import { CardItemType } from '../../types/CardItem.type';
import CardItem from '../CardItem/CardItem';

const Card = ({ cards }) => {
  return (
    <>
      <div className='container flex-shrink-0 border border-solid border-cyan-50 rounded-xl bg-opacity-5 min-h-screen pt-10'>
        {cards.map((card: CardItemType, index: number) => (
          <CardItem key={index++} card={card} />
        ))}
      </div>
    </>
  );
};

export default Card;
