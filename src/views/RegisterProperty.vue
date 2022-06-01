<template>
  <div
    class="flex w-full space-x-6"
  >
    <SavePropertyForm />
    <PropertyList
      class="w-2/5 mt-11"
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
