<template>
  <div
    class="grid space-y-4 justify-items-stretch"
  >
    <p
      class="text-xl font-medium"
    >
      Cadastar Nova Propriedade
    </p>
    
    <SavePropertyFormTitle
      :title="property.title"
      @update-prop="updateProp('title', $event)"
    />
    <SavePropertyFormDescription
      :description="property.description"
      @update-prop="updateProp('description', $event)"
    />
    <SavePropertyFormType
      :type="property.type"
      @update-prop="updateProp('type', $event)"
    />
    <div
      class="flex space-x-10"
    >
      <SavePropertyFormToRent
        v-if="validateShowComponents('SavePropertyFormToRent')"
        :toRent="property.toRent"
        :rentPrice="property.price.rent"
        @set-rent-price="setRentPrice($event)"
        @delete-rent-options="deleteRentOptions()"
      />
      <SavePropertyFormToSell
        :toSell="property.toSell"
        :salePrice="property.price.sale"
        @set-sale-price="setSalePrice($event)"
        @delete-sale-options="deleteSaleOptions()"
      />
    </div>
    <div
      class="flex space-x-10"
    >
      <SavePropertyFormFloor
        v-if="validateShowComponents('SavePropertyFormFloor')"
        :floor="property.floor"
        @update-prop="updateProp('floor', $event)"
      />
      <SavePropertyFormPropertyArea
        :property-area="property.propertyArea"
        @update-prop="updateProp('propertyArea', $event)"
      />
      <SavePropertyFormLandArea
        v-if="validateShowComponents('SavePropertyFormLandArea')"
        :land-area="property.landArea"
        @update-prop="updateProp('landArea', $event)"
      />
      <SavePropertyFormShow
        :show="property.show"
        @update-prop="updateProp('show', $event)"
      />
    </div>
    <SavePropertyFormLocalization
      :localization="property.localization"
    />
    <SavePropertyFormEnvironments
      :environments="property.environments"
    />
    <SavePropertyFormRelease
      v-if="validateShowComponents('SavePropertyFormRelease')"
      :release="property.release"
    />
    <SavePropertyFormKeywords
      :keywords="property.keywords"
      @update-prop="updateProp('keywords', $event)"
    />
    <SavePropertyFormCondominium
      v-if="validateShowComponents('SavePropertyFormCondominium')"
      :condominium="property.condominium"
    />
    <SavePropertyFormNearby
      :nearby="property.nearby"
    />
    <div
      class="flex justify-end w-full space-x-4"
    >
      <button
        class="px-6 py-1 font-medium rounded-full hover:opacity-90 hover:bg-gray-200"
      >
        Cancelar
      </button>
      <button
        class="px-6 py-1 text-white rounded-full bg-bertolt-primary hover:opacity-90"
        @click="createOrUpdateProperty()"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
import SavePropertyFormTitle from './SavePropertyFormTitle'
import SavePropertyFormDescription from './SavePropertyFormDescription'
import SavePropertyFormType from './SavePropertyFormType'
import SavePropertyFormToRent from './SavePropertyFormToRent'
import SavePropertyFormToSell from './SavePropertyFormToSell'
import SavePropertyFormFloor from './SavePropertyFormFloor'
import SavePropertyFormPropertyArea from './SavePropertyFormPropertyArea'
import SavePropertyFormLandArea from './SavePropertyFormLandArea'
import SavePropertyFormShow from './SavePropertyFormShow'
import SavePropertyFormLocalization from './SavePropertyFormLocalization'
import SavePropertyFormEnvironments from './SavePropertyFormEnvironments'
import SavePropertyFormRelease from './SavePropertyFormRelease'
import SavePropertyFormKeywords from './SavePropertyFormKeywords'
import SavePropertyFormCondominium from './SavePropertyFormCondominium'
import SavePropertyFormNearby from './SavePropertyFormNearby'
import * as PropertyGateway from '../../gateway/armin/services/properties'

export default {
  name: 'SavePropertyForm',

  components: {
    SavePropertyFormTitle,
    SavePropertyFormDescription,
    SavePropertyFormType,
    SavePropertyFormToRent,
    SavePropertyFormToSell,
    SavePropertyFormFloor,
    SavePropertyFormPropertyArea,
    SavePropertyFormLandArea,
    SavePropertyFormShow,
    SavePropertyFormLocalization,
    SavePropertyFormEnvironments,
    SavePropertyFormRelease,
    SavePropertyFormKeywords,
    SavePropertyFormCondominium,
    SavePropertyFormNearby
  },

  data () {
    return {
      action: 'create',
      property: {
        title: '',
        description: '',
        type: 'APARTMENT',
        toRent: false,
        toSell: false,
        floor: null,
        propertyArea: null,
        landArea: null,
        show: true,
        localization: {},
        environments: {},
        release: {
          units: []
        },
        condominium: {
          price: null,
          name: '',
          facilities: []
        },
        price:{
          rent: null,
          sale: null
        },
        nearby: []
      }
    }
  },

  methods: {
    updateProp(prop, value) {
      this.property[prop] = value
    },

    deleteRentOptions () {
      this.property.toRent = false
      delete this.property.price.rent
    },

    setRentPrice (price) {
      this.property.toRent = true
      this.property.price.rent = price
    },

    deleteSaleOptions () {
      this.property.toRent = false
      delete this.property.price.sale
    },

    setSalePrice (price) {
      this.property.toSell = true
      this.property.price.sale = price
    },

    validateShowComponents (component) {
      const validComponentsByType = {
        'APARTMENT': ['SavePropertyFormToRent', 'SavePropertyFormFloor', 'SavePropertyFormCondominium'],
        'PRIVATE_HOUSE': ['SavePropertyFormToRent', 'SavePropertyFormLandArea'],
        'HOUSE_IN_CONDOMINIUM': ['SavePropertyFormToRent', 'SavePropertyFormLandArea', 'SavePropertyFormCondominium'],
        'RELEASE': ['SavePropertyFormRelease', 'SavePropertyFormCondominium']
      }
      return validComponentsByType[this.property.type].includes(component)
    },

    async createOrUpdateProperty () {
      const propertyCleaned = this.clearPropertyByType(JSON.parse(JSON.stringify(this.property)), this.property.type)
      const propertyToSave = this.formatPropertyToSave(propertyCleaned)
      if (this.action === 'create') await this.createProperty(propertyToSave)
      if (this.action === 'update') await this.updateProperty(propertyToSave)
    },

    formatPropertyToSave () {
      return this.property
    },

    async createProperty (property) {
      try {
        await PropertyGateway.create(property)
      } catch (error) {
        console.error('Error: ', error)
      }
    },

    clearPropertyByType (property, type) {
      if (type === 'APARTMENT') {
        delete property.release
        delete property.landArea
        delete property.views
        return
      }
      if (type === 'PRIVATE_HOUSE') {
        delete property.condominium
        delete property.floor
        delete property.landArea
        delete property.views
        return
      }
      if (type === 'HOUSE_IN_CONDOMINIUM') {
        delete property.release
        delete property.floor
        delete property.views
        return
      }
      if (type === 'RELEASE') {
        delete property.floor
        delete property.landArea
        delete property.views
        delete property.toRent
        return
      }
    }
  }
}
</script>
