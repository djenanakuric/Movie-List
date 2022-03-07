
import {useEffect, useState} from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Pagination from './Pagination';
import MovieInformation from './MovieInformation';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect( () => { 
    fetchPopular(); 
  } ,[]);

  const fetchPopular = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=5');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);

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
      <Footer />
    </div>

  );
}

export default App;
