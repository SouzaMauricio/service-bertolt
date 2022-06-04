<template>
  <div
    class="w-full p-4 space-y-2 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-house"></span>
      <p
        class="text-sm font-medium"
      >
        Condomínio
      </p>
    </div>
    <div
      class="flex w-full space-x-2"
    >
      <label
        for="condominium-name"
        class="w-full space-y-2"
      >
        <p
          class="space-x-2 text-sm font-medium text-bertolt-primary"
        >
          Nome
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          v-model="localCondominium.name"
          name="condominium-name"
          id="condominium-name"
          @keyup="updateProp()"
        >
      </label>
      <label
        for="condominium-price"
        class="space-y-2"
      >
        <div
          class="flex space-x-2 text-bertolt-primary"
        >
          <p
            class="text-sm font-medium"
          >
            Valor do condomínio
          </p>
        </div>
        <div
          class="flex items-center px-2 space-x-2 text-gray-600 border border-gray-300 rounded-md w-min focus:ring-0 focus-within:border-bertolt-primary"
        >
          <p
            class="font-extrabold"
          >
            R$
          </p>
          <input
            class="border-0 focus:ring-0"
            type="number"
            v-model="localCondominium.price"
            name="condominium-price"
            id="condominium-price"
          >
        </div>
      </label>
    </div>
    <div
      class="pt-2 mt-2 space-y-2 border-t"
    >
      <p
        class="text-sm font-medium text-bertolt-primary"
      >
        Instalações do condomínio
      </p>
      <div
        class="flex items-end space-x-4"
      >
        <label
          for="new-facility-title"
          class="space-y-2"
        >
          <p
            class="space-x-2 text-sm font-medium text-bertolt-primary"
          >
            Instalação
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newFacility.title"
            name="new-facility-title"
            id="new-facility-title"
          >
        </label>
        <div
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Ícone
          </p>
          <div
            class="flex justify-between w-20 p-2 border border-gray-300 rounded-md"
          >
            <span
              class="text-bertolt-primary"
              :class="newFacility.icon"
            >
            </span>
            <button>
              <span
                class="text-xl icon-keyboard_arrow_down text-bertolt-primary"
                @click.stop="showMenuListIcons = !showMenuListIcons"
              ></span>
            </button>
          </div>
        </div>
        <button
          class="p-3 rounded-full bg-bertolt-primary h-min disabled:opacity-75"
          :disabled="!newFacility.title || !newFacility.icon"
          @click="addNewFacility()"
        >
          <div
            class="flex space-x-2 text-sm font-medium text-white"
          >
            <p>
              Adicionar
            </p>
            <span>
              +
            </span>
          </div>
        </button>
        <div
          v-if="showMenuListIcons"
          class="relative"
        >
          <div
            class="absolute mt-2 overflow-auto bg-white rounded-md shadow-lg -right-10 w-96 ring-1 ring-black ring-opacity-5 h-80 -top-96"
          >
            <div
              class="flex flex-wrap gap-1 py-1"
              role="none"
            >
              <div
                v-for="(icon, index) in listIcons"
                :key="index"
                class="flex items-center justify-center p-1 rounded-full cursor-pointer hover:bg-gray-100"
                @click="changeNewFacilityIcon(icon)"
                :class="newFacility.icon === icon ? 'bg-bertolt-primary text-white hover:bg-bertolt-primary' : 'text-bertolt-primary h-7 w-7'"
              >
                <span :class="icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Instalações:
        </p>
        <div
          class="flex flex-wrap gap-2 text-bertolt-primary"
        >
          <div
            v-for="(facility, index) in localCondominium.facilities"
            :key="index"
            class="flex items-center p-1 space-x-2 border rounded-full border-bertolt-primary w-min whitespace-nowrap"
          >
            <span :class="facility.icon"></span>
            <p>
              {{ facility.facility }}
            </p>
            <button
              class="flex items-center p-1 text-white rounded-full bg-bertolt-primary"
              @click="removeFacility(index)"
            >
              <span class="text-xl icon-clear"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import iconsList from '../../assets/icons/icons.json'

export default {
  name: 'SavePropertyFormCondominium',

  props: {
    condominium: {
      type: Object,
      required: false
    }
  },

  data () {
    return {
      localCondominium: this.condominium,
      listIcons: [
        ...iconsList.icons
      ],
      newFacility: {
        title: '',
        icon: ''
      },
      showMenuListIcons: false
    }
  },

  mounted () {
    window.addEventListener('click', this.checkCloseMenu)
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localCondominium)
    },

    changeNewFacilityIcon (newIcon) {
      this.newFacility.icon = newIcon
      this.showMenuListIcons = false
    },

    checkCloseMenu () {
      if (this.showMenuListIcons) this.showMenuListIcons = false
    },

    addNewFacility() {
      if (!this.newFacility.title || !this.newFacility.icon) return
      this.localCondominium.facilities.push({
        facility: this.newFacility.title,
        icon: this.newFacility.icon
      })

      this.newFacility.title = ''
      this.newFacility.icon = ''
    },

    removeFacility (index) {
      this.localCondominium.facilities.splice(index, 1)
    }
  }
}
</script>
