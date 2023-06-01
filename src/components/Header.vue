<script>
import { store } from './../../store'

export default {
    data() {
        return {
            store,
            cart: [
                {
                    product: 'Sony PS5 White',
                    img: 'src/assets/img/s1.png',
                    price: 254,
                },
                {
                    product: 'A4 Tec Mouse',
                    img: 'src/assets/img/s2.png',
                    price: 121,
                },
                {
                    product: 'Gear VR Led',
                    img: 'src/assets/img/s3.png',
                    price: 514,
                },
            ],
            totalPrice: 0,
        };
    },

    mounted() {
        this.calculateTotalPrice();
    },

    methods: {
        removeItem(index) {
            this.cart.splice(index, 1);
            this.calculateTotalPrice();
        },
        calculateTotalPrice() {
            let sum = 0;
            for (let i = 0; i < this.cart.length; i++) {
                sum += this.cart[i].price;
            }
            this.totalPrice = sum;
        },
    },
};

</script>

<template>
    <div class="nav">
        <div class="left">
            <div class="logo"><img src="../assets/img/menulogo.png" alt=""></div>
        </div>

        <div class="center">
            <ul class="links">
                <li v-for="(item , i) in store.menuList" 
                :class="{ 'first-card': i === 0 }"
                >
                    {{ item.item }}
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
            </ul>
        </div>

        <div class="right">
            <div class="icon"><img src="./../assets/img/image (1).svg" alt=""></div>


            <p class="mb-0">
                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                    aria-controls="collapseExample">

                    <div class="icon">
                        <img src="./../assets/img/image (3).svg" alt="">
                        <div class="item-num">0</div>
                    </div>

                </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body position-absolute">
                    <div class="card_" v-for="(item, i ) in this.cart" :key="i">
                        <div class="img-container">
                            <img :src="item.img">
                        </div>

                        <div class="text">
                            <div class="name">{{ item.product }}</div>
                            <div class="price">Quality: ${{ item.price }}</div>
                        </div>
                        <div @click="removeItem(i)" class="remove">X</div>
                    </div>

                    <div class="total">Total: ${{ totalPrice }}</div>
                </div>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.dropdown-menu{
    background-color: rgb(32, 32, 70);
}

.dropdown-item{
    color: $green;
    border-bottom: 1px solid white;
}

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

            &:hover{
                cursor: default;
            }
        }
    }
}

.right {
    display: flex;
    align-items: center;

    .icon {
        height: 40px;
        margin-inline: 5px;
        background-color: white;
        border-radius: 100px;
        position: relative;
        padding: 6px;
        img {
            height: 100%;
            padding: 5px;
            filter: brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(1143%) hue-rotate(219deg) brightness(89%) contrast(90%);
        }
    }
}

.card-body {
    color: white;
    position: relative;
    right: 260px;
    top: 63px;
    background-color: rgba($color: rgb(37, 37, 73), $alpha: 0.6);
}

.remove {
    cursor: pointer;
    margin-left: 20px;
    color: $green;
}

.card_ {
    display: flex;
    align-items: center;
    height: 100px;
}

.text {
    display: flex;
    flex-direction: column;
}

.img-container {
    width: 60px;
    height: 50px;
    border: 1px solid $green;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.item-num{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color:rgb(64, 82, 253);
    padding: 10px;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    z-index: 224;
    position: absolute;
    top: -10px;
    right: -10px;
}
.first-card{
    color: $green !important;
     img{
        filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%) !important;
     }
}
</style>