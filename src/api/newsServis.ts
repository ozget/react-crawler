import axios from 'axios'
import { NewsModel } from '../types/NewsModel'

const BASE_URL = 'https://localhost:7183/api'

export const getAllNews = async (query: string, page: number): Promise<NewsModel[]> => {
  const response = await axios.get(`${BASE_URL}/Elastic/all`, {
    params: {
      query,
      page,
      pageSize: 100
    }
  })
  return response.data
}