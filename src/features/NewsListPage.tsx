import Card from "../components/Card"
import { useNews } from "./useNews"


const PostList = () => {
  const { posts, loading, error } = useNews()

  if (loading) return <p>Yükleniyor...</p>
  if (error) return <p className="text-red-500">{error}</p>

 return (
 <div className="container mt-4">
      <div className="row g-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
          >
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default PostList