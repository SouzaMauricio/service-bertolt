<template>
  <div
    class="sticky top-0 z-40 flex items-center justify-end w-full h-16 px-2 py-2 bg-white shadow-md"
  >
    <button
      class="items-center w-10 h-10 font-medium rounded-full text-bertolt-primary hover:bg-gray-200"
      @click="logout"
    >
      <span class="text-xl icon-logout"></span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'TopBar',

  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    logout () {
      this.$store.commit('clearAuthenticateUser')
      this.$router.push('/login')
    }
  }
}
</script>
