import PhotoList from "./PhotoList"

export default function PostCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-xl font-bold text-gray-900">
          {post.title}
        </h2>
      </div>

      <div className="flex items-center gap-1 text-sm text-gray-700 mb-4">
        <span className="font-medium">Scheduled Date:</span>
        <span>{post.scheduled_date}</span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{post.post_text}</p>

      <PhotoList photos={post.photos} maxHeight="16" />
    </div>
  )
}
