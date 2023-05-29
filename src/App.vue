<script>
import Jumbo from './components/Jumbo.vue'
import Logos from './components/Logos.vue'

export default {
  data() {
    return {
    }
  },

    components:{
      Jumbo,
      Logos,
    }
  }
</script>

<template>
  <Jumbo/>
  <Logos/>
</template>

<style lang="scss">
@use './assets/color.scss' as *;
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: $dark-blue-bg;
}
</style>
