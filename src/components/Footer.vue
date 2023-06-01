<script>
import { store } from './../../store'

export default {
    data() {
        return {
            store,
            // props: {
            //     item: String,
            //     img: String
            // }
        }
    },
}
</script>

<template>
    <div class="foot">
        <div class="links">
            <div class="left">
                <div class="logo"><img src="../assets/img/menulogo.png" alt=""></div>
            </div>

            <div class="right">
                <ul>
                    <li v-for="item in store.menuList">{{ item.item }}</li>
                </ul>
            </div>
        </div>

        <div class="divider"></div>

        <div class="section">
            <div class="copy">Copyright © RaxG | Designed by <span class="green">NextGenerationDev</span></div>

            <div class="social">
                <div class="img-container"><img src="../assets/img/image (4).svg"></div>
                <div class="img-container"><img src="../assets/img/image (5).svg"></div>
                <div class="img-container"><img src="../assets/img/image (6).svg"></div>
                <div class="img-container"><img src="../assets/img/image (7).svg"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.foot {
    overflow: hidden;
    background-image: url('../assets/img/banner1.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.links {
    color: white;
    height: 200px;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
}

.left {
    display: flex;
    align-items: center;
}

.right {
    ul {
        padding: 0px !important;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        height: 100%;

        li {
            display: flex;
            align-items: center;
            margin-inline: 20px;
            list-style: none;
            color: white;

                &:hover{
                    cursor: pointer;
                    color: $green;
                }

            img {
                height: 15px;
                margin-inline: 5px;
                filter: invert(1);
            }
        }
    }
}

.divider {
    height: 1px;
    border: 1px solid white;
    max-width: 1200px;
    margin: auto;
}

.section {
    display: flex;
    justify-content: space-between;
    color: white;
    max-width: 1200px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 25px;
}

.green {
    color: $green;
}

.social {
    display: flex;
    align-items: center;

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        padding: 10px;
        border-radius: 100px;
        margin-bottom: 10px;
        background-color: $dark-blue-bg;

        &:hover {
            background-color: $green;
        }
    }

    img {
        height: 15px;
        filter: invert(1)
    }
}</style>