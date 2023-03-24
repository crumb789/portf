<template>
    <div @mouseenter=" hoverImg = true" @mouseleave="hoverImg = false, coordX = 1, coordY =1" 
        :style="{transform: positionForClass, transition: '0.5'+ 's all' }"   
         class="work-item ">
        <div @mousemove="coordMouse" class="work-image" >
            <a :class="{aHover: hoverImg === true}" :href="work.url" target="_blank">
                <img :style='{boxShadow: positionShadow}' :src="work.path" :alt="work.tag">
            </a>

            <!-- {{coordX}}:{{coordY}} -->
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
            coordY: undefined,

        }
    },
    methods:{
        coordMouse(event) {
            // console.log(event.path.length);
            if(event.path.length === 12){
                this.coordX = 1
                this.coordY = 1
            }
             else {
                this.coordX = event.layerX
                this.coordY = event.layerY

            }


            // console.log(this.coordX, this.coordY)
        }

    },
    computed:{
        positionForClass(){
            if(this.coordX < 150 && this.coordY < 165 && this.coordX  > 1 && this.coordY > 1){
                return `rotate3d(-13, 10, -1, 12deg)`
            }
            if(this.coordX > 150 && this.coordY < 165 && this.coordX  > 1 && this.coordY > 1){
                return `rotate3d(8, 2, 1, 12deg)`
            }
            if(this.coordX > 150 && this.coordY > 165 && this.coordX  > 1 && this.coordY > 1){
                return `rotate3d(1, 9.5, 1, 16deg)`
            }
            if(this.coordX < 300 && this.coordY > 165 && this.coordX  > 1 && this.coordY > 1){
                return `rotate3d(1, 9.5, 1, -16deg)`
            }
            return `rotate3d(1, 1, 1, 0deg)`
        },
        positionShadow(){
            if(this.coordX < 150 && this.coordY < 165 && this.coordX  > 1 && this.coordY > 1){
                return `5px 10px 5px #000`
            }
            if(this.coordX > 150 && this.coordY < 165 && this.coordX  > 1 && this.coordY > 1){
                return `-5px 10px 5px #000`
            }
            if(this.coordX > 150 && this.coordY > 165 && this.coordX  > 1 && this.coordY > 1){
                return `-5px -5px 5px #000`
            }
            if(this.coordX < 300 && this.coordY > 165 && this.coordX  > 1 && this.coordY > 1){
                return `5px -5px 5px #000`
            }
            return ` 3px 3px 10px #000`
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
        transition: 0.5s all;
        a{
            // background-color: #8f8e8e;
            border-radius: 10px;
            transition: 0.5s all;
        }
        img{
            width: 100%;
            border-radius: 10px;
            // box-shadow: 3px 3px 3px #8f8e8e, -5px -5px 18px #00000021;
            border: 1px solid #000;
            transition: 0.5s all;
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

// .image{
//    // width: 100%;
//     // border-radius: 10px;
//     // box-shadow: 3px 3px 3px #8f8e8e, -5px -5px 18px #00000021;
//     // border: 1px solid #000;
// }
</style>