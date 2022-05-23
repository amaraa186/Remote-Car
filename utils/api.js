import axios from 'axios'
import config from '../env'

const TIMEOUT = 20000

export function request(ip) {

  let query = {
    baseURL: `http://${ip}:3000/api/`,
    // baseURL: config.API_URL,
    timeout: TIMEOUT,
  }

  return axios.create(query)
}
