<template>
  <div
    class="w-full p-4 space-y-4 bg-white border border-gray-200 rounded-md shadow-sm"
  >
    <div
      class="flex space-x-2 text-bertolt-primary"
    >
      <span class="text-xl icon-house"></span>
      <p
        class="text-sm font-medium"
      >
        Escolha as imagens
      </p>
    </div>
    <div
      class="flex flex-wrap gap-4"
    >
      <div
        v-for="(picture, index) in localPictures"
        :key="index"
        class="flex"
      >
        <img
          class="object-cover w-32 h-32 rounded-md"
          :src="picture.image"
          alt=""
        >
        <button
          class="flex items-center text-white rounded-full p-0.5 bg-bertolt-primary h-min -left-2 -top-2 relative"
          @click="removePicture(index)"
        >
          <span class="text-xl icon-clear"></span>
        </button>
      </div>

      <div>
        <label
            class="flex justify-center w-32 h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <small class="text-blue-600 underline">browse</small>
            </span>
            <input type="file" @input="onFileChange" name="file_upload" class="hidden" multiple>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavePropertyFormPictures',

  props: {
    pictures: {
      require: false,
      type: Array
    }
  },

  data () {
    return {
      localPictures: this.pictures
    }
  },

  methods: {
    updateProp() {
      this.$emit('update-prop', this.localPictures)
    },

    removePicture (index) {
      this.localPictures.splice(index, 1)
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return
      for (let file of files) {
        this.createImage(file)
      }
    },

    createImage(file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.localPictures.push({
          file: file,
          image: e.target.result,
          fileName: file.name
        })
      };
      reader.readAsDataURL(file)
    }
  }
}
</script>
