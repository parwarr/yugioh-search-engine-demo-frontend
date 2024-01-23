import { CardItemType } from '../../types/CardItem.type';

interface Props {
  card: CardItemType;
}

const CardItem = ({ card }: Props) => {
  return (
    <div className='container mx-auto mb-4 mt-4 max-w-xl'>
      <div className='max-w-sm mx-auto rounded-xl overflow-hidden hover:bg-slate-200 hover:scale-125'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-shrink-0'>
            <img className='h-48 w-full object-contain sm:w-48' src={card.cardImagePresignedUrl} alt='Card' />
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-4'>
            <div className='text-xl font-medium'>{card.name}</div>
            <p className='mt-1'>{card.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
