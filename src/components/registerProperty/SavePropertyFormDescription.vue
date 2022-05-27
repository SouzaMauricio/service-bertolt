<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="description"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-create"></span>
        <p
          class="text-sm font-medium"
        >
          Descrição
        </p>
      </div>
      <textarea
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="text"
        v-model="localDescription"
        name="description"
        id="description"
        @keyup="updateProp()"
        rows="4"
      />
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormDescription',

  props: {
    description: {
      require: false,
      type: String
    }
  },

  data () {
    return {
      localDescription: this.description
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localDescription)
    }
  }
}
</script>
