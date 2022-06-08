<template>
  <div class="w-full h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-bertolt-background">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-bertolt-primary sm:text-3xl">Vamos começar!!</h1>

      <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
        Caso haja algum problema com o login, entre em contato imediatamente com o suporte!
      </p>

      <form action="" class="p-8 mt-6 mb-0 space-y-4 bg-white rounded-lg shadow-2xl">
        <p class="text-lg font-medium">Entre em sua conta</p>

        <div>
          <label for="email" class="text-sm font-medium">Email</label>

          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Email"
              v-model="user.email"
              @keydown.enter="signIn()"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Password"
              v-model="user.password"
              @keydown.enter="signIn()"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          class="flex items-center justify-center w-full h-10 px-5 py-1 text-sm font-medium text-white rounded-lg bg-bertolt-primary hover:opacity-90 disabled:opacity-75"
          @click.prevent="signIn()"
        >
          <span
            v-if="loading"
            class="w-6 h-6 text-2xl text-white animate-spin icon-spinner10"
          >
          </span>
          <span
            v-else
          >
            Entrar
          </span>
        </button>
        <div
          class="flex items-center justify-center w-full "
        >
          <p
            class="text-base font-medium text-red-500"
          >
            {{ message }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { signIn } from '../../gateway/armin/services/login'

export default {
  name: 'LoginForm',

  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      message: '',
      loading: false
    }
  },

  methods: {
    async signIn () {
      try {
        this.loading = true
        const user = await signIn(this.user.email, this.user.password)
        this.$store.commit('setAuthenticateUser', user)
        this.$store.commit('setExpiryDate')
        window.location.reload()
      } catch (error) {
        if (error?.response?.status === 404) {
          this.message = 'Usuário não encontrado'
        }
        this.message = 'Erro interno, tente novamente.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
