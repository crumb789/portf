<template>

  <section class="navigation" id="home">
    <div class="container">
      <nav-bar>
      </nav-bar>
    </div>
  </section>

  <section class="about" >
    <div class="container">
      <about-comp 
        :lang='lang'
        
        @change-lang='changeLang'>
      </about-comp>
    </div>
  </section>

  <section class="works" id="projects">
    <div class="container">
      <works-list>
        <work-item v-for="work in works" :key="work.id"
          :work='work'>

        </work-item>
      </works-list>
    </div>
  </section> 

  <section class="skills" id="skills">
    <div class="container">
      <skills-items></skills-items>
    </div>
  </section>

  <to-up-page
    @to-up-page='toUpPageTop'>
  </to-up-page>

</template>



<script>
// components 
import NavBar from '@/components/nav/NavBar.vue'
import AboutComp from '@/components/about/AboutComp.vue'
import SkillsItems from '@/components/skills/SkillsItems.vue'
import WorksList from '@/components/works/WorksList.vue'
import WorkItem from '@/components/works/WorkItem.vue'
import ToUpPage from '@/components/UI/ToUpPage.vue'


// images
import lesson from '@/assets/images/lesson.png'
import pitshav from '@/assets/images/pitshav.png'
import timer from '@/assets/images/timer.png'
import xo from '@/assets/images/xo.png'
import weather from '@/assets/images/weather.png'
import restaurant from '@/assets/images/rest-2.png'




export default {
  name:'app-page',
  components:{
    NavBar,
    AboutComp,
    SkillsItems,
    WorksList,
    WorkItem,
    ToUpPage
  },
  data() {
    return{
      lang: 'eng',
      works: [
        {
          'id': 0,
          'tag': 'Weather-App',
          'path': weather,
          'url':'https://crumb789.github.io/weather-app'

        },
        {
          'id': 1,
          'tag': 'Timer-App',
          'path': timer,
          'url':'https://crumb789.github.io/timer'

        },
        {
          'id': 2,
          'tag': 'Pitshav-Bot',
          'path': pitshav,
          'url':'https://crumb789.github.io/pitshavbot'

        },
        {
          'id': 3,
          'tag': 'Lessons',
          'path': lesson,
          'url':'https://crumb789.github.io/lesson'

        },
        {
          'id': 4,
          'tag': 'Tic-Tac-Toe',
          'path': xo,
          'url':'https://crumb789.github.io/xo-app'

        },
        {
          'id': 5,
          'tag': 'Landing-Page',
          'path': restaurant,
          'url':'https://crumb789.github.io/'

        },
      ]
    }
  },
  methods:{
    changeLang(newLang){
      this.lang = newLang
    },
    toUpPageTop(){
      window.scrollTo(0,0)
    }

  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0 auto;
  // background-color: #ffffef;
}
html{
  background-image: url('@/assets/back/layered-1.svg') ;
  -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
  scroll-behavior: smooth; ///плавная прокрутка по ссылке по стр
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: #fffafa;
  // position: absolute;
}
section{
  // margin-bottom: 60px;
  padding: 30px 0;
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
  padding: 0;
}
.about{
  margin-top: 40px;
  padding: 0;
  // display: none;
}
.works{

}
.skills{
  // padding:0 0 50px 0;
}

button{
  cursor: pointer;
}
////media

@media(max-width: 1280px){
  .container{
    width: 1280px;
  }
}


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
