<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="title"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Título
        </p>
      </div>
      <input
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="text"
        v-model="localTitle"
        name="title"
        id="title"
        @keyup="updateProp()"
      >
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormTitle',

  props: {
    title: {
      require: false,
      type: String
    }
  },

  data () {
    return {
      localTitle: this.title
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localTitle)
    }
  }
}
</script>
