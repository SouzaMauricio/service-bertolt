<template>
  <div
    class="grid items-center w-full pt-40 justify-items-center"
  >
    <p
      class="text-3xl opacity-75 text-bertolt-primary"
    >
      Está no lugar certo??? Não há nada por aqui...
    </p>
    <img
      :src="require('../assets/no-data-bro.png')"
      class="h-96"
      alt=""
    >
  </div>
</template>

<script>

export default {
  name: 'DefaultScreen'
}
</script>
