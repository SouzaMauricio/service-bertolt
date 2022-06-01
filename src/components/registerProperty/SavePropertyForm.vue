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
        :floor="property.floor"
        @update-prop="updateProp('floor', $event)"
      />
      <SavePropertyFormPropertyArea
        :property-area="property.propertyArea"
        @update-prop="updateProp('propertyArea', $event)"
      />
      <SavePropertyFormLandArea
        :land-area="property.landArea"
        @update-prop="updateProp('landArea', $event)"
      />
    </div>
    <SavePropertyFormLocalization
      :localization="property.localization"
    />
    <SavePropertyFormEnvironments
      :environments="property.environments"
    />
    <SavePropertyFormRelease
      :release="property.release"
    />
    <SavePropertyFormKeywords
      :keywords="property.keywords"
      @update-prop="updateProp('keywords', $event)"
    />
    <SavePropertyFormCondominium
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
import SavePropertyFormLocalization from './SavePropertyFormLocalization'
import SavePropertyFormEnvironments from './SavePropertyFormEnvironments'
import SavePropertyFormRelease from './SavePropertyFormRelease'
import SavePropertyFormKeywords from './SavePropertyFormKeywords'
import SavePropertyFormCondominium from './SavePropertyFormCondominium'
import SavePropertyFormNearby from './SavePropertyFormNearby'

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
    SavePropertyFormLocalization,
    SavePropertyFormEnvironments,
    SavePropertyFormRelease,
    SavePropertyFormKeywords,
    SavePropertyFormCondominium,
    SavePropertyFormNearby
  },

  data () {
    return {
      property: {
        title: '',
        description: '',
        type: '',
        toRent: false,
        toSell: false,
        floor: null,
        propertyArea: null,
        landArea: null,
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
    }
  }
}
</script>
