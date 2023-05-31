<script>
import { store } from '../../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
export default {
    data() {
        return {
            store,

            article: [
                {
                    'img': 'src/assets/img/b1.png',
                    'name': 'Ninja Warrior Gaming'
                },
                {
                    'img': 'src/assets/img/b2.png',
                    'name': 'ghost Rider Returns'
                },
                {
                    'img': 'src/assets/img/b3.png',
                    'name': 'Call of Duty 4'
                },
                {
                    'img': 'src/assets/img/b4.png',
                    'name': 'Mortal Combat X'
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
    <div class="container">
        <div class="text">
            <span>Latest News</span>
            <h2>Stay Updated With our Latest News Articles</h2>
        </div>

        <div class="carousel-btn">
            <button @click=myCarousel.prev class="prev"><img src="../assets/img/image (11).svg"></button>
            <button @click=myCarousel.next class="next"><img src="../assets/img/image (12).svg"></button>
        </div>

        <Carousel :items-to-show="4" :wrap-around="true" ref="myCarousel">
            <slide class="cards" v-for="articles in this.article">
                <div class="card_">
                    <div class="top">
                        <img class="img" :src="articles.img">
                    </div>

                    <div class="bottom">
                        <div class="name">{{ articles.name }}</div>

                        <div class="content">
                            <div class="admin">
                                <img class="icon" src="./../assets/img/image (13).svg"> By admin
                            </div>
                            <span class="green">|</span>
                            <div class="date">
                                <img class="icon" src="./../assets/img/image (21).svg"> Oct 25, 20222
                            </div>
                        </div>

                        <div class="button-container">
                            <button class="btn">Read More <img src="../assets/img/image (8).svg"></button>
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

.container {
    color: white;
    margin-top: 300px;
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
    max-width: 600px;
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

.bottom {
    color: white;
    background-color: $dark-blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.name {
    font-size: 22px;
    font-weight: 800;
}

.card_ {}

.top {
    width: 300px;
    height: 100%;

    img {
        width: 100%;
        object-fit: contain;
    }
}

.content {
    margin-top: 20px;
    display: flex;

    .icon {
        height: 20px;
        filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
    }
}

.green {
    color: $green;
    margin-inline: 10px;
}

.read-more {
    padding: 10px 20px;
}

.button-container {
    display: flex;

    img {
        height: 30px;
        margin-left: 10px;
    }

}

.btn {
    margin-top: 20px;
    background-color: $light-green;
    display: flex;
    align-items: center;
    padding: 10px 40px;
    font-size: 20px;
    font-weight: 700;
}
</style>
