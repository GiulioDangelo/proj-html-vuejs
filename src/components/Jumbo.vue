<script>
import Header from './../components/Header.vue'

export default {
    components:{
      Header,
    }
}
</script>
  <!-- v-for="item in menuList"
  :item="item.item"
  :img="item.img" -->
<template>
    <div class="Container">
        <Header/>
        
        <div class="text">
        <h4>WELCOME TO RAXG</h4>
        <h1>ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
    </div>

    <div class="more">
        <button class="btn">Read More <img src="../assets/img/image (8).svg"></button>

        <div class="play-container">
            <img src="../assets/img/image (9).svg" class="play">
        </div>
    </div>
    
    <div class="social">
        <div class="img-container"><img src="../assets/img/image (4).svg"></div>
        <div class="img-container"><img src="../assets/img/image (5).svg"></div>
        <div class="img-container"><img src="../assets/img/image (6).svg"></div>
        <div class="img-container"><img src="../assets/img/image (7).svg"></div>
    </div>
    
  </div>

</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;
    .Container{
        background-image: url('../assets/img/banner1.png');
        height: 900px;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

            .text{
                max-width: 1200px;
                text-align: center;    
                display: flex;
                flex-direction: column;
                align-items: center;
                    h4{
                        color:$green ;
                    }
        
                    h1{
                        color: white;
                        font-size: 70px;
                    }
            }

            .more{
                display: flex;
                align-items: center;
                    img{
                        height: 30px;
                        margin-left: 10px;
                    }
                .play-container{
                        margin-inline:20px ;
                        height: 60px;
                        width: 60px;
                        padding: 10px;
                        border-radius: 100px;
                        background-color: $light-green;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                            img{
                                height: 25px;
                            }
                    }
            }

            button{
                background-color: $light-green;
                display: flex;
                align-items: center;
                padding: 10px 40px;
                font-size: 20px;
                font-weight: 700;
            }
            .social{
                display: flex;
                align-items: center;
                flex-direction: column;
                position: absolute;
                left: 40px;
                    .img-container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50px;
                        width: 50px;
                        padding: 10px;
                        border-radius: 100px;
                        margin-bottom: 10px;
                        background-color: $dark-blue-bg;

                            &:hover{
                                background-color: $light-green;
                            }
                    }

                    img{
                        height: 20px;
                        filter: invert(1)
                    }
            }
    }


.btn:hover{
    color:white;
}
</style>