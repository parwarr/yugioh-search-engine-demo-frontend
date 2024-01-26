import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { CardItemType } from '../../types/CardItem.type';
import formatName from '../helpers/FormatName';
interface Props {
  placeholder: string;
  data: CardItemType[];
}

const Searchbar = ({ placeholder, data }: Props) => {
  const [filteredData, setFilteredData] = useState<CardItemType[]>([]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    const newFilter = data.filter(value => {
      const formatNameValue = formatName(value.name);

      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        formatNameValue.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='relative flex'>
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleFilter}
          className='w-full border p-2 rounded-xl pr-10'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <SearchIcon className='w-6 h-6 text-gray-600' />
        </div>
      </div>
      {filteredData && filteredData.length != 0 ? (
        <div className='absolute mt-3 mx-auto p-4 w-[420px] rounded-xl bg-slate-400 shadow-md overflow-hidden z-10'>
          {filteredData.map(result => (
            <a
              key={result.id}
              href={`/name?name=${result.name}`}
              className='group block p-1 mb-1 rounded-md overflow-hidden hover:bg-white transition duration-150 ease-in-out'
            >
              <div className='flex items-center space-x-3 mb-3'>
                <img src={result.cardImagePresignedUrl} alt={result.name} className='w-10 h-auto rounded-md' />
                <span className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate group-hover:text-blue-600'>
                    {formatName(result.name)}
                  </p>
                  <p className='text-sm text-gray-500 truncate group-hover:text-blue-400'>{result.desc}</p>
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
