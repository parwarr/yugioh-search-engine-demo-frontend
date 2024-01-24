// Pagination.js
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getAllCards } from '../../service/api/api.service';
import Card from '../Card/Card';

const Pagination = () => {
  const itemsPerPage = 3;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllCards().then(response => {
      setData(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    });
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);
  console.log(subset);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <Card cards={subset} />
      <ReactPaginate pageCount={totalPages} onPageChange={handlePageChange} forcePage={currentPage} />
    </div>
  );
};

export default Pagination;
