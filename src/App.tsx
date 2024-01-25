import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './pages/Card/Card';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/name' element={<Card />} />
        </Routes>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
