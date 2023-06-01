<script>
import { store } from './../../store'

export default {
    props: {
        item: String,
        img: String,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <li :class="{ 'first-card': i === 0 }">
        {{ item }}

        <div class="dropdown">
            <img class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                src="./../assets/img/image.svg">

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


        <img>
    </li>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.center {

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

        &:hover {
            cursor: default;
        }
    }
}



.dropdown-menu {
    background-color: rgb(32, 32, 70);
}

.dropdown-item {
    color: $green;
    border-bottom: 1px solid white;
}
</style>