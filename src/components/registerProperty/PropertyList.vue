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
import { getProperties } from '../../gateway/armin/services/properties'

export default {
  name: 'PropertyList',

  components: {
    PropertyListItem
  },

  data () {
    return {
      propertiesList: []
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const properties = await getProperties()
      this.propertiesList = properties.docs
    }
  }
}
</script>
