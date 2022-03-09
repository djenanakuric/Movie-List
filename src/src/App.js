
import {useEffect, useState} from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Pagination from 'react-paginate';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect( () => { 
    fetchPopular(); 
  } ,[currentPage]);

  const fetchPopular = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page='+currentPage);
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
    console.log(data)
    setActiveGenre(0)
  }

    const handlePageClick = (data) => {
      console.log (data.selected+1)
      setCurrentPage(data.selected+1);
    }
  return (
 
    <div className="App">
    
     <Header /> 
      <Filter popular = {popular} setFiltered = {setFiltered} activeGenre = {activeGenre} setActiveGenre = {setActiveGenre}/>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout className='popular-movies'>
        {filtered.map( movie => {
          return (
          <Movie  key={movie.id} movie = {movie}/>
          );
        })}
      </motion.div>
      <Pagination 
        previousLabel = { '<'}
        nextLabel = { '>'} 
        breakLabel = { '...'}
        pageCount = {50}
        marginPagesDisplayed = {3}
        onPageChange = {handlePageClick}
        containerClassName = {'pagination'}
        pageClassName = {'page-item'}
        pageLinkClassName = {'page-link'}
      />
      <Footer />
    </div>

  );
}

export default App;
