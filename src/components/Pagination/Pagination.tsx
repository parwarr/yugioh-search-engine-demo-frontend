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

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='flex flex-col items-center'>
      <Card cards={subset} />
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName='flex gap-4 mt-4'
        pageClassName='border rounded-xl px-3 py-2 cursor-pointer hover:bg-white hover:border hover:rounded-xl hover:px-3 hover:py-2 text-white'
        breakClassName='border rounded-xl px-3 py-2 cursor-not-allowed hover:bg-white hover:border hover:rounded-xl hover:px-3 hover:py-2 text-white'
        activeClassName='bg-gray-700 border rounded-xl px-3 py-2 cursor-pointer hover:bg-white hover:text-black hover:border hover:rounded-xl hover:px-3 hover:py-2 text-white'
        previousLabel={'◀️'}
        nextLabel={'▶️'}
        previousClassName='border rounded-xl px-3 py-2 cursor-pointer hover:bg-white hover:border hover:rounded-xl hover:px-3 hover:py-2 text-white'
        nextClassName='border rounded-xl px-3 py-2 cursor-pointer hover:bg-white hover:border hover:rounded-xl hover:px-3 hover:py-2 text-white'
      />
    </div>
  );
};

export default Pagination;
