import { useEffect, useState } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import { getAllCards } from '../../service/api/api.service';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCards();
        setCards(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <Searchbar />

      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {cards.map(card => (
            <li key={card.id}>{card.cardImagePresignedUrl}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
