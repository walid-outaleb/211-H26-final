import MovieCard from './MovieCard'

function MovieCardList({ movies }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}

export default MovieCardList
