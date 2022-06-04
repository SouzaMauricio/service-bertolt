<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="propertyArea"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Área do imóvel
          <small>(m²)</small>
        </p>
      </div>
      <input
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="number"
        v-model="localPropertyArea"
        name="propertyArea"
        id="propertyArea"
        @keyup="updateProp()"
      >
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormPropertyArea',

  props: {
    propertyArea: {
      require: false,
      type: Number
    }
  },

  data () {
    return {
      localPropertyArea: this.propertyArea
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localPropertyArea)
    }
  }
}
</script>
