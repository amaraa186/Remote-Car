import axios from 'axios'
import React, { useContext } from 'react';
import IPContext from '../context/IPContext';
import config from '../env'

const TIMEOUT = 20000

export function request() {

  const state = useContext(IPContext)

  let query = {
    // baseURL: `http://${state.ipaddress}:3000/api`,
    baseURL: config.API_URL,
    timeout: TIMEOUT,
  }

  return axios.create(query)
}
