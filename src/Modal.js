import './Modal.css'
import React from 'react';
import ReactDOM from 'react-dom';

function Modal (props) {
 /*   return(
        <div className='wrapper'>
            <div className='modal'>
                <div className='modal-content'>
                    <h3>asdfgh</h3>
                </div>
            </div>
        </div>
    )

return ReactDOM.createPortal (
    <div className='ui dimmer show modals visible active'>
        <div className='ui raised very padded text container segment'>
            <h1>asdfgbhnm</h1>
        </div>

    </div>,
    document.querySelector('#modal')
)
*/

return (
    (props.trigger) ? (
    <div className='modal'>
        <div className='modal-inner'>
            <button className='close-btn' onClick={() => props.setButtonModal(false)}>Close</button>
            
            <tbody>
                <tr>
                    <th className='col1x1'> 
                         {props.movie.backdrop_path !== null ? <img className = 'img-info' src={'https://image.tmdb.org/t/p/w500'+props.movie.backdrop_path} alt="" /> : <img className = 'img-info' src = {'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />}
                    </th>
                    <th className='col1x2'>
                            <tr className='movie-title'> <h1>{props.movie.title}</h1></tr>
                            <tr>
                                <th><h3>Original language: </h3></th>
                                <th ><p>{props.movie.original_language}</p></th>
                            </tr>
                            <tr>
                                <th ><h3>Release date: </h3></th>
                                <th><p>{props.movie.release_date}</p></th>
                            </tr>
                            <tr>
                                <th ><h3>Rate:</h3></th>
                                <th ><p>{props.movie.vote_average}</p></th>
                            </tr>       
                    </th>
                </tr>
                 
                       
            </tbody>
            <div movie-overview>
               <h2>Owerview: </h2>
                <p>{props.movie.overview}</p>  
            </div>
                
            
        </div>

    </div>
) :"" )
}

export default Modal;
