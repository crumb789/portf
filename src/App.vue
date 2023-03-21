<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <section class="navigation" id="home">
    <div class="container">
      <nav-bar>
      </nav-bar>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <about-comp 
        :lang='lang'
        
        @change-lang='changeLang'>
      </about-comp>
    </div>
  </section>

  <section class="skills" id="skills">
    <div class="container">
      <skills-items></skills-items>
    </div>
  </section>

</template>



<script>
import NavBar from '@/components/nav/NavBar.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import SkillsItems from '@/components/skills/SkillsItems.vue'


export default {
  name:'app-page',
  components:{
    NavBar,
    AboutComp,
    SkillsItems
  },
  data() {
    return{
      lang: 'eng',
    }
  },
  methods:{
    changeLang(newLang){
      this.lang = newLang
    },

  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #ffffef;
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // position: absolute;
}

.container{
  width: 1440px;
}

.title{
  font-size: 30px;
  font-weight: 500;
}
.subtitle{
  font-size: 22px;
}


.navigation{
  margin-top: 30px;
}
.about{
  margin-top: 40px;
  // display: none;
}
.skills{
  padding: 50px 0;
}


////media
@media(max-width: 425px){
  .container{
    width: 320px;
  }

  .about{
    margin-top: 60px;
    margin-bottom: 40px;
  }
}
</style>
