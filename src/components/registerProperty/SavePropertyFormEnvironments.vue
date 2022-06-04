<template>
  <div
    class="w-full p-4 space-y-2 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-house"></span>
      <p
        class="text-sm font-medium"
      >
        Ambientes
      </p>
      <small>
        (colocar separado por virgula. Ex: 1,3)
      </small>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="bedroom"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Quartos
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.bedroom"
          name="bedroom"
          id="bedroom"
        >
      </label>
      <label
        for="bathrooms"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Banheiros
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.bathrooms"
          name="bathrooms"
          id="bathrooms"
        >
      </label>
      <label
        for="suites"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Suítes
          <small>(Opicional)</small>
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.suites"
          name="suites"
          id="suites"
        >
      </label>
      <label
        for="kitchen"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Cozinhas
          <small>(Opicional)</small>
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.kitchen"
          name="kitchen"
          id="kitchen"
        >
      </label>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="garages"
        class="w-1/3 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Vagas
          <small>(Opicional)</small>
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.garages"
          name="garages"
          id="garages"
        >
      </label>
      <label
        for="livingroom"
        class="w-1/3 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Salas
          <small>(Opicional)</small>
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.livingroom"
          name="livingroom"
          id="livingroom"
        >
      </label>
      <label
        for="balcony"
        class="w-1/3 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Varanda
          <small>(Opicional)</small>
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localEnvironments.balcony"
          name="balcony"
          id="balcony"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavePropertyFormEnvironments',

  props: {
    environments: {
      require: false,
      type: Object
    }
  },

  data () {
    return {
      localEnvironments: this.environments
    }
  }
}
</script>
