<template>
  <div
    class="grid mb-40 space-y-4 justify-items-stretch"
  >
    <p
      class="text-xl font-medium"
    >
      Cadastar Nova Propriedade
    </p>
    
    <SavePropertyFormTitle
      :title="property.title"
      :key="keyList.savePropertyFormTitleKey"
      @update-prop="updateProp('title', $event)"
    />
    <SavePropertyFormDescription
      :description="property.description"
      :key="keyList.savePropertyFormDescriptionKey"
      @update-prop="updateProp('description', $event)"
    />
    <SavePropertyFormType
      :type="property.type"
      :key="keyList.savePropertyFormTypeKey"
      @update-prop="updateProp('type', $event)"
    />
    <div
      class="flex space-x-10"
    >
      <SavePropertyFormToRent
        v-if="validateShowComponents('SavePropertyFormToRent')"
        :toRent="property.toRent"
        :rentPrice="property.price.rent"
        :key="keyList.savePropertyFormToRentKey"
        @set-rent-price="setRentPrice($event)"
        @delete-rent-options="deleteRentOptions()"
      />
      <SavePropertyFormToSell
        :toSell="property.toSell"
        :salePrice="property.price.sale"
        :key="keyList.savePropertyFormToSellKey"
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
        :key="keyList.savePropertyFormFloorKey"
        @update-prop="updateProp('floor', $event)"
      />
      <SavePropertyFormPropertyArea
        :property-area="property.propertyArea"
        :key="keyList.savePropertyFormPropertyAreaKey"
        @update-prop="updateProp('propertyArea', $event)"
      />
      <SavePropertyFormLandArea
        v-if="validateShowComponents('SavePropertyFormLandArea')"
        :land-area="property.landArea"
        :key="keyList.savePropertyFormLandAreaKey"
        @update-prop="updateProp('landArea', $event)"
      />
      <SavePropertyFormShow
        :show="property.show"
        :key="keyList.savePropertyFormShowKey"
        @update-prop="updateProp('show', $event)"
      />
    </div>
    <SavePropertyFormLocalization
      :localization="property.localization"
      :key="keyList.savePropertyFormLocalizationKey"
    />
    <SavePropertyFormEnvironments
      :environments="property.environments"
      :key="keyList.savePropertyFormEnvironmentsKey"
    />
    <SavePropertyFormRelease
      v-if="validateShowComponents('SavePropertyFormRelease')"
      :release="property.release"
      :key="keyList.savePropertyFormReleaseKey"
    />
    <SavePropertyFormKeywords
      :keywords="property.keywords"
      :key="keyList.savePropertyFormKeywordsKey"
      @update-prop="updateProp('keywords', $event)"
    />
    <SavePropertyFormCondominium
      v-if="validateShowComponents('SavePropertyFormCondominium')"
      :condominium="property.condominium"
      :key="keyList.savePropertyFormCondominiumKey"
    />
    <SavePropertyFormNearby
      :nearby="property.nearby"
      :key="keyList.savePropertyFormNearbyKey"
    />
    <SavePropertyFormPictures
      :pictures="pictures"
      :key="keyList.savePropertyFormPicturesKey"
      @update-prop="pictures= $event"
    />

    <SnackBar
      :show="snackBar.show"
      :message="snackBar.message"
      @closed="snackBar.show = false"
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
        class="flex items-center justify-center w-24 py-1 text-white rounded-full bg-bertolt-primary hover:opacity-90 disabled:opacity-75"
        :disabled="loading"
        @click="createOrUpdateProperty()"
      >
        <span
          v-if="loading"
          class="w-6 h-6 text-2xl text-white animate-spin icon-spinner10"
        >
        </span>
        <span
          v-else
        >
          Salvar
        </span>
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
import SavePropertyFormPictures from './SavePropertyFormPictures'
import SnackBar from '../commons/SnackBar'
import * as PropertyGateway from '../../gateway/armin/services/properties'
import * as UploadGateway from '../../gateway/armin/services/uploads'

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
    SavePropertyFormNearby,
    SavePropertyFormPictures,
    SnackBar
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
        keywords: '',
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
      },
      pictures: [],
      loading: false,
      snackBar: {
        show: false,
        message: ''
      },
      keyList: {
        savePropertyFormTitleKey: 'savePropertyFormTitleKey-0',
        savePropertyFormDescriptionKey: 'savePropertyFormDescriptionKey-0',
        savePropertyFormTypeKey: 'savePropertyFormTypeKey-0',
        savePropertyFormToRentKey: 'savePropertyFormToRentKey-0',
        savePropertyFormToSellKey: 'savePropertyFormToSellKey-0',
        savePropertyFormFloorKey: 'savePropertyFormFloorKey-0',
        savePropertyFormPropertyAreaKey: 'savePropertyFormPropertyAreaKey-0',
        savePropertyFormLandAreaKey: 'savePropertyFormLandAreaKey-0',
        savePropertyFormShowKey: 'savePropertyFormShowKey-0',
        savePropertyFormLocalizationKey: 'savePropertyFormLocalizationKey-0',
        savePropertyFormEnvironmentsKey: 'savePropertyFormEnvironmentsKey-0',
        savePropertyFormReleaseKey: 'savePropertyFormReleaseKey-0',
        savePropertyFormKeywordsKey: 'savePropertyFormKeywordsKey-0',
        savePropertyFormCondominiumKey: 'savePropertyFormCondominiumKey-0',
        savePropertyFormNearbyKey: 'savePropertyFormNearbyKey-0',
        savePropertyFormPicturesKey: 'savePropertyFormPicturesKey-0',
      }
    }
  },

  mounted () {
    this.emitter.on('edit-property', this.setPropertyToUpdate)
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
      const propertyCleaned = this.clearPropertyByType(JSON.parse(JSON.stringify({ ...this.property })), this.property.type)
      const isValidToSave = this.checkFields(propertyCleaned, propertyCleaned.type)
      if (!isValidToSave) return
      this.formatPropertyToSave(propertyCleaned, propertyCleaned.type)
      if (this.action === 'create') await this.createProperty(propertyCleaned)
      if (this.action === 'update') await this.updateProperty(propertyCleaned)
    },

    checkFields (property, type) {
      if (!this.pictures[0]) {
        this.snackBar.message = 'Selecione ao menos uma foto para a propriedade!'
        this.snackBar.show = true
        return false
      }
      const requiredGeneralFields = [
        'title',
        'description',
        'propertyArea',
        'keywords'
      ]
      for (const field of requiredGeneralFields) {
        if (property[field]) continue
        return this.invalidProperty(`Preencha o campo: ${field}`)
      }
      if (
        !property.localization.street || 
        !property.localization.number || 
        !property.localization.neighborhood || 
        !property.localization.city || 
        !property.localization.state || 
        !property.localization.zipcode
      ) return this.invalidProperty('Preencha o endereço corretamente!')
      if (
        !property.environments.bedroom || 
        !property.environments.bathrooms
      ) return this.invalidProperty('Preencha os ambientes corretamente!')
      if (type === 'APARTMENT' || type === 'RELEASE' || type === 'HOUSE_IN_CONDOMINIUM') {
        if (
          !property.condominium.name || 
          !property.condominium.price
        ) return this.invalidProperty('Preencha o condomínio corretamente!')
      }
      if (type === 'RELEASE') {
        if (
          !property.release.stage || 
          !property.release.expectedDate
        ) return this.invalidProperty('Preencha o lançamento corretamente!')
      }
      if(property.toRent && !property.price.rent) return this.invalidProperty('Informe o preço do aluguel!')
      if(property.toSell && !property.price.sale) return this.invalidProperty('Informe o preço de venda!')
      return true
    },

    invalidProperty (message) {
      this.snackBar.message = message
      this.snackBar.show = true
      return false
    },

    formatPropertyToSave (property, type) {
      property.keywords = property.keywords.toLowerCase().split(',')
      for (let environment in property.environments) {
        environment = environment.split(',')
      }

      if (type === 'RELEASE') {
        for (const unit of property.release.units) {
          for (let prop in unit) {
            if (!Array.isArray(prop)) continue
            prop = prop.split(',')
          }
        }
      }
    },

    async createProperty (property) {
      try {
        this.loading = true
        const propertyCreated = await PropertyGateway.create(property)
        await this.savePictures(propertyCreated.id)
      } catch (error) {
        this.snackBar.message = (error.response ? error.response.message : error.message) || 'Erro inesperado, tente novamente'
        this.snackBar.show = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    async savePictures (propertyId) {
      await Promise.all(
        this.pictures.map(picture => {
          const form = new FormData()
          form.append('image', picture.file)
          form.append('fileName', picture.fileName)
          form.append('fileType', picture.fileName.split('.').pop())
          form.append('propertyId', propertyId)
          return UploadGateway.create(form)
        })
      )
    },

    clearPropertyByType (property, type) {
      if (type === 'APARTMENT') {
        delete property.release
        delete property.landArea
        delete property.views
        return property
      }
      if (type === 'PRIVATE_HOUSE') {
        delete property.condominium
        delete property.floor
        delete property.landArea
        delete property.views
        return property
      }
      if (type === 'HOUSE_IN_CONDOMINIUM') {
        delete property.release
        delete property.floor
        delete property.views
        return property
      }
      if (type === 'RELEASE') {
        delete property.floor
        delete property.landArea
        delete property.views
        delete property.toRent
        return property
      }
    },

    async setPropertyToUpdate (propertyCod) {
      this.property = await PropertyGateway.getOneByCod(propertyCod, '')
      this.rerenderComponents()
    },

    rerenderComponents () {
      for (let key in this.keyList) {
        this.keyList[key] = this.incrementKey(key)
      }
    },

    incrementKey (key) {
      const splitted = key.split('-')
      splitted[splitted.length - 1]++
      const result = splitted.join('-')
      return result
    }
  }
}
</script>
