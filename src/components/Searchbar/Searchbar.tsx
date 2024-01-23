import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const search = async (query: string) => {
    setIsSearching(true);
    // const results = await searchApi(query);
    const results = query ? [{ id: 1, name: 'Result 1' }] : [];
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    search(query);
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='relative flex'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearch}
          className='w-full border p-2 rounded-xl pr-10'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <SearchIcon className='w-6 h-6 text-gray-600' />
        </div>
      </div>

      {isSearching && <div className='mt-2 text-gray-600'>Searching...</div>}
      {searchResults.map(result => (
        <div key={result.id} className='mt-2 p-2 rounded-md'>
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default Searchbar;
