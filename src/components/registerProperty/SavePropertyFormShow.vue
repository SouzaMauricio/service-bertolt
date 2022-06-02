<template>
  <div
    class="w-full p-4 space-y-2 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-create"></span>
      <p
        class="text-sm font-medium"
      >
      Esse já pode ser exibido no site?
      </p>
    </div>
    <div
      class="flex space-x-6"
    >
      <label
        for="showTrue"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localShow"
          name="showTrue"
          id="showTrue"
          :value="true"
          @change="updateProp()"
        >
        <p>
          Sim
        </p>
      </label>

      <label
        for="showFalse"
        class="flex items-center space-x-2"
      >
        <input
          class="border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary text-bertolt-primary"
          type="radio"
          v-model="localShow"
          name="showFalse"
          id="showFalse"
          :value="false"
          @change="updateProp()"
        >
        <p>
          Não
        </p>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SavePropertyFormShow',

  props: {
    show: {
      require: false,
      type: String
    }
  },

  data () {
    return {
      localShow: this.show
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localShow)
    }
  }
}
</script>
