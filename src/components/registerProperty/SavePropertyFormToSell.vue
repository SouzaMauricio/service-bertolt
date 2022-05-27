<template>
  <div
    class="w-full p-4 space-y-4 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-house"></span>
      <p>
        Venda
      </p>
    </div>
    <p>
      Esse imóvel está disponível para vender?
    </p>
    <div
      class="flex space-x-6"
    >
      <label
        for="toSellTrue"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localToSell"
          name="toSellTrue"
          id="toSellTrue"
          :value="true"
          @change="setSalePrice()"
        >
        <p>
          Sim
        </p>
      </label>

      <label
        for="toSellFalse"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localToSell"
          name="toSellFalse"
          id="toSellFalse"
          :value="false"
          @change="removeSaleOption()"
        >
        <p>
          Não
        </p>
      </label>
    </div>

    <div>
      <label
        for="sellPrice"
        class="space-y-2"
      >
        <div
          class="flex space-x-2 text-bertolt-primary"
        >
          <p
            class="text-sm font-medium"
          >
            Valor de venda
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
            v-model="localSalePrice"
            name="sellPrice"
            id="sellPrice"
            @keyup="setSalePrice()"
            :disabled="!localToSell"
          >
        </div>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormToSell',

  props: {
    toSell: {
      require: false,
      type: Boolean
    },
    salePrice: {
      type: Number,
      require: false
    }
  },

  data () {
    return {
      localToSell: this.toSell,
      localSalePrice: this.salePrice
    }
  },

  methods: {
    setSalePrice() {
      this.$emit('set-sale-price', this.localSalePrice)
    },
    removeSaleOption () {
      this.$emit('delete-sale-options')
    }
  }
}
</script>
