<template>
    <div class="work">
        <h4 class="work-title title">Works</h4>
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

@media(max-width:425px){
    .work{
        &-wrapper{
            width: 90%;
            gap: 5px;
        }
    }
}
</style>