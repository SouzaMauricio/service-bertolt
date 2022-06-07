<template>
  <div
    class="grid space-y-4 justify-items-stretch"
  >
    <p
      class="text-xl font-medium"
    >
      Fale Conosco
    </p>

    <div
      class="w-full bg-white border rounded-md shadow-sm bg-gray"
    >
      <div
        class="flex items-center justify-between p-4 space-x-2 bg-gray-100"
      >
        <input
          class="w-full h-8 text-gray-600 border border-gray-300 rounded-md focus:ring-0 focus:border-bertolt-primary"
          type="text"
          name="rentPrice"
          id="rentPrice"
          v-model="search.fullName"
          placeholder="Busque pelo nome"
        >

        <v-select
          class="w-full bg-white text-bertolt-primary"
          :options="typeList"
          label="label"
          placeholder="Selecione o tipo de contato"
          v-model="search.type"
          :reduce="(option) => option.value"
        />
        <button
          class="flex items-center justify-between px-2 py-1 space-x-2 text-white rounded-md bg-bertolt-primary"
          @click="doSearch()"
        >
          <p>
            Buscar
          </p>
          <span class="text-xl icon-search"></span>
        </button>
      </div>

      <div
        class="pb-4 pl-4 bg-gray-100"
      >
        <p
          class="text-xl font-semibold text-bertolt-text"
        >
          Resultados:
        </p>
      </div>

      <table
        class="w-full table-auto"
      >
        <thead
          class="bg-bertolt-primary text-bertolt-text-second whitespace-nowrap"
        >
          <tr
            class=""
          >
            <th
              class="p-2"
            >
            </th>
            <th
              class="p-2"
            >
              Nome
            </th>
            <th
              class="p-2"
            >
              Email
            </th>
            <th
              class="p-2"
            >
              Contato
            </th>
            <th
              class="p-2"
            >
              Preferencia de contato
            </th>
            <th
              class="p-2"
            >
              Contato em
            </th>
            <th
              class="p-2"
            >
              Motivo do contato
            </th>
            <th
              class="p-2"
            >
              Mensagem
            </th>
            <th
              class="p-2"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody
          class="divide-y"
        >
          <tr
            v-for="(contact, index) in contactUsList"
            :key="index"
          >
            <td
              class="p-2"  
            >
              <div
                class="flex items-center space-x-2"
              >
                <div
                  class="flex items-center justify-center w-10 h-10 text-white bg-gray-500 rounded-full"
                >
                  <span
                    class="p-2 text-2xl"
                    :class="getIconByType(contact.type)"
                  ></span>
                </div>
              </div>
            </td>
            <td
              class="p-2"
            >
              {{ contact.fullName }}
            </td>
            <td
              class="p-2"
            >
              {{ contact.email }}
            </td>
            <td
              class="p-2"
            >
              {{ contact.contact }}
            </td>
            <td
              class="p-2"
            >
              {{ contact.meanOfContact }}
            </td>
            <td
              class="p-2"
            >
              {{ getFormattedDate(contact.createdAt) }}
            </td>
            <td
              class="p-2"
            >
              {{ getLabelCOntactType(contact.type) }}
            </td>
            <td
              class="w-5/12 p-2"
            >
              <div
                class="flex items-end justify-between p-1 space-x-2 bg-gray-100 border rounded-md"
              >
                <div
                  :ref="contact._id"
                  class="line-clamp-2"
                >
                  <p>
                    {{ contact.description }}
                  </p>
                </div>
                <button
                  class="w-5 h-5 rounded-full hover:bg-gray-300"
                  @click="showOrHideText(contact._id)"
                >
                  <span
                    :ref="`icon-${contact._id}`"
                    class="icon-keyboard_arrow_down"
                  ></span>
                </button>
              </div>
            </td>
            <td
              class="p-2"
            >
              <div
                class="flex items-center"
              >
                <button
                  class="flex items-center justify-center p-2 text-white rounded-full bg-bertolt-primary"
                  title="Visualizar propriedade"
                  @click="openProperty(contact.property.cod)"
                >
                  <span class="icon-eye"></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="!loading && !contactUsList[0]"
        class="flex items-center justify-center p-2"
      >
        <p
          class="text-lg font-medium text-bertolt-text"
        >
          Nenhum contanto encontrado :/
        </p>
      </div>
      <div>
        <LoadingSpin
          v-if="loading"
          class="w-full"
        />
      </div>
    </div>

    <SnackBar
      :show="snackBar.show"
      :message="snackBar.message"
      @closed="snackBar.show = false"
    />
  </div>
</template>

<script>
import { getContactUs } from '../../gateway/armin/services/contactUs'
import SnackBar from '../commons/SnackBar'
import LoadingSpin from '../commons/LoadingSpin'

export default {
  name: 'ContactUsList',

  components: {
    SnackBar,
    LoadingSpin
  },

  data () {
    return {
      contactUsList: [],
      typeList: [
        {
          label: 'Vender minha proprierdade',
          value: 'SELL_MY_PROPERTY'
        },
        {
          label: 'Alugar minha proprierdade',
          value: 'RENT_MY_PROPERTY'
        },
        {
          label: 'Parcerias',
          value: 'PARTNERSHIPS'
        },
        {
          label: 'Política de privacidade',
          value: 'PRIVACY_POLICY'
        },
        {
          label: 'LGPD',
          value: 'LGPD'
        },
        {
          label: 'Outros',
          value: 'OTHERS'
        }
      ],
      search: {
        fullName: '',
        type: ''
      },
      loading: false,
      snackBar: {
        show: false,
        message: ''
      },
      iconsByType: {
        'SELL_MY_PROPERTY': 'icon-attach_money',
        'RENT_MY_PROPERTY': 'icon-attach_money',
        'PARTNERSHIPS': 'icon-attach_money',
        'PRIVACY_POLICY': 'icon-security',
        'LGPD': 'icon-security',
        'OTHERS': 'icon-attach_money',
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      try {
        this.loading = true
        const contacts = await getContactUs()
        this.contactUsList = contacts.docs
      } catch (error) {
        this.snackBar.message = (error.response ? error.response.message : error.message) || 'Erro inesperado, tente novamente'
        this.snackBar.show = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    async doSearch () {
      try {
        this.contactUsList = []
        this.loading = true
        let params = ''
        params += this.search.type ? `&type=${this.search.type}` : ''
        params += this.search.fullName ? `&fullName=${this.search.fullName}` : ''
        const contacts = await getContactUs(params)
        this.contactUsList = contacts.docs
      } catch (error) {
        this.snackBar.message = (error.response ? error.response.message : error.message) || 'Erro inesperado, tente novamente'
        this.snackBar.show = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    getIconByType (type) {
      return this.iconsByType[type]
    },

    showOrHideText (ref) {
      const haveLineClamp = !!this.$refs[ref][0].classList.value
      this.$refs[ref][0].classList.value = !haveLineClamp ? 'line-clamp-2' : ''
      this.$refs[`icon-${ref}`][0].classList.value = !haveLineClamp ? 'icon-keyboard_arrow_down' : 'icon-keyboard_arrow_up'
    },

    getLabelCOntactType (type) {
      return this.typeList.find(typeContact => typeContact.value === type).label
    },

    getFormattedDate (date) {
      const data = new Date(date)
      return data.toLocaleDateString()
    }
  }
}
</script>
