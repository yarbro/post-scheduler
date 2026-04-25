import { getPosts } from '../api'
import useFetch from '../hooks/useFetch'
import Spinner from './shared/Spinner'
import ErrorMessage from './shared/ErrorMessage'
import PostCard from './PostCard'

export default function PostList() {
  const { data: posts, loading, error } = useFetch(getPosts)

  return (
    <>
      <title>Post Scheduler</title>

      {loading && <Spinner />}

      {error && <ErrorMessage message="Failed to load posts" />}

      {!loading && !error && posts?.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No posts</p>
        </div>
      )}

      {!loading && !error && posts?.length > 0 && (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </>
  )
}
