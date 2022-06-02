<template>
  <div
    class="w-full"
  >
    <ContactsList />
  </div>
</template>

<script>
import ContactsList from '../components/contacts/ContactsList'

export default {
  name: 'ContactsScreen',

  components: {
    ContactsList
  }
}
</script>
