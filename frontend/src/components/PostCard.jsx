import { Link } from 'react-router-dom'
import PhotoList from './PhotoList'

export default function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {post.title}
        </h2>
      </div>

      {post.scheduled_date && (
        <div className="flex items-center gap-1 text-sm text-gray-700 mb-4">
          <span className="font-medium">Scheduled Date:</span>
          <span>{post.scheduled_date}</span>
        </div>
      )}

      <p className="text-base text-gray-600">{post.post_text}</p>

      <PhotoList photos={post.photos} imgClassName="h-16" />
    </Link>
  )
}
