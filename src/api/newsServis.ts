import axios from 'axios'
import { NewsModel } from '../types/NewsModel'

const BASE_URL = 'https://localhost:7183/api'

export const getAllNews = async (): Promise<NewsModel[]> => {
  const response = await axios.get(`${BASE_URL}/Elastic/all`)
  console.log("response",response)
  return response.data
}