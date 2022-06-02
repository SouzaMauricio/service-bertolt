<template>
  <div
    class="flex w-full space-x-6"
  >
    <SavePropertyForm
      class="w-4/6 xl:w-9/12"
    />
    <PropertyList
      class="flex flex-1 mt-11"
    />
  </div>
</template>

<script>
import SavePropertyForm from '../components/registerProperty/SavePropertyForm'
import PropertyList from '../components/registerProperty/PropertyList'

export default {
  name: 'RegisterProperty',

  components: {
    SavePropertyForm,
    PropertyList
  }
}
</script>
