<template>
    <div class="form">
        <form @submit.prevent='submitBtn' action="#">
                <!-- input name for templates letters -->
                <div class="form-item" id="name-input">
                    <label for="user_name">Your Name</label>
                    <input type="text" id="user_name" name="user_name" v-model="userName" required>
                </div>
                    
                <div class="form-item" id="mail-input">
                    <label for="user_email">Your Email</label>
                    <input type="email" id="user_email" name="user_email" v-model="userMail" required>
                </div>
                
                <div class="form-item" id="textarea-input">
                    <label for="message">Message</label>
                    <textarea name="message"  v-model="userMessage"></textarea>     
                </div>             
        
                <div class="submit-wrapper">
                    <button class="btn" id="button-submit"> submit </button> 
                    <loader-comp v-if="loaderShow"></loader-comp>
                </div>
        </form>

        

        <div v-if="showMessage" class="message">
            Send!
        </div>
        <div v-if="showMessageFalse" class=" message message-false">
            Sending error...
        </div>
    </div>
</template>


<script>
import emailjs from '@emailjs/browser';

import LoaderComp from '@/components/UI/LoaderComp.vue'

console.log(emailjs)

export default {
    name:"form-contact",
    components:{
        LoaderComp,
    },
    data() {
        return{
            userName: '',
            userMail: '',
            userMessage: '',

            showMessage: false,
            showMessageFalse: false,

            serv: 'service_654gau7',
            templ: 'template_2uuliqb',
            key: 'QccUYVTCDVBSE0JEN',

            loaderShow: false
        }
    },
    methods:{
        submitBtn(){
            this.sendEmail()
        },

        async sendEmail() {
            // формируем данные для письма, в шаблоне отображение по имени ключа
            var template = {
                name: this.userName,
                mail: this.userMail,
                message: this.userMessage,
            };
            

            // отправка на сервер
            this.loaderShow = true
            await  emailjs.send(this.serv, this.templ, template, this.key)
            .then((result) => {
                    console.log('Mail Send!', result.text);
                    this.showMessage = true
                    this.deleteString()
                    this.loaderShow = false
                    setTimeout(() => this.showMessage = false, 3000)
                }, (error) => {
                    console.log('Sending error...try later', error.text);                    
                    this.showMessageFalse = true
                    this.loaderShow = false
                    setTimeout(() => this.showMessage = false, 
                    3000)
                }) 

        },
        deleteString(){
            let deletString = () =>{
                this.userMessage = this.userMessage.substring(0, this.userMessage.length - 1);

                
                if(this.userMessage.length === 0){
                    clearInterval(deletStringInterval)   /* удаление текста по букве */
                }
            }
            let deletStringInterval = setInterval( deletString , 10)

        },
    }
}
</script>

<style lang="scss" scoped>
form{
    background-color: #5CCDC9;
    row-gap: 30px;
    margin-top: 25px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
}
.form{
    background-color: #5CCDC9;
    &-item{
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        input{
            width: 250px;
            height: 30px;
            border: none;
            border: none; /* <-- This thing here */
            border:solid 1px #ccc;
            border-radius: 10px;
            background: #fbfbfb;
            outline : none;
            
        }
        label{
            position: absolute;
            left: -50%;
            background-color: #5CCDC9;
            font-weight: 600;
        }
        textarea{
            width: 250px;
            min-height: 150px;
            resize: vertical;
            background: #fbfbfb;
            text-align: left;
            padding: 10px;
            border:solid 1px #ccc;
            border-radius: 10px;
        }
    }
}
.btn{
    border: solid 1px #646464;
    width: 150px;
    height: 30px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 2px 2px #2c3d50;
    transition: 0.3s all;
    &:hover{
        box-shadow: 3px 3px #2c3d50;    
    }
}
.message{
    margin-top: 20px;
    background-color: #5CCDC9;
    &-false{
        color: #fbfbfb;
        font-weight: 500;
    }
}

.submit-wrapper{
    position: relative;
    border-radius: 5px;
}


#name-input{
    grid-area: a;
    background-color: #5CCDC9;
}
#mail-input{
    grid-area: b;
    background-color: #5CCDC9;
}
#textarea-input{
    grid-area: c;
    background-color: #5CCDC9;
}
#button-submit{
    grid-area: d;
}




@media(max-width: 425px){
    .form{
        &-item{
            flex-direction: column;
            row-gap: 5px;
            label{
                position: initial;
                background-color: #5CCDC9;
            }
        }
    }
}
</style>