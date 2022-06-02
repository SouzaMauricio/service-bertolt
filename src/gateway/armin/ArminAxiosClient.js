import axios from 'axios'
import { store } from '@/store/store'

const arminAxios = axios.create({
  baseURL: process.env.VUE_APP_ARMIN_BASE_URL,
  headers: {
    'x-access-token': store.getters.token
  },
  timeout: 1000
})

export {
  arminAxios
}
