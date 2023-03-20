<template>
    <div class="contact">
        <div class="contact-wrapper">
            <h4 class="contact_title title">Contacts</h4>
            
            <div class="contact-social">icons be here</div>

            <div class="contact-form">
                <form-contact></form-contact>
            </div>
        </div>
    </div>
</template>


<script>
import FormContact from '@/components/contact/FormContact.vue'


export default {
    name:'contacts-comp',
    components:{
        FormContact
    },
    data() {
        return{

        }
    },
}
</script>


<style lang="scss" scoped>
.contact{
    width: 80%;
    padding: 50px 0;
    background-color: #5CCDC9;
    border-radius: 10px;
    transition: 0.3s all;
    &_title{
        background-color: #5CCDC9;
    }
    &-wrapper{
        background-color: #5CCDC9;
        transition: 0.3s all;
    }
    &-social{
        background-color: #5CCDC9;
    }
}


@media(max-width: 425px){
    .contact{
        width: 100%;
    }
}
</style>