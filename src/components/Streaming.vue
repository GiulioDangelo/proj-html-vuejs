<script>
	import {Splide, SplideSlide} from "@splidejs/vue-splide";
	import "@splidejs/vue-splide/css";
	export default {
		components: {
			Splide,
			SplideSlide,
		},
	};
</script>

<template>
	<div class="container">
		<div class="col-6 left">
			<img src="../assets/img/v-1.png" />
		</div>

		<div class="col-6 right">
			<div class="text">
				<span>Live Streaming</span>
				<h2>Checkout Our Live Streaming</h2>
			</div>


			<div id="carouselExample" class="carousel slide position-relative">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/v-small1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



			<!-- <Splide :options="{rewind: true}" >
				<SplideSlide>
					<img src="../assets/img/v-small1.png" alt="Sample 1" />
				</SplideSlide>
				<SplideSlide>
					<img src="../assets/img/v-small2.png" alt="Sample 2" />
				</SplideSlide>
			</Splide> -->

		</div>
	</div>
</template>

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
