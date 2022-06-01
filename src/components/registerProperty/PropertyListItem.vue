<template>
  <div
    class="flex w-full py-2 space-x-2 text-bertolt-text"
  >
    <img
      :src="property.pictures[0].fullPath"
      class="w-20 h-20 rounded-md"
      alt=""
    >
    <div
      class="w-full"
    >
      <p
        class="line-clamp-1"
      >
        {{ property.title }}
      </p>
      <p
        class="text-sm line-clamp-1"
      >
        {{ property.keywords.join(', ') }}
      </p>
      <div
        class="flex items-center justify-end w-full space-x-4"
      >
        <button
          class="flex items-center p-1 rounded-full hover:bg-gray-200"
        >
          <span
            class="text-xl icon-create text-bertolt-text"
          ></span>
        </button>
        <button
          class="flex items-center p-1 rounded-full hover:bg-gray-200"
        >
          <span
            class="text-xl icon-eye text-bertolt-text"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyListItem',

  props: {
    property: {
      require: true,
      type: Object
    }
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>
