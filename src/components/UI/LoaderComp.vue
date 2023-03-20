<template>
    <div class="loader">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/>
        </svg>
    </div>

    <div class="one"></div>
</template>

<script>
export default {
    name:'loader-comp',
    props:{
        
    },
    data() {
        return{

        }
    },
}
</script>

<style lang="scss" scoped>
.loader{
    position: absolute;
    margin-top: 15px;
    width: 40px;
    height: 40px;
    background-color: #3d75c4;
    border-radius: 100%;
    top: -20px;
    right: -50px;
    animation: rotatingLoader 2s infinite linear;
    svg{
        // width: 60px;
        // height: 60px;
        border-radius: 100%;
        background-color: #5CCDC9;
        fill: #15141575;
    }
    &::before{
        // content: '';
        position: absolute;
        width: 10px;
        height: 3px;
        background-color: #000;
        top: 19px;
        right: 9px;
        border-radius: 1px 2px 2px 1px;
        transform: rotate(50deg);
    }
    &::after{
        // content: '';
        position: absolute;
        width: 10px;
        height: 3px;
        background-color: #000;
    }
}

@keyframes rotatingLoader{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(90deg);

    }
    50%{
        transform: rotate(180deg);

    }
    75%{
        transform: rotate(270deg);
        
    }
    100%{
        transform: rotate(360deg);


    }
}
</style>