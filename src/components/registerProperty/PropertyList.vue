<template>
  <div
    class="w-full p-4 space-y-2 bg-white border border-gray-200 rounded-md shadow-sm h-min"
  >
    <div
      class="w-full"
    >
      <div
        v-if="!loading && propertiesList[0]"
        class="w-full divide-y"
      >
        <PropertyListItem
          v-for="(property, index) in propertiesList"
          :key="index"
          :property="property"
          @update-show-property="updateShowProperty($event)"
        />
      </div>

      <div
        v-if="!loading && !propertiesList[0]"
        class="flex items-center justify-center w-full"
      >
        <p
          class="text-sm italic text-gray-500"
        >
          Nenhuma propriedade encontrada :/
        </p> 
      </div>
      <LoadingSpin
        v-if="loading"
        py="py-1"
      />
    </div>
    <SnackBar
      :show="snackBar.show"
      :message="snackBar.message"
      @closed="snackBar.show = false"
    />
  </div>
</template>

<script>
import PropertyListItem from './PropertyListItem'
import SnackBar from '../commons/SnackBar'
import LoadingSpin from '../commons/LoadingSpin'
import { getProperties, update } from '../../gateway/armin/services/properties'

export default {
  name: 'PropertyList',

  components: {
    PropertyListItem,
    SnackBar,
    LoadingSpin
  },

  data () {
    return {
      propertiesList: [],
      snackBar: {
        show: false,
        message: ''
      },
      loading: false
    }
  },

  mounted () {
    this.init()
    this.emitter.on('reload-property-list', this.init)
  },

  methods: {
    async init () {
      try {
        this.loading = true
        this.propertiesList = []
        const properties = await getProperties('select=_id,pictures,title,show,cod,type')
        this.propertiesList = properties.docs
      } catch (error) {
        this.snackBar.message = (error.response ? error.response.message : error.message) || 'Erro inesperado, tente novamente'
        this.snackBar.show = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    async updateShowProperty (data) {
      await update({ show: data.show }, data.cod)
      await this.init()
    }
  }
}
</script>
