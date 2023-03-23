<template>
    <div @mouseenter=" hoverImg = true" @mouseleave="hoverImg = false" class="work-item ">
        <div @mousemove="coordMouse" class="work-image">
            <a :class="{aHover: hoverImg === true}" :href="work.url" target="_blank">
                <img :src="work.path" :alt="work.tag">
            </a>
            <h5 :class="{ workHover: hoverImg === true }" class="work-tag title">{{work.tag}}</h5>
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
            coordX: undefined,
            coordY: undefined
        }
    },
    methods:{
        coordMouse(event) {
            // console.log(event);

            this.coordX = event.layerX
            this.coordY = event.layerY
            console.log(this.coordX, this.coordY)
        }

    }
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
        min-width: 60%;
        width: 90%;
        border-radius: 10px;
        transform: translate(-50%, -25%);
        transition: 0.3s all;
        cursor: pointer;
    }

}
.workHover{
    opacity: 1;
    background-color: rgb(202, 202, 202);
    padding: 10px;
    border: 1px solid #000;
    font-size: 34px;
    color: #fff;
    text-shadow: 1px 1px 1px #000;

}
.aHover{
    opacity: 0.5;
}
</style>