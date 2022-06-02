
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
      token: null
    }
  },
  mutations: {
    setAuthenticateUser (state, userAuthenticate) {
      state.token = userAuthenticate.token
      state.user = { ...userAuthenticate.user }
    },
    clearAuthenticateUser (state) {
      state.token = null
      state.user = {}
    }
  },
  getters: {
    isAuthenticated: state => !!state.token, 
    token: state => state.token
  },
  plugins: [vuexLocal.plugin]
})

export {
  store
}
