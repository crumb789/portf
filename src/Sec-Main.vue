<template>
  <section class="contacts" id="contact">
    <div class="container">
      <contacts-comp>

      </contacts-comp>
    </div>
  </section>
</template>


<script>
import ContactsComp from './components/contact/ContactsComp.vue'

// import emailjs from './js/email.min.js'


export default {
  name:'sec-app',
  components:{
    ContactsComp
  },
  data() {
    return{
      // emailjs 
    }
  },
}
</script>



<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0 auto;
  // background-color: #ffffef;
    font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#sec-app{

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
  font-size: 30px;
  font-weight: 500;
}
.subtitle{
  font-size: 22px;
}

.contacts{
  margin-bottom: 60px;

}
</style>
