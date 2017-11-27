import axios from 'axios'
import { API_HOST } from '../constants/index'

export const FETCH_TODO = 'FETCH_TODO'

export const fetchTodo = () => {
  const request = axios.get(API_HOST).catch(error => console.log(error))

  return {
    type: FETCH_TODO,
    payload: request,
  }
}
