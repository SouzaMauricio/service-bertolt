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
        O que há nas proximidades
      </p>
    </div>


    <div
      class="pt-2 mt-2 space-y-2"
    >
      <div
        class="flex items-center space-x-4"
      >
        <label
          for="new-nearby-title"
          class="space-y-2"
        >
          <p
            class="space-x-2 text-sm font-medium text-bertolt-primary"
          >
            Título
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newNearby.title"
            name="new-nearby-title"
            id="new-nearby-title"
          >
        </label>
        <label
          for="new-nearby-distance"
          class="space-y-2"
        >
          <p
            class="space-x-2 text-sm font-medium text-bertolt-primary"
          >
            Distância
            <small>(metros)</small>
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="number"
            v-model="newNearby.distance"
            name="new-nearby-distance"
            id="new-nearby-distance"
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
              :class="newNearby.icon"
            >
            </span>
            <button>
              <span
                class="text-xl icon-keyboard_arrow_down text-bertolt-primary"
                @click.stop="showMenuListIconsNearby = !showMenuListIconsNearby"
              ></span>
            </button>
          </div>
        </div>
        <div
          v-if="showMenuListIconsNearby"
          class="relative"
        >
          <div
            class="absolute mt-2 overflow-auto bg-white rounded-md shadow-lg -right-40 w-96 ring-1 ring-black ring-opacity-5 h-80 -top-96"
          >
            <div
              class="flex flex-wrap gap-1 py-1"
              role="none"
            >
              <div
                v-for="(icon, index) in listIcons"
                :key="index"
                class="p-1 rounded-full cursor-pointer hover:bg-gray-100"
                @click="changeNewNearbyIcon(icon)"
                :class="newNearby.icon === icon ? 'bg-bertolt-primary text-white hover:bg-bertolt-primary' : 'text-bertolt-primary h-7 w-7'"
              >
                <span :class="icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ml-20"
        >
          <button
            class="p-2 rounded-full bg-bertolt-primary h-min disabled:opacity-75"
            :disabled="!newNearby.title || !newNearby.icon || !newNearby.distance"
            @click="addNewNearby()"
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
        </div>
      </div>
    </div>

    <div
      class="space-y-2"
    >
      <p
        class="text-sm font-medium text-bertolt-primary"
      >
        O que há:
      </p>
      <div
        class="flex flex-wrap gap-2 text-bertolt-primary"
      >
        <div
          v-for="(nearby, index) in localNearby"
          :key="index"
          class="flex items-center p-1 space-x-2 border rounded-full border-bertolt-primary w-min whitespace-nowrap"
        >
          <span :class="nearby.icon"></span>
          <p>
            {{ nearby.title }}
          </p>
          <p>
            {{ nearby.distance }}m
          </p>
          <button
            class="flex items-center p-1 text-white rounded-full bg-bertolt-primary"
            @click="removeNearby(index)"
          >
            <span class="text-xl icon-clear"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import iconsList from '../../assets/icons/icons.json'

export default {
  name: 'SavePropertyFormNearby',

  props: {
    nearby: {
      type: Array,
      required: false
    }
  },

  data () {
    return {
      localNearby: this.nearby,
      listIcons: [
        ...iconsList.icons
      ],
      newNearby: {
        title: '',
        icon: '',
        distance: null
      },
      showMenuListIconsNearby: false
    }
  },

  mounted () {
    window.addEventListener('click', this.checkCloseMenu)
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localNearby)
    },

    changeNewNearbyIcon (newIcon) {
      this.newNearby.icon = newIcon
      this.showMenuListIconsNearby = false
    },

    checkCloseMenu () {
      if (this.showMenuListIconsNearby) this.showMenuListIconsNearby = false
    },

    addNewNearby() {
      if (!this.newNearby.title || !this.newNearby.icon) return
      this.localNearby.push({
        title: this.newNearby.title,
        icon: this.newNearby.icon,
        distance: parseInt(this.newNearby.distance)
      })

      this.newNearby.title = ''
      this.newNearby.icon = ''
      this.newNearby.distance = null
    },

    removeNearby (index) {
      this.localNearby.splice(index, 1)
    }
  }
}
</script>