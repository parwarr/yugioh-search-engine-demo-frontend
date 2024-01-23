import Card from '../../components/Card/Card';
import Searchbar from '../../components/Searchbar/Searchbar';

const Home = () => {
  return (
    <>
      <h1 className='text-4xl text-center mt-4 mb-4'>Card Database</h1>
      <Searchbar />
      <Card />
    </>
  );
};

export default Home;
