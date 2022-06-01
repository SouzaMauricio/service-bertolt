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
        Lançameto
      </p>
    </div>
    <div
      class="flex space-x-2"
    >
      <label
        for="state"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Status
        </p>
        <select
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          name="state"
          id="state"
          v-model="localRelease.state"
        >
          <option
            v-for="(state, index) in stateList"
            :key="index"
            :value="state.value"
          >
            {{ state.label }}
          </option>
        </select>
      </label>
      <label
        for="expectedDate"
        class="w-1/4 space-y-2"
      >
        <p
          class="text-sm font-medium text-bertolt-primary"
        >
          Data experada de lançamento
        </p>
        <input
          class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="date"
          v-model="localRelease.expectedDate"
          name="expectedDate"
          id="expectedDate"
        >
      </label>
    </div>

    <div
      class="space-y-2 border-t"
    >
      <p
        class="mt-2 text-sm font-medium text-bertolt-primary"
      >
        Unidades
      </p>
      <div
        class="flex p-2 space-x-4 border rounded-md text-md text-bertolt-primary"
        v-for="(unit, index) in localRelease.units"
        :key="index"
      >
        <div>
          <img
            class="w-24 h-24 rounded-md"
            src="../../assets/main/image.png"
            alt=""
          >
        </div>
        <div
          class="w-full"
        >
          <div
            class="space-y-2"
          >
            <div
              class="flex justify-between"
            >
              <p>
                Titulo: {{ unit.title }}
              </p>
              <button
                class="p-1 rounded-full hover:bg-gray-200"
                @click="removeUnit(index)"
              >
                <span class="text-xl icon-clear"></span>
              </button>
            </div>
            <div
              class="flex space-x-4"
            >
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-hotel"></span>
                <p>
                  Quartos: {{ unit.bedroom }}
                </p>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-house"></span>
                <p>
                  Banheiros: {{ unit.bathrooms }}
                </p>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-bathtub "></span>
                <p>
                  Suítes: {{ unit.suites }}
                </p>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-restaurant"></span>
                <p>
                  Cozinhas: {{ unit.kitchen }}
                </p>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-weekend"></span>
                <p>
                  Salas: {{ unit.livingroom }}
                </p>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <span class="text-xl icon-drive_eta"></span>
                <p>
                  Vagas: {{ unit.garages }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="space-y-2 border-t"
    >
      <p
        class="mt-2 text-sm font-medium text-bertolt-primary"
      >
        Adicionar nova unidade
      </p>

      <div>
        <label
          for="release-title"
          class="w-full space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Título
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.title"
            name="release-title"
            id="release-title"
          >
        </label>
      </div>
      <div
        class="flex space-x-2"
      >
        <label
          for="release-bedroom"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Quartos
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.bedroom"
            name="release-bedroom"
            id="release-bedroom"
          >
        </label>
        <label
          for="release-bathrooms"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Banheiros
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.bathrooms"
            name="release-bathrooms"
            id="release-bathrooms"
          >
        </label>
        <label
          for="suites"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Suítes
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.suites"
            name="release-suites"
            id="release-suites"
          >
        </label>
        <label
          for="release-kitchen"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Cozinhas
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.kitchen"
            name="release-kitchen"
            id="release-kitchen"
          >
        </label>
        <label
          for="release-garages"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Vagas
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.garages"
            name="release-garages"
            id="release-garages"
          >
        </label>
        <label
          for="release-livingroom"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Salas
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.livingroom"
            name="release-livingroom"
            id="release-livingroom"
          >
        </label>
        <label
          for="release-balcony"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Varanda
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="text"
            v-model="newUnit.balcony"
            name="release-balcony"
            id="release-balcony"
          >
        </label>
      </div>

      <div>
        <button
          class="p-2 rounded-full bg-bertolt-primary"
          @click="addNewUnit()"
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
</template>

<script>
export default {
  name: 'SavePropertyFormRelease',

  props: {
    release: {
      require: false,
      type: Object
    }
  },

  data () {
    return {
      localRelease: this.release,
      stateList: [
        {
          label: 'Não iniciada',
          value: 'NOT_STARTED'
        },
        {
          label: 'Iniciada',
          value: 'STARTED'
        },
        {
          label: 'Pausada',
          value: 'PAUSED'
        },
        {
          label: 'Finalizada',
          value: 'FINISHED'
        }
      ],
      newUnit: {
        title: '',
        bedroom: '',
        balcony: '',
        livingroom: '',
        garages: '',
        suites: '',
        bathrooms: '',
        images: ''
      }
    }
  },

  methods: {
    addNewUnit () {
      this.localRelease.units.push({ ...this.newUnit })
      this.newUnit.title = ''
      this.newUnit.bedroom = ''
      this.newUnit.balcony = ''
      this.newUnit.livingroom = ''
      this.newUnit.garages = ''
      this.newUnit.suites = ''
      this.newUnit.bathrooms = ''
      this.newUnit.images = ''
    },

    removeUnit (index) {
      this.localRelease.units.splice(index, 1)
    }
  }
}
</script>
