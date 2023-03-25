<template>
    <div class="work">
        <h4 class="work-title title">Projects</h4>
        <div class="work-wrapper">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{

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
        }
        &-title{
            font-size: 34px;
        }
    }
}
</style>