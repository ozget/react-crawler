import { useMemo, useState } from "react"
import Card from "../components/Card"
import { useNews } from "./useNews"
import SearchInput from "../components/Searchbutton"

const PostList = () => {
  const { posts, loading, error } = useNews()
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(() => {
    const lower = query.toLowerCase().trim()
    return posts.filter(post =>
      post.title?.toLowerCase().includes(lower) ||
      post.body?.toLowerCase().includes(lower)
    )
  }, [query, posts])

  if (loading) return <p>Yükleniyor...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="container mt-4">
      {/* Arama Kutusu */}
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Haber başlığı veya içeriğinde ara..."
        showButton
        buttonText="Ara"
        onSearchClick={() => console.log("Arandı:", query)}
      />

      {/* Kartlar */}
      <div className="row g-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <Card post={post} />
            </div>
          ))
        ) : (
          <p className="text-muted">Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  )
}

export default PostList