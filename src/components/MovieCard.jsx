import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

function MovieCard({ movie }) {
  // retourn N/A si pas dimage parfois
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const movieIsFavorite = isFavorite(movie.imdbID)

  function handleFavoriteClick() {
    if (movieIsFavorite) {
      removeFavorite(movie.imdbID)
    } else {
      addFavorite(movie)
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
      {hasPoster ? (
        <img
          src={movie.Poster}
          alt={`Affiche de ${movie.Title}`}
          className="h-96 w-full object-cover"
        />
      ) : (
        <div className="flex h-96 items-center justify-center bg-slate-800 px-4 text-center text-slate-400">
          Image non disponible
        </div>
      )}

      <div className="space-y-3 p-4">
        <div>
          <h2 className="text-xl font-bold">{movie.Title}</h2>
          <p className="text-sm text-slate-400">
            {movie.Year} - {movie.Type}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            to={`/films/${movie.imdbID}`}
            className="inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white"
          >
            Voir détails
          </Link>

          <button
            type="button"
            onClick={handleFavoriteClick}
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
          >
            {movieIsFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
