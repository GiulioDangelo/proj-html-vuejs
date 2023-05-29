<script>
import Header from './../components/Header.vue'

export default {
    components:{
      Header,
    }
}
</script>

<template>
  <Header/>
  <div class="container">
    <h4>WELCOME TO RAXG</h4>
    <h1>ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
    <button>Read More <img src="../assets/img/image (8).svg"></button>
  </div>
</template>

<style lang="scss" scoped>
    .container{
        background-image: url('../assets/img/banner1.png');
        background-size: contain;
        height: 900px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            h4{
                // color: ;
            }

            button{
                display: flex;
                align-items: center;
                padding: 0px 50px;
            }
    }
</style>