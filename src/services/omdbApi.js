const API_URL = 'https://www.omdbapi.com/?apikey=e73ea485'

async function fetchOmdb(query) {
  const response = await fetch(`${API_URL}&${query}`)
  const data = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'Aucun résultat trouvé.')
  }

  return data
}

export async function searchMovies(searchTerm) {
  const data = await fetchOmdb(`s=${encodeURIComponent(searchTerm)}`)

  return data.Search || []
}

export async function getMovieDetails(imdbID) {
  return fetchOmdb(`i=${encodeURIComponent(imdbID)}&plot=full`)
}
