<template>
  <div
    class="w-full p-4 space-y-2 bg-white border border-gray-200 rounded-md shadow-sm h-min"
  >
    <div
      class="w-full divide-y"
    >
      <PropertyListItem
        v-for="(property, index) in propertiesList"
        :key="index"
        :property="property"
      />
    </div>
  </div>
</template>

<script>

import PropertyListItem from './PropertyListItem'

export default {
  name: 'PropertyList',

  components: {
    PropertyListItem
  },

  data () {
    return {
      propertiesList: [
        {
          pictures: [{
            fullPath: 'https://picsum.photos/300/300'
          }],
          title: 'Acqua Park Barueri',
          keywords: ['Barueri', 'São Paulo', 'Lançamento']
        },
        {
          pictures: [{
            fullPath: 'https://picsum.photos/300/300'
          }],
          title: 'Acqua Park Barueri',
          keywords: ['Barueri', 'São Paulo', 'Lançamento']
        }
      ]
    }
  },

  methods: {
  }
}
</script>
