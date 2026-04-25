import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../api'
import useFetch from '../hooks/useFetch'
import PhotoList from './PhotoList'
import Spinner from './shared/Spinner'
import ErrorMessage from './shared/ErrorMessage'

export default function PostDetail() {
  const { id } = useParams()
  const fetchPost = useCallback(() => getPost(id), [id])
  const { data: post, loading, error } = useFetch(fetchPost)

  return (
    <>
      <title>{post ? `${post.title} | Post Scheduler` : 'Post Scheduler'}</title>

      {loading && <Spinner />}

      {error && <ErrorMessage message="Failed to load post" />}

      {post && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h1>

            {post.scheduled_date && (
              <div className="flex items-center gap-1 mb-5 text-sm text-gray-700">
                <span className="font-medium">Scheduled Date:</span>
                <span>{post.scheduled_date}</span>
              </div>
            )}

            <p className="text-gray-700 text-base">{post.post_text}</p>

            <PhotoList photos={post.photos} imgClassName="h-64" />
          </div>
        </div>
      )}
    </>
  )
}
