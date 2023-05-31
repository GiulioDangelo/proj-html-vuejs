<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from 'vue'
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
        <div class="container">
            <div class="text">
                <span>Team Members</span>
                <h2>Our Experts Team Members</h2>
            </div>
    
            <div class="carousel-btn">
                <button @click=myCarousel.prev class="prev" ><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next" ><img src="../assets/img/image (12).svg"></button>
            </div>
    
            <Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000" ref="myCarousel">
                <slide class="cards" v-for="card in store.members">
            
                    <div class="card-container">
                        <div class="top">
                            <div class="thumb-container">
                                <img class="img" :src="card.img" :alt="card.name">
                            </div>
                            <div class="social">
                                <div class="img-container">
                                    <img :src="card.social[0].facebook">
                                </div>
                                <div class="img-container">
                                    <img :src="card.social[0].twitter">
                                </div>
                                <div class="img-container">
                                    <img :src="card.social[0].linkedin">
                                </div>
                                <div class="img-container">
                                    <img :src="card.social[0].instagram">
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div>
                                <div class="name">{{ card.name }}</div>
                                <div class="job">{{ card.job }}</div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-inline: 5px;
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
     
.cards{
    height: 400px;
    margin-inline: 20px;

    img {
        width: 100%;
        height: 100%;
    }
}

.bottom {
    color: white;
    background-color: $dark-blue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    }

    .name{
        font-size: 22px;
        font-weight: 800;
    }
    .job{
        font-weight:600;
    }


.img-container {
    display: flex;
	align-items: center;
	justify-content: center;
    height: 35px;
    width: 35px;
    margin-inline: 5px;
    border-radius: 100%;
    background-color: $light-blue-bg;
    margin-bottom: 10px;
    display: none;
    &:hover {
        background-color: $green;
    }
    
    

    img {
        padding: 10px;
        height: 100%;
        filter: invert(1);
    }
}

.top{
    position: relative;
    &:hover .img-container{
        display: block;
    }
}

.social{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
}
</style>
