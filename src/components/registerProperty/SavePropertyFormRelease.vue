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
            class="object-cover w-24 h-24 rounded-md"
            :src="unit.image"
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
                class="flex items-center p-1 rounded-full hover:bg-gray-200"
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
                <span class="text-lg icon-shower"></span>
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

      <div
        class="flex items-end space-x-2"
      >
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
        class="flex items-end space-x-2"
      >
        <div
          v-if="!newUnit.imageName"
          class="max-w-xl"
        >
          <label
              class="flex justify-center w-full h-10 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span class="text-xs font-medium text-gray-600 whitespace-nowrap">
                      Imagem
                      <span class="text-blue-600 underline">browse</span>
                  </span>
              </span>
              <input type="file" @input="onFileChange" name="file_upload" class="hidden">
          </label>
        </div>
        <div
          v-else
          class="flex"
        >
          <img
            class="object-cover w-40 h-16 rounded-md"
            :src="newUnit.image"
            alt=""
          >
          <button
            class="flex items-center text-white rounded-full p-0.5 bg-bertolt-primary h-min -left-2 -top-2 relative"
            @click="newUnit.imageName = ''"
          >
            <span class="text-xl icon-clear"></span>
          </button>
        </div>
        <label
          for="release-area"
          class="space-y-2"
        >
          <p
            class="text-sm font-medium text-bertolt-primary"
          >
            Área <small>(m²)</small>
          </p>
          <input
            class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
            type="number"
            v-model="newUnit.area"
            name="release-area"
            id="release-area"
          >
        </label>
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
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
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
            type="number"
            v-model="newUnit.balcony"
            name="release-balcony"
            id="release-balcony"
          >
        </label>
      </div>

      <div>
        <button
          class="p-2 rounded-full bg-bertolt-primary disabled:opacity-75"
          :disabled="!newUnit.imageName || !newUnit.balcony || !newUnit.livingroom || !newUnit.garages || !newUnit.kitchen || !newUnit.suites || !newUnit.bathrooms || !newUnit.bedroom"
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
        area: null,
        title: '',
        bedroom: '',
        balcony: '',
        livingroom: '',
        garages: '',
        suites: '',
        bathrooms: '',
        image: new Image(),
        imageName: ''
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
      this.newUnit.image = new Image()
      this.newUnit.imageName = ''
    },

    removeUnit (index) {
      this.localRelease.units.splice(index, 1)
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0], e);
    },

    createImage(file, e) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.newUnit.image = e.target.result;
      };
      reader.readAsDataURL(file)
      this.newUnit.imageName = e.target.files[0].name;
    }
  }
}
</script>
