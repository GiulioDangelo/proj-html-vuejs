<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
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
			imgs:[
				{"img" : '../assets/img/v-small1.png'},
				{"img" : '../assets/img/v-small2.png'}
			]
		}
	},
	};
</script>

<!-- <template>
	<div class="container">
		<div class="col-6 left">
			<img src="../assets/img/v-1.png" />
		</div>

		<div class="col-6 right">
			<div class="text">
				<span>Live Streaming</span>
				<h2>Checkout Our Live Streaming</h2>
			</div>

			<Carousel :items-to-show="4" :wrap-around="true" :autoplay="3000">
            <slide>
				<img src="../assets/img/v-small1.png">
            </slide>
        </Carousel>

		</div>
	</div>
</template> -->

<style lang="scss" scoped>
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px; /* Regola la larghezza delle frecce se necessario */
  height: 30px; /* Regola l'altezza delle frecce se necessario */
}

.carousel-control-prev {
  right: calc(100% - 30px); /* Regola il valore "30px" per posizionare la freccia in alto a destra */
}

.carousel-control-next {
  right: calc(100% + 5px); /* Regola il valore "5px" per posizionare la freccia in alto a destra */
}

	.container {
		display: flex;
		color: white;
	}

	.left {
		img {
			width: 500px;
		}
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
	}

	.carousel-slide {
		width: 300px;
	}

	.carousel-item {
		height: 300px;
		width: 350px;
	}
</style>
