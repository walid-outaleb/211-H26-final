import Footer from '../components/Footer'
import MovieCardList from '../components/MovieCardList'
import Navbar from '../components/Navbar'
import { useFavorites } from '../context/FavoritesContext'

function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-3 text-3xl font-bold">Mes favoris</h1>
        <p className="mb-8 max-w-2xl text-slate-300">
          Cette page affiche les films et séries que tu as ajoutés aux favoris.
        </p>

        {favorites.length > 0 ? (
          <MovieCardList movies={favorites} />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
            <p className="text-lg font-semibold">
              Aucun favori pour le moment.
            </p>
            <p className="mt-2 text-slate-400">
              Les films ajoutés aux favoris apparaîtront ici.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default FavoritesPage
