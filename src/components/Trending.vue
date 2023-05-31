<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
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

    setup() {
        const myCarousel = ref(null);

        return {
            myCarousel,
        }
    },
}
</script>

<template>
    <div class="background-image">
        <img class="bg-img" src="./../assets/img/protfolio-vector.png">

        <div class="container">
            <div class="text">
                <span>Trending Games</span>
                <h2>Choose Who Is The Best In World!</h2>
            </div>

            <div class="carousel-btn">
                <button @click=myCarousel.prev class="prev"><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next"><img src="../assets/img/image (12).svg"></button>
            </div>

            <Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000" ref="myCarousel">
                <slide class="cards" v-for="(card, i ) in store.games">

                    <div class="card-container">
                        <div class="top">
                            <img class="img" :src="card.img" :alt="card.name">
                            <div class="new">New</div>
                        </div>
                        <div class="bottom" :class="{ 'first-card': i === 0 }" >
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
    </div>
</template>
<navigation />
<pagination />

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.background-image {
    height: 700px;
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .bg-img {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        filter: opacity(0.4);
    }
}


.container {
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
}

span {
    color: $green;
    font-weight: 600;
    font-size: 18px;
}

h2 {
    font-size: 50px;
    font-weight: 700;
}

.carousel-btn {
    display: flex;
    justify-content: flex-end;
}

.prev,
.next {
    padding: 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-inline: 5px;
    margin-bottom: 5px;

    img {
        height: 20px;
    }
}

.next {
    background-color: $green;

    img {
        filter: invert(1);
    }
}

.cards {
    width: 330px;
    margin-inline: 20px;

    img {
        width: 100%;
    }
}

.top {
    position: relative;
}

.new {
    color: black;
    background-color: $light-green;
    padding: 5px;
    position: absolute;
    top: 0;
    left: 0;
}

.card-container:hover .bottom {
    background-color: $light-green;
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

.first-card{
background-color: $light-green;
}
</style>
