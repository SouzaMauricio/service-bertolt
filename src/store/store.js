
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: {},
      token: null,
      expiryDate: ''
    }
  },
  mutations: {
    setAuthenticateUser (state, userAuthenticate) {
      state.token = userAuthenticate.token
      state.user = { ...userAuthenticate.user }
    },
    clearAuthenticateUser (state) {
      state.expiryDate = null
      state.token = null
      state.user = {}
    },
    setExpiryDate: (state) => {
      const date = new Date()
      date.setHours(date.getHours() + 5)
      state.expiryDate = date
    }
  },
  getters: {
    isAuthenticated: state => !!state.token, 
    token: state => state.token,
    isExpired: state => (new Date(state.expiryDate) < new Date()),
  },
  plugins: [vuexLocal.plugin]
})

export {
  store
}
