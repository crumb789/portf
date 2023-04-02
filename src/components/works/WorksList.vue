<template>
    <div class="work">
        <h4 class="work-title title">Projects</h4>
        <div class="work-wrapper" :class="{showAll: showMore }">
            <slot></slot>
        </div>
        <button v-if="!showMore" @click="showMore = !showMore" class="btn-show">Show more...</button>
        <button v-if="showMore" @click="showMore = !showMore" class="btn-hide">Hide</button>

    </div>
</template>


<script>
export default {
    data() {
        return{
            showMore: false
        }
    },
}
</script>

<style lang="scss" scoped>
.work{
    &-title{
        margin-bottom: 40px;
    }
    &-wrapper{
        display: grid;
        width: 80%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 20px;
        transition: 0.3s all;

        height: 700px;
        overflow: hidden;
    }
}
button{
    position: relative;
    margin-top: 20px;
    background: transparent;
    border: none;
    color: #009b96;
    font-weight: 500;
}
.btn{
    &-show{
        &:hover{
            &::after{
                content: "";
                position: absolute;
                width: 10px;
                height: 2px;
                right: -20px;
                top: 50%;
                background-color: #009b96;
                transform: rotate(135deg);
                animation: moveArrowDown 1s infinite linear;
            }
            &::before{
                content: "";
                position: absolute;
                width: 10px;
                height: 2px;
                right: -14px;
                top: 50%;
                transform: rotate(-135deg);
                background-color: #009b96;
                animation: moveArrowDown 1s infinite linear;
            }
        }
    }
    &-hide{
            &::after{
                content: "";
                position: absolute;
                width: 10px;
                height: 2px;
                right: -20px;
                top: 80%;
                background-color: #009b96;
                transform: rotate(-135deg);
                animation: moveArrowUp 1.5s infinite linear;
            }
            &::before{
                content: "";
                position: absolute;
                width: 10px;
                height: 2px;
                right: -14px;
                top: 80%;
                transform: rotate(135deg);
                background-color: #009b96;
                animation: moveArrowUp 1.5s infinite linear;
            }
    }
}

.showAll{
    height: auto;
}

@keyframes moveArrowDown{
    from{
        top: 20%;
    }
    to{
        top: 100%;
        opacity: 0;
    }
}
@keyframes moveArrowUp{
    from{
        top: 80%;
    }
    to{
        top: 0%;
        opacity: 0;
    }
}
@media(max-width:768px){
    .work{
        &-wrapper{
            
        }
        &-title{
            font-size: 40px;
        }
    }
}
@media(max-width:425px){
    .work{
        &-wrapper{
            grid-template-columns: repeat(2, 1fr);
            width: 90%;
            column-gap: 5px;
            row-gap: 10px;

            height: 465px;
        }
        &-title{
            font-size: 34px;
        }
    }

    .showAll{
        height: auto;
        overflow: auto;
    }
}
</style>