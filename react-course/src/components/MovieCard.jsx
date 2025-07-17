
function MovieCard({ movie: {title , id, vote_average, poster_path, release_date, original_language } }) {
    return(
        <div className="movie-card">
            <img src={poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}` : 'no/movie/.png'}/>
        </div>
    )
}

export default MovieCard;