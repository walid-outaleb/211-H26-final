import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import MovieCardList from '../components/MovieCardList'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import { searchMovies } from '../services/omdbApi'

const randomSearchTerms = [
  'batman',
  'spider',
  'star',
  'love',
  'dark',
  'war',
  'king',
  'game',
]

function MoviesPage() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  async function loadThirtyMovies(searchTerm) {
    const firstPage = await searchMovies(searchTerm, 1)

    try {
      const secondPage = await searchMovies(searchTerm, 2)
      const thirdPage = await searchMovies(searchTerm, 3)
      return [...firstPage, ...secondPage, ...thirdPage].slice(0, 30)
    } catch {
      return firstPage.slice(0, 30)
    }
  }

  useEffect(() => {
    async function loadRandomMovies() {
      const randomIndex = Math.floor(Math.random() * randomSearchTerms.length)
      const randomTerm = randomSearchTerms[randomIndex]

      setIsLoading(true)
      setError('')

      try {
        const results = await loadThirtyMovies(randomTerm)
        setMovies(results)
      } catch (apiError) {
        setMovies([])
        setError(apiError.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadRandomMovies()
  }, [])

  async function handleSearch(event) {
    event.preventDefault()

    if (search.trim() === '') {
      setError('Écris un titre de film ou de série avant de rechercher.')
      setMovies([])
      setHasSearched(false)
      return
    }

    setIsLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const results = await loadThirtyMovies(search.trim())
      setMovies(results)
    } catch (apiError) {
      setMovies([])
      setError(apiError.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="mb-3 text-3xl font-bold">Liste des films</h1>
          <p className="max-w-2xl text-slate-300">
            Recherche un film ou une série avec l'API OMDb. Les résultats sont
            affichés sous forme de cartes, avec un maximum de 30 résultats.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <label htmlFor="movie-search" className="mb-2 block font-semibold">
            Rechercher un film ou une série
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="movie-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Exemple: Batman"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Rechercher
            </button>
          </div>
        </form>

        {!hasSearched && !error && movies.length === 0 && !isLoading && (
          <p className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
            Entre un titre pour commencer la recherche.
          </p>
        )}

        {isLoading && <Spinner message="Recherche en cours..." />}

        {error && (
          <p className="mt-8 rounded-xl border border-red-900 bg-red-950 p-4 text-red-200">
            {error}
          </p>
        )}

        {!isLoading && movies.length > 0 && <MovieCardList movies={movies} />}
      </main>

      <Footer />
    </div>
  )
}

export default MoviesPage
