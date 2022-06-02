<template>
  <div
    class="grid space-y-4 justify-items-stretch"
  >
    <p
      class="text-xl font-medium"
    >
      Interesses
    </p>

    <div
      class="flex flex-wrap items-center justify-around gap-6"
    >
      <ContactsListItem
        v-for="(contact, index) in contactsList"
        :key="index"
        :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import ContactsListItem from './ContactsListItem'
import { getContacts } from '../../gateway/armin/services/contacts'

export default {
  name: 'ContactsList',

  components: {
    ContactsListItem
  },

  data () {
    return {
      contactsList: []
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const params = 'populate=property'
      const properties = await getContacts(params)
      this.contactsList = properties.docs
    }
  }
}
</script>
