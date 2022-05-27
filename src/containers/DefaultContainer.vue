<template>
  <div class="flex w-full bg-bertolt-background">
    <MenuContent
      class=""
    />
    <div
      class="w-full"
    >
      <TopBar
        class=""
      />
      <router-view
        class="p-6"
      />
    </div>
  </div>
</template>

<script>
import TopBar from '../components/container/TopBar'
import MenuContent from '../components/container/MenuContent'

export default {
  name: 'DefaultContainer',

  components: {
    TopBar,
    MenuContent
  }
}
</script>