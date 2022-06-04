<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="landArea"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Área total da propriedade
          <small>(m²)</small>
        </p>
      </div>
      <input
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="number"
        v-model="localLandArea"
        name="landArea"
        id="landArea"
        @keyup="updateProp()"
      >
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormLandArea',

  props: {
    landArea: {
      require: false,
      type: Number
    }
  },

  data () {
    return {
      localLandArea: this.landArea
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localLandArea)
    }
  }
}
</script>
