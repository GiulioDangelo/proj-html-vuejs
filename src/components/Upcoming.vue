<script>
	import {store} from "../../store";
	export default {
		data() {
			return {
				store,
			};
		},
	};
</script>

<template>
	<div class="container">
		<span>Trending Battle</span>
		<h2>Upcoming Match</h2>

		<div class="card-select">
			<ul>
				<li>test</li>
				<li>test</li>
				<li>test</li>
				<li>test</li>
				<li>test</li>
			</ul>
		</div>

		<div class="card-container">
			<div class="card-big" v-for="card in store.clans">
				<div class="col-6 content-left rounded">
					<div class="team-left">
						<div class="card-top">
							<img :src="card.img" alt="" />
						</div>
						<div class="card-bottom">
							<span class="nation">{{ card.nation }}</span>
							<h4 class="name">{{ card.name }}</h4>
						</div>
					</div>

					<div class="card-vs">VS</div>

					<div class="team-right rounded">
						<div class="card-top">
							<img :src="card.img" alt="" />
						</div>
						<div class="card-bottom">
							<span class="nation">{{ card.nation }}</span>
							<h4 class="name">{{ card.name }}</h4>
						</div>
					</div>
				</div>

				<div class="col-6 content-right">
					<div class="text">
						<h3>Game title</h3>
						<p>
							Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia
							eget consectetur sed, convallis at tellus. Vivamus magna justo..
						</p>
					</div>

					<div class="card-date">
						<div class="time">322</div>
						<div class="date">1 eqsd 3223</div>
						<div class="icon">
							<div class="img-container">
								<img src="./../assets/img/image (13).svg" />
							</div>
							<div class="img-container">
								<img src="./../assets/img/image (14).svg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "../assets/color.scss" as *;

	.container {
        margin-top: 100px;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

        span{
            font-size: 18px;
            font-weight: 600;
            color: $green;
        }

        h2{
            font-size: 48px;
            margin-top: 10px;
            font-weight: 700;
        }

		ul {
			display: flex;

                li{
                    margin-inline: 5px;
                    list-style: none;
                    font-size: 20px;
                    font-weight: 600;

                        &:first-child{
                            color: $green;
                        }

                        &:hover{
                            color: $green;
                            cursor: pointer;
                        }
                }
		}

		.card-big {
			width: 1300px;
			background-color: $dark-blue;
			display: flex;
			margin: 20px 0;
			padding: 30px;
			border: 1px solid $green;
			border-radius: 10px;

			&:hover{
				background-color: $light-blue-bg;
                border: 1px solid $dark-blue;
                cursor: pointer;

                .card-date{
                        background-color: $light-green;
                        color: $dark-blue;

                            .img-container{
                                background-color: $dark-blue;

                                    img{
                                        filter: invert(1);
                                    }
                            }
                    }
			}

            &:first-child{
				background-color: $light-blue-bg;
                border: none;

                    .card-date{
                        background-color: $light-green;
                        color: $dark-blue;

                            .img-container{
                                background-color: $dark-blue;

                                    img{
                                        filter: invert(1);
                                    }
                            }
                    }
            }
		}

		.card-top {
			display: flex;
			justify-content: center;
			width: 200px;
			height: 150px;
			background-color: $dark-blue-bg;
			border-radius: 10px;
		}

		.card-bottom {
            background-color: rgb(21, 34, 88);
			width: 100%;
			height: 100px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: 10px;
		}
        
		.team-left,
		.team-right {
            background-color: rgb(21, 34, 88);
			width: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 10px;
		}
	}

	.card-vs {
		color: $green;
		font-size: 30px;
		font-weight: 700;
		padding: 40px 40px;
		margin-inline: 10px;
		border-radius: 10px;
		background-color: $dark-blue-bg;
	}

	.content-left {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.content-right {
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		.text {
			width: 50%;
		}

		.card-date {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 200px;
			height: 200px;
			margin-right: 20px;
			background-color: $dark-blue-bg;
			border-radius: 10px;

			.icon {
				display: flex;
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
			}
		}
	}
</style>
