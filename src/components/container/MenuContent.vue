<template>
  <div
    class="sticky top-0 bottom-0 left-0 z-10 flex flex-col justify-between h-screen p-6 w-80 bg-bertolt-primary text-bertolt-text-second"
  >
    <div
      class="w-full h-auto align-middle"
    >
      <div
        id="profile w-full"
        class="space-y-3 border-b border-bertolt-text-second"
      >
        <div
          class="flex justify-center"
        >
          <img
            class="w-32 h-32 rounded-full"
            :src="user.image.fullPath"
            alt=""
          >
        </div>
        <div
          class="pb-2"
        >
          <p
            class="text-lg font-medium line-clamp-1"
          >
            {{ user.name }}
          </p>
          <small>
            Administrador
          </small>
        </div>
      </div>
      <div
        id="menu"
        class="mt-5 space-y-4"
      >
        <div
          id="main"
        >
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="main"
          >
            <span class="text-xl icon-done"></span>
            <p>
              Tela inicial
            </p>
          </router-link>
        </div>
        <div
          id="registers"
        >
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="registerProperty"
          >
            <span class="text-xl icon-house"></span>
            <p>
              Cadastrar Propriedade
            </p>
          </router-link>
        </div>
        <div>
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="finishRelease"
          >
            <span class="text-xl icon-upgrade"></span>
            <p>
              Finalizar Lancamento
            </p>
          </router-link>
        </div>
        <div>
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="contacts"
          >
            <span class="text-xl icon-phone_in_talk"></span>
            <p>
              Interesses
            </p>
          </router-link>
        </div>
        <div>
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="contactUs"
          >
            <span class="text-xl icon-outgoing_mail"></span>
            <p>
              Fale conosco
            </p>
          </router-link>
        </div>
        <div>
          <router-link
            class="flex items-center space-x-2 font-medium"
            to="dashboards"
          >
            <span class="text-xl icon-trending_up"></span>
            <p>
              Dashboards
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div
      id="bottom"
      class="bottom-0 py-4 border-t border-bertolt-text-second"
    >
      <img
        src="../../assets/logo/logo_branco.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopBar',

  data () {
    return {
      user: { ...this.$store.state.user }
    }
  }
}
</script>