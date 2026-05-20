import { Route, Routes } from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import MoviesPage from './pages/MoviesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/films" element={<MoviesPage />} />
      <Route path="/films/:imdbID" element={<MovieDetailsPage />} />
      <Route path="/favoris" element={<FavoritesPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
