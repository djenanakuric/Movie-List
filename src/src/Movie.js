import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Modal.css'
import Modal from './Modal'
import {useState} from 'react';

function Movie({movie}) {
    const [buttonModal, setButtonModal] = useState(false);
return(

    <div>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout>
        <BrowserRouter>
        <div className="movieTitle">
            <h2> {movie.title} </h2>
        </div>
            <img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path} alt="" onClick={() => setButtonModal(true)}/>
            <Modal trigger = {buttonModal} buttonModal = {buttonModal} setButtonModal = {setButtonModal} movie= {movie}>
            </Modal>
        </BrowserRouter>
    </motion.div>  
    </div>
    

)
}

export default Movie;