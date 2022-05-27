<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="type"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Tipo da properiedade
        </p>
      </div>
      <select
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        v-model="localType"
        name="type"
        id="type"
        @change="updateProp()"
      >
        <option value="" selected disabled >Selecione</option>
        <option
          v-for="(validType, index) in validTypes"
          :key="index"
          :value="validType.value"
        >
          {{ validType.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormType',

  props: {
    type: {
      require: false,
      type: String
    }
  },

  data () {
    return {
      localType: this.type,
      validTypes: [
        {
          label: 'Apartamento',
          value: 'APARTMENT'
        },
        {
          label: 'Casa particular',
          value: 'PRIVATE_HOUSE'
        },
        {
          label: 'Casa em condominio',
          value: 'HOUSE_IN_CONDOMINIUM'
        },
        {
          label: 'Lançamento',
          value: 'RELEASE'
        }
      ]
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localType)
    }
  }
}
</script>
