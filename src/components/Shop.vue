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
    <div class="background-image">
        <div class="bg-img"><img src="../assets/img/shop-bg.png"></div>
        <div class="container">
            <div class="text">
                <span>Gammer Shop</span>
                <h2>Explore Our Shop</h2>
            </div>
    
            <div class="carousel-btn">
                <button @click=myCarousel.prev class="prev" ><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next" ><img src="../assets/img/image (12).svg"></button>
            </div>
    
            <Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000" ref="myCarousel">
                <slide class="cards" v-for="product in store.shop">
            
                    <div class="card-container">
                        <div class="top">
                            <div class="thumb-container">
                                <img class="img" :src="product.img" :alt="product.product">
                            </div>
                            <div class="icon">
                                <div class="img-container">
                                    <img src="./../assets/img/image (16).svg">
                                </div>
                                <div class="img-container">
                                    <img src="./../assets/img/image (17).svg">
                                </div>
                                <div class="img-container">
                                    <img src="./../assets/img/image (18).svg">
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div>
                                <div class="star"> 
                                    <div class="star-container green-svg"><img src="./../assets/img/image (19).svg"></div>
                                    <div class="star-container green-svg"><img src="./../assets/img/image (19).svg"></div>
                                    <div class="star-container"><img src="./../assets/img/image (19).svg"></div>
                                    <div class="star-container"><img src="./../assets/img/image (19).svg"></div>
                                    <div class="star-container"><img src="./../assets/img/image (19).svg"></div>
                                </div>
                                    <div class="product">{{ product.product }}</div>
                                    <div class="green-tx">$970.00<span class="price">$999.00</span></div>
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
    position: relative;
    display: flex;
    align-items: center;

    .bg-img {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        filter: opacity(0.4);

            img{
                width: 100%;
            }
    }
}


.container{
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
}

span{
    color: $green;
    margin-left:115px ;
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

    text-align: start;
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

.card-container{
    width: 300px;
}

.top{
    position: relative;
    background-color:$dark-blue;
    border-radius: 10px;
        
    &:hover .img-container{
        display: block;
    }
}

.thumb-container{
    height: 230px;
    width: 270px;

    padding: 30px 45px;

        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
}

.icon{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
}

.green-tx{
    color: $green;
    font-size: 18px;
    font-weight: 600;
}

.price{
    margin: 0;
    color: white;
    margin-left: 5px;
}

.star{
    display: flex;
    height: 30px;
}

.star-container{
    display: flex;
	align-items: center;
	justify-content: center;
    height: 35px;
    width: 35px;
    margin-inline: 5px;

    img {
        padding: 6px;
        height: 100%;
        margin-right: 25px;
        filter: invert(1);
    }
    
}

.product{
    font-size: 20px;
}

.green-svg{
    filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
}
</style>
