import axios from 'axios'
import { store } from '@/store/store'

const arminAxios = axios.create({
  baseURL: process.env.VUE_APP_ARMIN_BASE_URL,
  headers: {
    'x-access-token': store.getters.token
  },
  timeout: 1000
})


arminAxios.defaults.timeout = 10000 * 3

arminAxios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error?.response?.status === 401) {
    store.commit('clearAuthenticateUser')
    window.location.reload()
  }
  return Promise.reject(error)
})

export {
  arminAxios
}
