<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from 'vue'
export default {
    data() {
        return {
            store,

            client:[
                {
                'img': 'src/assets/img/test1.png',
                },
                {
                'img': 'src/assets/img/test2.png',
                },
                {
                'img': 'src/assets/img/test3.png',
                },
                {
                'img': 'src/assets/img/test4.png',
                },
        ]
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
        <img class="bg-img" src="./../assets/img/test-group.png">

        <div class="container">
            <div class="text">
                <span>Testionials</span>
                <h2>What Our Client Say</h2>
            </div>
    
            <div class="carousel-btn">
                <button @click=myCarousel.prev class="prev" ><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next" ><img src="../assets/img/image (12).svg"></button>
            </div>
    
            <Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000" ref="myCarousel">
                <slide class="cards" v-for="img in client">
            
                    <div class="card-container">
                        <div class="top">
                            <img class="img" :src="img.img">   
                        </div>

                        <div class="bottom">
                            <div class="img-container">
                                <img src="./../assets/img/image (15).svg">
                            </div>

                            <div class="text-bottom">
                                <div class="text">Donec sollicitudin molestie malesuada.ac quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget</div>
                                <div class="name">Mohammad Sala</div>
                                <div class="job">Ceo/Founder</div>
                            </div>
                        </div>
                    </div>
                </slide>
            </Carousel>
        </div>
        <img class="bg-img2" src="./../assets/img/test-grouptwo.png">
    </div>
</template>
<navigation />
<pagination />

<style lang="scss" scoped>
@use '../assets/color.scss' as *;
.background-image {
    display: flex;
    align-items: center;
	height: 700px;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    background-color: rgba($color: #49495e, $alpha: 0.1);

	.bg-img {
		overflow: hidden;
		position: absolute;
		top: 0;
        right: 0;
        height: 100%;
		z-index: -1;
		filter: opacity(0.7);
	}

    .bg-img2{
        overflow: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
		filter: opacity(0.5);
    }
}


.container{
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
}

span{
    color: $green;
    font-weight: 600;
    font-size: 18px;
    margin-left: 200px;
}

h2{
    font-size: 50px;
    font-weight: 700;
}

.carousel-btn{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 270px;
    z-index: 20;
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
    margin-left: 1200px;
        img{
            filter: invert(1);
        }

    }

.top{
    width: 100%;
    position: relative;
    z-index: 100;

        img{
            width: 320px;
            height: 400px;
            object-fit: cover;
        }

}

.card-container:hover .top{
    z-index: -20;
}

.bottom {
    color: white;
    background-color: $dark-blue-bg;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.text-bottom{
    text-align: start;

        .text{
            font-size: 20px;
        }

        .name{
            margin:10px 0px;
            font-size: 25px;
            font-weight: 700;
            color: $green;
        }
}

.cards{
    margin-inline: 10px;
}

.img-container {
    display: flex;
	align-items: center;
	justify-content: center;
    height: 50px;
    width: 35px;
    margin-inline: 5px;
    border-radius: 100%;
    background-color: $dark-blue-bg;

    img {
        height: 100%;
        filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
    }
}

</style>