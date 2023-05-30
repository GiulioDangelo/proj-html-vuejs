<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    data() {
        return {
            store
        }
    },

    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    methods: {

    },
}
</script>

<template>
    <div class="container">
        <div class="text">
            <span>Trending Games</span>
            <h2>Choose Who Is The Best In World!</h2>
        </div>

        <div class="carousel-btn">
            <button class="prev"><img src="../assets/img/image (11).svg"></button>
            <button class="next"><img src="../assets/img/image (12).svg"></button>
        </div>

        <Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000">
            <slide class="cards" v-for="card in store.games">
                <div class="card-container">
                    <img class="img" :src="card.img" :alt="card.name">
                    <div class="bottom">
                        <div>
                            <div class="name">{{ card.name }}</div>
                            <div class="text">{{ card.text }}</div>
                        </div>

                        <div class="img-container">
                            <img src="./../assets/img/image (9).svg">
                        </div>

                    </div>
                </div>
            </slide>
        </Carousel>
    </div>
</template>
<navigation />
<pagination />

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.container{
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
}

span{
    color: $green;
    font-weight: 600;
    font-size: 18px;
}

h2{
    font-size: 50px;
    font-weight: 700;
}

.carousel-btn{
    display: flex;
    justify-content: flex-end;
}

.prev,.next{
    padding: 10px;
    border-radius: 100px;

        img{
            height: 20px;
        }
}

.cards {
    width: 330px;
    margin-inline: 20px;

    img {
        width: 100%;
    }
}

.bottom {
    color: white;
    background-color: rgb(21, 34, 88);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.img-container {
    display: flex;
	align-items: center;
	justify-content: center;
    height: 40px;
    width: 40px;
    margin-inline: 5px;
    border-radius: 100%;
    background-color: $green;

    img {
        padding: 10px;
        height: 100%;
    }
}
</style>
