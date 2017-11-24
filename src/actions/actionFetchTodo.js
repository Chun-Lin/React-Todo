import axios from 'axios'
import { API_HOST } from '../constants/index'

export const FETCH_TODO = 'FETCH_TODO'

export const fetchTodo = () => {
  const request = axios.get(API_HOST)

  return {
    type: FETCH_TODO,
    payload: request,
  }
}
