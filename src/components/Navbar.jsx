import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white'
      : 'rounded-full px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800'

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold text-white">
          CinéSearch
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>
          <NavLink to="/films" className={linkClass}>
            Films
          </NavLink>
          <NavLink to="/favoris" className={linkClass}>
            Favoris
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
