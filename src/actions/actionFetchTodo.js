import axios from 'axios';
import { API_HOST } from '../src/constants/index';

export const FETCH_TODO = 'FETCH_TODO';

export const fetchTodo = () => {
  const request = axios.get(API_HOST);

  console.log('Request:', request);

  return {
    type: FETCH_TODO,
    payload: request
  };
};
