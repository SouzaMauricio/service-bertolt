<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <label
      for="keywords"
      class="space-y-2"
    >
      <div
        class="flex space-x-2 text-bertolt-primary"
      >
        <span class="text-xl icon-house"></span>
        <p
          class="text-sm font-medium"
        >
          Palavras-chave para busca
        </p>
        <small>
          (coloque-as separadas por vírgula. Ex: centro,lazer)
        </small>
      </div>
      <input
        class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
        type="text"
        v-model="localKeywords"
        name="keywords"
        id="keywords"
        @keyup="updateProp()"
      >
    </label>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormKeywords',

  props: {
    keywords: {
      require: false,
      type: String
    }
  },

  data () {
    return {
      localKeywords: this.keywords
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localKeywords)
    }
  }
}
</script>
