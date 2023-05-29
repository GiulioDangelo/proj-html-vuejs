<script>
import Jumbo from './components/Jumbo.vue'
import Logos from './components/Logos.vue'
import About from './components/About.vue'
import Highlights from './components/Highlights.vue'


export default {
  data() {
    return {
    }
  },

    components:{
      Jumbo,
      Logos,
      About,
      Highlights,
    }
  }
</script>

<template>
  <Jumbo/>
  <Logos/>
  <About/>
  <Highlights/>
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
