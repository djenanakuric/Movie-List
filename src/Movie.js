

function Movie({movie}) {
return(
    <div>
        <div className="movieTitle">
            <h2> {movie.title} </h2>
        </div>
        
        <img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path} alt="" />
    </div>
)
}

export default Movie;