import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://104.223.143.72:3000',
  baseURL: 'http://10.0.2.2:3333',
})

export default api
