import { useEffect, useMemo, useState } from "react"
import Card from "../components/Card"
import { useNews } from "./useNews"
import SearchInput from "../components/Searchbutton"
import { useDebounce } from "./useDebounce"



const PostList = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const debouncedQuery = useDebounce(query, 400)
  const isValidQuery = debouncedQuery.length === 0 || debouncedQuery.length >= 3

  //  API çağrısı için sadece debouncedQuery ve page'i kullanıyoruz
  const { posts, loading, error } = useNews(isValidQuery ? debouncedQuery : '', page)

  // Arama yapıldığında sayfa başa dönsün (debounced query değişince)
  useEffect(() => {
    setPage(1)
  }, [debouncedQuery])

  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => Math.max(1, prev - 1))

  return (
    <div className="container mt-4">
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Haber başlığı ara.."
       // showButton={false}
        showButton
       buttonText="Ara"
       onSearchClick={() => console.log("Arandı:", query)}
      />

  
      {loading && (
        <div className="mt-2 text-primary">
          <span>Yükleniyor...</span>
        </div>
      )}

      {error && <p className="text-danger">{error}</p>}

      {/* Kartlar */}
      {!loading && !error && (
        <div className="row g-4 mt-2">
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                <Card post={post} />
              </div>
            ))
          ) : (
            <p className="text-muted">Sonuç bulunamadı.</p>
          )}
        </div>
      )}

      {/* Sayfalama */}
      {!loading && !error && posts.length > 0 && (
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            disabled={page === 1}
            onClick={prevPage}
            className="btn btn-secondary"
          >
            Önceki
          </button>
          <span>Sayfa {page}</span>
          <button onClick={nextPage} className="btn btn-primary">
            Sonraki
          </button>
        </div>
      )}
    </div>
  )
}

export default PostList