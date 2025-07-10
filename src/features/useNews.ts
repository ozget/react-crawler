import { useEffect, useState } from "react"
import { NewsModel } from "../types/NewsModel"
import { getAllNews } from "../api/newsServis"

export const useNews = () => {

const [posts, setPosts] = useState<NewsModel[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllNews()
        setPosts(data)
      } catch (err) {
        setError('Veriler yüklenemedi.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { posts, loading, error }
}