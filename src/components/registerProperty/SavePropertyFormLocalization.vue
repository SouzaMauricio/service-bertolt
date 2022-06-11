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
        Localização
      </p>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="street"
        class="w-4/5 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Rua/Av
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.street"
          name="street"
          id="street"
        >
      </label>
      <label
        for="number"
        class="w-1/5 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Número
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.number"
          name="number"
          id="number"
        >
      </label>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="complement"
        class="w-1/2 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Complemento
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.complement"
          name="complement"
          id="complement"
        >
      </label>
      <label
        for="neighborhood"
        class="w-1/2 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Bairro
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.neighborhood"
          name="neighborhood"
          id="neighborhood"
        >
      </label>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="city"
        class="w-3/5 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Cidade
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.city"
          name="city"
          id="city"
        >
      </label>
      <label
        for="state"
        class="w-1/5 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Estado
        </p>
        <select
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          v-model="localLocalization.state"
          name="state"
          id="state"
        >
          <option
            value="SP"
          >
            São Paulo
          </option>
        </select>
      </label>
      <label
        for="zipcode"
        class="w-1/5 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          CEP
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localLocalization.zipcode"
          name="zipcode"
          v-mask="'#####-###'"
          id="zipcode"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavePropertyFormLocalization',

  props: {
    localization: {
      require: false,
      type: Object
    }
  },

  data () {
    return {
      localLocalization: this.localization
    }
  }
}
</script>
