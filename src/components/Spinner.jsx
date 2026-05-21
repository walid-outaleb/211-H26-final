function Spinner({ message }) {
  return (
    <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>
      <p>{message}</p>
    </div>
  )
}

export default Spinner
