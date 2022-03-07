
import {useEffect} from 'react'

function Pagination ({setPopular, setFiltered}) {

    var a = 2;
    useEffect( () => { 
        fetchPopular(); 
      } ,[]);
    
      const fetchPopular = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=${a}`);
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results);
    
      }

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <button class="page-item disabled">
                <a class="page-button">Previous</a>
                </button>
                <button class="page-item" onClick={fetchPopular(1)}><a class="page-link" href="#">1</a></button>
                <button class="page-item" onClick={fetchPopular(2)}><a class="page-link" href="#">2</a></button>
                <button class="page-item"><a class="page-link" href="#">3</a></button>
                <button class="page-item"><a class="page-link" href="#">4</a></button>
                <button class="page-item"><a class="page-link" href="#">4</a></button>
                <button class="page-item">
                <a class="page-link" href="#">Next</a>
                </button>
            </ul>
        </nav>
    )
}

export default Pagination;