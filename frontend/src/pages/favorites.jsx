// pages/favorites.jsx

import "../css/favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext(); // ✅ match the context key

  if (favorites && favorites.length > 0) {
    return (
      <div className="Favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorites</h2>
      <p>Start adding your favorite movies here...</p>
    </div>
  );
}

export default Favorite;
