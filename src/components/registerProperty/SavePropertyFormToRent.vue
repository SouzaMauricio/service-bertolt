<template>
  <div
    class="w-full p-4 space-y-4 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-house"></span>
      <p>
        Aluguel
      </p>
    </div>
    <p>
      Esse imóvel está disponível para alugar?
    </p>
    <div
      class="flex space-x-6"
    >
      <label
        for="toRentTrue"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localToRent"
          name="toRentTrue"
          id="toRentTrue"
          :value="true"
          @change="setRentPrice()"
        >
        <p>
          Sim
        </p>
      </label>

      <label
        for="toRentFalse"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localToRent"
          name="toRentFalse"
          id="toRentFalse"
          :value="false"
          @change="removeRentOption()"
        >
        <p>
          Não
        </p>
      </label>
    </div>

    <div>
      <label
        for="rentPrice"
        class="space-y-2"
      >
        <div
          class="flex space-x-2 text-bertolt-primary"
        >
          <p
            class="text-sm font-medium"
          >
            Valor do aluguel
          </p>
        </div>
        <div
          class="flex items-center w-full px-2 space-x-2 text-gray-600 border border-gray-300 rounded-md focus:ring-0 focus-within:border-bertolt-primary"
        >
          <p
            class="font-extrabold"
          >
            R$
          </p>
          <input
            class="w-full border-0 focus:ring-0"
            type="number"
            v-model="localRentPrice"
            name="rentPrice"
            id="rentPrice"
            @keyup="setRentPrice()"
            :disabled="!localToRent"
          >
        </div>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormToRent',

  props: {
    toRent: {
      require: false,
      type: Boolean
    },
    rentPrice: {
      type: Number,
      require: false
    }
  },

  data () {
    return {
      localToRent: this.toRent,
      localRentPrice: this.rentPrice
    }
  },

  methods: {
    setRentPrice() {
      this.$emit('set-rent-price', this.localRentPrice)
    },
    removeRentOption () {
      this.$emit('delete-rent-options')
    }
  }
}
</script>
