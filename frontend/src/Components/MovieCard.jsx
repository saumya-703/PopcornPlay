import "../css/movie-card.css"

function Moviecard({ movie }) {

    function onfavouriteclick() {
        alert("Clicked");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onclick={onfavouriteclick}>💜</button>
                </div>
            </div>
            <div className="movie-infor">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default Moviecard