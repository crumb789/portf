<template>
    <div class="contact">
        <div class="contact-wrapper">
            <h4 v-if="language" class="contact-title title">Contacts</h4>
            <h4 v-else class="contact-title title">Контакты</h4>

            
            <div class="contact-social">
                <contact-icons></contact-icons>
            </div>

            <div class="contact-form">
                <form-contact></form-contact>
            </div>
        </div>
    </div>
</template>


<script>
import FormContact from '@/components/contact/FormContact.vue'
import ContactIcons from '@/components/contact/ContactIcons.vue'



export default {
    name:'contacts-comp',
    components:{
        FormContact,
        ContactIcons
    },
    data() {
        return{

        }
    },
    computed:{
        language(){
            return this.$store.state.languageEng
        }
    }
}
</script>


<style lang="scss" scoped>
.contact{
    width: 80%;
    padding: 50px 0;
    background-color: #5CCDC9;
    border-radius: 10px;
    transition: 0.3s all;
    &-title{
        background-color: #5CCDC9;
        margin-bottom: 20px;
    }
    &-wrapper{
        background-color: #5CCDC9;
        transition: 0.3s all;
    }
    &-social{
        background-color: #5CCDC9;
        height: 90px;
    }
}

@media(max-width: 768px){
    .contact{
        &-title{
            font-size: 40px;
        }
    }
}

@media(max-width: 425px){
    .contact{
        width: 100%;
        &-title{
            font-size: 34px;
        }
    }
}
</style>