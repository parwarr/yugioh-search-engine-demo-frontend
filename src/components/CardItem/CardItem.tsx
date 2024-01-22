import { CardItemType } from '../../types/CardItem.type';

interface Props {
  card: CardItemType;
}

// TODO: Add styling with TW
const CardItem = ({ card }: Props) => {
  return (
    <div className='container mx-auto mb-4 '>
      <div className='max-w-md mx-auto bg- rounded-xl overflow-hidden shadow-lg'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-shrink-0'>
            <img className='h-48 w-full object-contain sm:w-48' src={card.cardImagePresignedUrl} alt='Card' />
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-4'>
            <div className='text-xl font-medium text-gray-900'>{card.name}</div>
            <p className='mt-1 text-gray-600'>{card.desc}</p>
            <div className='mt-4'>
              <a href='#' className='text-indigo-600 hover:text-indigo-900 font-medium'>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
