<template>
  <div
    class="relative block p-8 space-y-2 overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm whitespace-nowrap w-96"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r bg-bertolt-primary"
    ></span>

    <div class="justify-between sm:flex">
      <div
        class="w-3/4"
      >
        <p class="text-xl font-bold text-gray-900 line-clamp-1" title="{{ contact.fullName }}">
          {{ contact.fullName }}
        </p>
        <p class="mt-1 text-sm font-medium text-gray-600 line-clamp-1">
          Contato em: {{ getFormattedDate(contact.createdAt) }}
        </p>
      </div>

      <div class="flex-shrink-0 hidden ml-3 sm:block">
        <img
          class="object-cover w-20 h-20 rounded-lg shadow-sm"
          src="https://www.hyperui.dev/photos/man-5.jpeg"
          alt=""
        />
      </div>
    </div>
    <div
      class="space-y-4"
    >
      <div
        class="text-sm font-medium text-bertolt-text"
      >
        <p>
          Email: maw.sasa@asa.ciasn
        </p>
        <p>
          Contato: 11 45454-65556
        </p>
        <p>
          Preferencia de contato: WhatsApp
        </p>
      </div>
      <div
        class=""
      >
        <p
          class="text-sm font-medium text-bertolt-text line-clamp-1"
        >
          Propriedade: {{ contact.property.title }}
        </p>
        <a
          href=""
          class="text-sm font-bold underline text-bertolt-text"
        >
          Visualizar Propriedade
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ContactsListItem',
  
  props: {
    contact: {
      type: Object,
      require: true
    }
  },

  methods: {
    getFormattedDate (date) {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>
