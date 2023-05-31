<script>
import { store } from '../../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="newsletter">
        <div>
            <h4>Our news Letter</h4>
        </div>
        
        <div class="input">
            <div class="img-container">
                <img class="msg" src="./../assets/img/image (14).svg">
                enter your email
            </div>
            <button class="btn">subscribe</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/color.scss' as *;

.newsletter {
    border-radius: 20px;
    max-width: 1200px;
    margin: auto;
    position: relative;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $dark-blue;
    height: 160px;
}

h4{
    color: white;
    font-size: 40px;
    font-weight: 700;
    margin-left: 20px;
}

.input{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    width: 50%;
    margin-right: 50px;
    border-radius: 100px;
    background-color:rgb(26, 25, 53) ;
}

.btn{
    padding: 12px 20px;
    background-color: $green;
    font-size: 16px;
    font-weight: 500;
    border-radius: 100px;
}

.img-container{
    color: lightgrey;
}

.msg{
    height: 20px;
    filter: brightness(0) saturate(100%) invert(48%) sepia(62%) saturate(6830%) hue-rotate(134deg) brightness(103%) contrast(104%);
    margin-left: 30px;
    margin-right: 10px;
}
</style>
