<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from 'vue'
export default {
    data() {
        return {
            store,
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
        <img src="./../assets/img/v-bg.png" alt="" class="bg-img">

        <div class="container">

            <div class="text">
                <span>Upcoming Match</span>
                <h2>Keep Eyes & Manage upcoming Battle</h2>
            </div>

            <div class="carousel-btn">
                <button @click=myCarousel.prev class="prev" ><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next" ><img src="../assets/img/image (12).svg"></button>
            </div>

            <Carousel :items-to-show="3" :wrap-around="true" ref="myCarousel">
                <slide class="cards" v-for="card in store.clans.slice(0,3)">
                    <div class="card-container">
                        <div class="top">
                            <div class="img-container">
                                <img class="img" :src="card.img" :alt="card.name">
                            </div>
                            <div class="shadow-img-container">
                                <img class="shadow" :src="card.img" :alt="card.name">
                            </div>
                        </div>
                        <div class="bottom">
                            <div>
                                <div class="name">{{ card.name }}</div>
                                <div class="icon">
                                    <div class="img-social-container">
                                        <img class="icon-img" src="./../assets/img/image (13).svg" />
                                    </div>
                                    <div class="img-social-container">
                                        <img class="icon-img" src="./../assets/img/image (14).svg" />
                                    </div>
                                </div>
                                <div class="time">9.45</div>
                                <div class="date">1st November,2022</div>
                                <button>View More</button>
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

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    position: relative;
    z-index: 200;
    height: 100%;
    position: relative;
}

span{
    color: $green;
    font-size: 20px;
    font-weight: 700;
}

h2{
    font-size: 50px;
    font-weight: 700;
}

.background-image {
    height: 900px;
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

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 420px;
    border-radius: 20px;
    background-color: $dark-blue;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 30px;
    width: 330px;
    border-radius: 20px;
    background-color: $dark-blue-bg;
}

.shadow-img-container {
    position: absolute;
    top: 0px;
    right: 0px;
    opacity: 0.1;
}

.shadow{
    height: 300px;
    z-index: -30000;
}

.img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 15px;
    width: 234px;
    height: 300px;
    position: relative;
    z-index: 20;
}

.img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.icon {
    display: flex;
    justify-content: center;

    .img-social-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        margin-inline: 5px;
        border-radius: 100%;
        background-color: $green;

        .icon-img {
            padding: 10px;
            height: 100%;
        }
    }
}

.name{
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 10px;
}

.time{
    font-size: 48px;
    font-weight: 700;
}

.date{
    font-size: 18px;
    margin-bottom: 20px;
}

button{
padding: 10px 20px;
background-color: $light-green;
font-size: 20px;
margin-bottom: 30px;
font-weight: 600;
border-radius: 10px;

    &:hover{
        background-color: rgb(32, 32, 70);
        color:$green;
        border: 1px solid $green;
    }
}

.carousel-btn{
    display: flex;
    justify-content: flex-end;
}

.prev,.next{
    padding: 10px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-left: 15px;
    margin-bottom: 5px;
        img{
            height: 20px;
        }
}

.next{
    background-color: $green;

        img{
            filter: invert(1);
        }
}

.prev{
    background-color: white;
}
</style>