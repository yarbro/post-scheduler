import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <Link to="/" className="inline-block text-xl font-bold text-gray-900 cursor-pointer hover:text-green-600 transition-colors">
          Post Scheduler
        </Link>
      </div>
    </header>
  )
}
