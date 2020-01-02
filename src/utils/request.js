import axios from 'axios'
import { message } from 'antd'

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'http://localhost:3000'

const instance = axios.create( {
  baseURL,
  timeout: 30000,
  withCredentials: true
} )

instance.interceptors.request.use( config => {
  return config
}, error => {
  Promise.reject( error )
} )

instance.interceptors.response.use(
  response => {
    if ( response.data.code && response.data.code === 0 ) {
      return response.data
    }
    message.warn( response.data.msg )
    return response.data
  },
  error => {
    return Promise.reject( error )
  } )

export default instance
