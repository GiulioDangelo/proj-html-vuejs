<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from 'vue'
import { store } from '../../store';
export default {
	name: 'App',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},

	data() {
		return {
			imgs: [
				{ "img": 'src/assets/img/v-small1.png' },
				{ "img": 'src/assets/img/v-small2.png' }
			],
			store
		}
	},

	setup() {
            const myCarousel = ref(null);

            return {
            myCarousel,
            }
        },
};
</script>

<template>
	<div class="background-image">

		<img src="./../assets/img/v-bg.png" alt="" class="bg-img">

		<div class="container">
			<div class="col-6 left">
				<img src="../assets/img/v-1.png" class="img-big"/>

				<div class="img-container">
					<img src="./../assets/img/image (9).svg">
				</div>
			</div>

			<div class="col-6 right">
				<div class="text">
					<span>Live Streaming</span>
					<h2>Checkout Our Live Streaming</h2>
				</div>


			<div class="carousel-btn">
                <button @click=myCarousel.prev class="prev" ><img src="../assets/img/image (11).svg"></button>
                <button @click=myCarousel.next class="next" ><img src="../assets/img/image (12).svg"></button>
            </div>

			<!-- FIXME: :wrap-around="true" -->
				<Carousel :items-to-show="2" :autoplay="3000" ref="myCarousel">
					<Slide v-for="img in this.imgs" :key="slide">
						<div>
							<img :src="img.img">	
						</div>
						<div>
							<div class="caro-img">{{ store.games[0].name }}</div>
							<div class="caro-img">{{ store.games[0].text }}</div>
						</div>
					</Slide>

				</Carousel>


			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;
.container {
	display: flex;
	color: white;
	position: relative;
	z-index: 200;
	height: 100%;
	position: relative;
}

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

span{
	color: $green;
}

h2{
	font-size: 50px;
	font-weight: 700;
}

.carousel__slide{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.carousel-btn{
	width: 100%;
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
    margin-bottom: 15px;
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

.left {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	position: relative;

	img {
		width: 100%;
	}
}

.img-container {
	display: flex;
	align-items: center;
	justify-content: center;
    height: 60px;
    width: 60px;
    margin-inline: 5px;
    border-radius: 100%;
    background-color: $green;
	position: absolute;

    img {
        padding: 10px;
        height: 80%;
		filter: invert(1);
    }
}

.right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.carousel {
	text-align: start;
}

.carousel-slide {
	// width: 300px;
}

.carousel-item {
	height: 300px;
	width: 350px;
}
</style>
