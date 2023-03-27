<template>
    <div v-if="showUpBtn" @click="$emit('to-up-page')" class="btn btn-up">

    </div>
</template>


<script>
export default {
    data() {
        return{
            showUpBtn: false
        }
    },
    methods:{
        handleScroll(){
            let howScroll = window.pageYOffset

            if(howScroll > 100 ){
                this.showUpBtn = true
            }
            else this.showUpBtn = false
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="scss" scoped>
.btn{
    &-up{
        position: fixed;
        bottom: 50px;
        left: 3%;
        height: 30px;
        width: 19px;
        background: transparent;
        cursor: pointer;
        z-index: 40;
        &::after{
            content: '';
            position: absolute;
            width: 3px;
            height: 35px;
            top: 0;
            right: 0;
            background-color: #5484b0;
            border-radius: 3px;
            transform: rotate(-30deg);
        }
        &::before{
            content: '';
            position: absolute;
            width: 3px;
            height: 35px;
            top: 0;
            left: 0;
            background-color: #5484b0;
            border-radius: 3px;
            transform: rotate(30deg);
        }
    }
}
</style>