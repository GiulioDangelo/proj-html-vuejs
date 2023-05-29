<script>
export default {

}
</script>

<template >
    <div class="background-container">
        <img src="./../assets/img/Vector.png" class="vector">

        <div class="container">
            <div class="row">

                <div class="col-6 left">
                    <span>Our Extrem Feature</span>
                    <h2>The Best Gaming Arena On The World!</h2>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, at
                        tellus. Cras ultricies ligula sed magna ivamus magna justo, dictum porta. sapien massa, convallis.
                    </p>
                </div>

                <div class="col-6 right">
                    <div class="col-6">
                        <div class="card active">
                            <div class="img-container">
                                <img src="./../assets/img/feature1.png">
                            </div>
                            <h3>Live Streaming</h3>
                            <p>Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card">
                            <div class="img-container">
                                <img src="./../assets/img/feature2.png">
                            </div>
                            <h3>Gaming News</h3>
                            <p>Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card">
                            <div class="img-container">
                                <img src="./../assets/img/feature3.png">
                            </div>
                            <h3>Great Tournament</h3>
                            <p>Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="card">
                            <div class="img-container">
                                <img src="./../assets/img/feature4.png">
                            </div>
                            <h3>Award Ceremony</h3>
                            <p>Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.background-container {
    position: relative;

    .vector {
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

    .container {
        color: white;

        .right {
            display: flex;
            flex-wrap: wrap;

            .col-6 {
                padding: 10px;

                .card {
                    background-color: $light-blue-bg;
                    display: flex;
                    align-items: center;
                    border-radius: 20px;
                    padding: 50px 30px;
                    color: white;

                    &:hover {
                        background-color: $light-green;
                    }


                    .img-container {
                        width: 100px;
                        height: 100px;
                        background-color: $dark-blue-bg;
                        border-radius: 50%;
                        line-height: 100px;
                        text-align: center;

                        img {
                            width: 60px;
                        }
                    }

                }
            }
        }
    }

}


.active {
    background-color: $light-green !important;
}

.left {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    span {
        color: $green;
        font-size: 25px;
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
    }

    p {
        font-size: 20px;
    }
}</style>