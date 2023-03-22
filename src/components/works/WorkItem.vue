<template>
    <div @mouseenter="hoverImg = true" @mouseleave="hoverImg = false" class="work-item ">
        <div class="work-image ">
            <a :class="{aHover: hoverImg === true}" :href="work.url" target="_blank">
                <img :src="work.path" :alt="work.tag">
                <h5 :class="{ workHover: hoverImg === true }" class="work-tag title">{{work.tag}}</h5>
            </a>
        </div>
    </div>
</template>


<script>
export default {
    name:'work-item',
    props:{
        work: {
            type: Object
        }
    },
    data() {
        return{
            hoverImg: false,
        }
    },
}
</script>


<style lang="scss" scoped>
.work{
    &-image{
        position: relative;
        background-color: rgb(131, 127, 127);
        border-radius: 10px;

        a{
            // background-color: #8f8e8e;
            border-radius: 10px;
            transition: 0.5s all;
        }
        img{
            width: 100%;
            border-radius: 10px;
            box-shadow: 3px 3px 3px #8f8e8e, -5px -5px 18px #00000021;
            border: 1px solid #000;
        }
    }
    &-tag{
        position: absolute;
        opacity: 0;
        top: 50%;
        left: 50%;
        border-radius: 10px;
        transform: translate(-45%, -25%);
        transition: 0.3s all;
    }

}
.workHover{
    opacity: 2;
    background-color: rgb(131, 127, 127);
    padding: 10px;
    font-size: 34px;
    color: #fff;

}
.aHover{
    opacity: 0.3;
}
</style>