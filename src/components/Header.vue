<script>
import { store } from './../../store'

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="nav">
        <div class="left">
            <div class="logo"><img src="../assets/img/menulogo.png" alt=""></div>
        </div>

        <div class="center">
            <ul class="links">
                <li v-for="item in store.menuList">{{ item.item }}
                    <div class="dropdown">
                        <img class="dropdown-toggle" 
                            type="button" 
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            src="./../assets/img/image.svg"
                            >

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">About Us</a></li>
                            <li><a class="dropdown-item" href="#">Matches</a></li>
                            <li><a class="dropdown-item" href="#">Team</a></li>
                            <li><a class="dropdown-item" href="#">Squad</a></li>
                            <li><a class="dropdown-item" href="#">Squad Details</a></li>
                            <li><a class="dropdown-item" href="#">Coming Soon</a></li>
                            <li><a class="dropdown-item" href="#">404</a></li>
                        </ul>
                    </div>


                    <img >
                </li>
            </ul>
        </div>

        <div class="right">
            <div class="icon"><img src="./../assets/img/image (1).svg" alt=""></div>
            <div class="icon"><img src="./../assets/img/image (3).svg" alt=""></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.center {
    .links {
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

            img {
                height: 15px;
                margin-inline: 5px;
                filter: invert(1);
            }
        }
    }
}

.right {
    display: flex;
    align-items: center;

    .icon {
        height: 30px;
        margin-inline: 5px;
        background-color: white;
        border-radius: 100px;

        img {
            height: 100%;
            padding: 5px;
        }
    }

}</style>