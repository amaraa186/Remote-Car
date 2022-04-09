import axios from 'axios'

import config from '../env'

const TIMEOUT = 20000

export function request() {
    let query = {
      baseURL: config.API_URL,
      timeout: TIMEOUT,
    }

    return axios.create(query)
}
