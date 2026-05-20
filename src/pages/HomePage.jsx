import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-400">
              Projet final Applications Web
            </p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Bienvenue sur CinéSearch
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-8 text-slate-300">
              CinéSearch permet de rechercher des films et des séries avec
              l'API OMDb, de consulter leurs informations et de préparer une
              liste de favoris.
            </p>
            <Link
              to="/films"
              className="inline-block rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Voir la liste des films
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="rounded-2xl bg-slate-800 p-6">
              <p className="mb-4 text-sm uppercase tracking-wide text-slate-400">
                Aperçu de l'application
              </p>
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-700 p-4">
                  <p className="font-semibold">Recherche de films</p>
                  <p className="text-sm text-slate-300">
                    Une page pour afficher et filtrer les résultats.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-700 p-4">
                  <p className="font-semibold">Détails et favoris</p>
                  <p className="text-sm text-slate-300">
                    Des fonctionnalités prévues pour les prochaines étapes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
