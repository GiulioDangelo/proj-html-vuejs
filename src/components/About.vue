<script>
export default {

}
</script>

<template>
    <div class="container">
        <div class="row">

            <div class="col-6">
                <div class="images-container">
                    <img src="../assets/img/exprience-shape.png" class="shape">
                    <img src="../assets/img/exprince.jpg" class="main-img">
                    <img src="../assets/img/shape1.png" class="green-1">
                    <img src="../assets/img/shape2.png" class="green-2">
                </div>
            </div>

            <div class="col-6">
                <span class="text-green">12 Year Experience</span>
                <h2>We Are The Best Gaming Company</h2>
                <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi praesent sapien massa ligula sed magna dictum porta.</p>

                <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Cras ultricies ligulaa.</p>

                <ul>
                    <li>
                        <span class="container-check"><img src="../assets/img/image (10).svg" class="check"></span>
                        Sed porttitor lectus nibh. Proin eget tortor risus.
                    </li>

                    <li>
                        <span class="container-check"><img src="../assets/img/image (10).svg" class="check"></span>
                        Praesent sapien massa, convallis a pellentesque nec. risus.
                    </li>

                    <li>
                        <span class="container-check"><img src="../assets/img/image (10).svg" class="check"></span>
                        Praesent sapien massa, convallis a pellentesque nec. risus.
                    </li>

                    <li>
                        <span class="container-check"><img src="../assets/img/image (10).svg" class="check"></span>
                        Praesent sapien massa, convallis a pellentesque nec. risus.
                    </li>
                </ul>

                <div class="button-container">
                    <button class="btn">Read More <img src="../assets/img/image (8).svg"></button>

                    <div class="play-container">
                        <img src="../assets/img/image (9).svg" class="play">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.container {
    color: white;
    padding-bottom: 125px;
    padding-top: 125px;

    h2 {
        font-size: 50px;
        font-weight: 700;
    }

    .text-green {
        color: $green;
    }

    ul {
        padding-left: 0px !important;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;

        .container-check {
            height: 20px;
            width: 20px;
            border: 1px solid $green;
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;

            .check {
                height: 23px;
                fill: $green;
                padding: 4px;
                filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
            }
        }
    }

    .button-container {
        display: flex;

        img {
            height: 30px;
            margin-left: 10px;
        }

        .play-container {
            margin-inline: 20px;
            height: 60px;
            width: 60px;
            padding: 10px;
            border-radius: 100px;
            background-color: $light-green;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    button {
        background-color: $light-green;
        display: flex;
        align-items: center;
        padding: 10px 40px;
        font-size: 20px;
        font-weight: 700;

        &:hover {
            color: $green;
            border: 1px solid $green;
            background-color: transparent;

            &:hover img {
                filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
            }
        }
    }

}

.images-container {
    position: relative;
    margin: 0 60px 0 80px;

    .shape {
        position: absolute;
        top: -16px;
        left: -120px;
        width: 110px;
        height: 110px;
        z-index: 200;
    }

    .main-img {
        position: relative;
        z-index: 2000;
        width: 100%;
        height: 100%;
    }

    .green-1 {
        position: absolute;
        left: -50px;
        top: -50px;
    }

    .green-2 {
        position: absolute;
        bottom: -31px;
        right: -31px;
        width: 260px;
        height: 260px;

    }
}</style>