import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function FavoritesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-3 text-3xl font-bold">Mes favoris</h1>
        <p className="mb-8 max-w-2xl text-slate-300">
          Cette page affichera les films et séries ajoutés aux favoris pendant
          la semaine 3 du projet.
        </p>

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">
          <p className="text-lg font-semibold">Aucun favori pour le moment.</p>
          <p className="mt-2 text-slate-400">
            Les favoris apparaîtront ici quand la fonctionnalité sera ajoutée.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default FavoritesPage
