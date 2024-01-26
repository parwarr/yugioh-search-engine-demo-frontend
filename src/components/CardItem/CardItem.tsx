import { CardItemType } from '../../types/CardItem.type';
import formatName from '../helpers/FormatName';

interface Props {
  card: CardItemType;
}

const CardItem = ({ card }: Props) => {
  return (
    <div className='container mx-auto mb-4 mt-4 max-w-xl'>
      <a className='text-slate-50 hover:text-slate-50' href={`/name?name=${card.name}`} target='_self' rel='name'>
        <div className='max-w-sm mx-auto rounded-xl overflow-hidden hover:bg-slate-200  hover:scale-125 transition duration-300 ease-in-out'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-shrink-0'>
              <img className='h-48 w-full object-contain sm:w-48' src={card.cardImagePresignedUrl} alt='Card' />
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-4'>
              <div className='text-xl font-medium'>{formatName(card.name)}</div>
              <p className='mt-1'>{card.desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
