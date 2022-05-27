<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="floor"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Andar
        </p>
        <small
          class="text-gray-600"
        >
          (opicional)
        </small>
      </div>
      <input
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="number"
        v-model="localFloor"
        name="floor"
        id="floor"
        @keyup="updateProp()"
      >
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormFloor',

  props: {
    floor: {
      require: false,
      type: Number
    }
  },

  data () {
    return {
      localFloor: this.floor
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localFloor)
    }
  }
}
</script>
