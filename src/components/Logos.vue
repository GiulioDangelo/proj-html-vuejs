<script>
import { store } from '../../store';
export default {
  data() {
    return {
        store,
    }
  },

  }
</script>

<template>
    <div class="logos" 
    >
        <div class="logo" v-for="clan in this.store.clans"><img :src="clan.img"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.logos{
    max-width: 1200px;
    margin: auto;
    position: relative;
    bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $dark-blue;
    height: 200px;
}

</style>
