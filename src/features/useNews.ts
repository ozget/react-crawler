import { useEffect, useState } from "react"
import { NewsModel } from "../types/NewsModel"
import { getAllNews } from "../api/newsServis"

export const useNews = (query: string, page: number) => {

const [posts, setPosts] = useState<NewsModel[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getAllNews(query, page)
        setPosts(result)
      } catch (err: any) {
        setError("Veriler alınırken hata oluştu.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, page])

  return { posts, loading, error }

}