import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/Searchbar/Searchbar';
import { getAllCards } from '../../service/api/api.service';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCards().then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center mt-4 mb-4'>Card Database</h1>
      <Searchbar placeholder='Enter a Card Name...' data={data} />
      <Pagination />
    </>
  );
};

export default Home;
