import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getMovieDetails } from '../services/omdbApi'

function MovieDetailsPage() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadMovieDetails() {
      setIsLoading(true)
      setError('')

      try {
        const details = await getMovieDetails(imdbID)
        setMovie(details)
      } catch (apiError) {
        setMovie(null)
        setError(apiError.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadMovieDetails()
  }, [imdbID])

  const hasPoster = movie?.Poster && movie.Poster !== 'N/A'

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Link
          to="/films"
          className="mb-6 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          Retour à la recherche
        </Link>

        {isLoading && (
          <p className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
            Chargement des détails...
          </p>
        )}

        {error && (
          <p className="rounded-xl border border-red-900 bg-red-950 p-4 text-red-200">
            {error}
          </p>
        )}

        {!isLoading && movie && (
          <section className="grid gap-8 md:grid-cols-[320px_1fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              {hasPoster ? (
                <img
                  src={movie.Poster}
                  alt={`Affiche de ${movie.Title}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-96 items-center justify-center bg-slate-800 px-4 text-center text-slate-400">
                  Image non disponible
                </div>
              )}
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-400">
                {movie.Type}
              </p>
              <h1 className="mb-4 text-4xl font-bold">{movie.Title}</h1>
              <p className="mb-6 leading-8 text-slate-300">{movie.Plot}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Année</p>
                  <p className="font-semibold">{movie.Year}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Genre</p>
                  <p className="font-semibold">{movie.Genre}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Réalisateur</p>
                  <p className="font-semibold">{movie.Director}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Durée</p>
                  <p className="font-semibold">{movie.Runtime}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Acteurs</p>
                  <p className="font-semibold">{movie.Actors}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Note IMDb</p>
                  <p className="font-semibold">{movie.imdbRating}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default MovieDetailsPage
