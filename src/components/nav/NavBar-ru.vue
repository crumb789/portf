<template>
    <div @click="menuOpen" :class="{burgerActive: menu}" class="menu-line"></div>
    <div :class="{visibleMenu: menu}" class="menu">
        <nav :class="{navActive: menu}">
            <ul>
                <li @click="menu = false" class="nav_item"><a href="#home">Наверх</a></li> <hr>
                <li @click="menu = false" class="nav_item"><a href="#about">Обо мне</a></li> <hr>
                <li @click="menu = false" class="nav_item"><a href="#projects">Проекты</a></li> <hr> 
                <li @click="menu = false" class="nav_item"><a href="#contact">Контакты</a></li> <hr>
            </ul>
            <hr class="divider">
        </nav>
    </div>
</template>


<script>
export default {
    name:'nav-bar-component',
    props:{

    },
    data() {
        return{
            menu: false,
        }
    },
    methods:{
        menuOpen(){
            this.menu = !this.menu
        }
    },
    computed:{
        screenWidth(){
            return window.screen.width
        }
    }
}
</script>


<style lang='scss' scoped >
.menu{
    height: 50px;
    position: relative;
    &_wrapper{
        position: relative;
    }
    &-line{
        position: absolute;
        display: none;
        width: 50px;
        height: 20px;
        // background-color: #ffffef;
        // background-color: #BF6F30;
        cursor: pointer;
        top: 50px;
        left: 25px;
        transition: 0.5s all;
        z-index: 100;
        &::before{
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            background-color: #006561;
            left: 5%;
            top: 5px;
            transition: 0.5s all;
        }
        &::after{
            content: '';
            position: absolute;
            width: 50px;
            height: 2px;
            top: 12px;
            left: -5%;
            background-color: #006561;
            transition: 0.5s all;
        }
    }   
    &-nav{
        opacity: 0;
        transition: 0.5s all;
        ul{
            display: flex;
            flex-direction: column;
            height: 110vh;
            width: 100vw;
            background-color: #006561;
            justify-content: center;
            row-gap: 15px;
            font-size: 20px;
            transition: 0.5s all;
            li{
                cursor: pointer;
            }
            hr{
                width: 5px;
                height: 5px;
                border-radius: 100%;
                border-color: #009b95;
            }
        }
    }
    &_item{
        list-style-type: none;
        transition: 0.5s all;
    }
    
}
.active{
    opacity: 1;
}

.burgerActive{
    width: 32px;
    &::before{
            content: '';
            position: absolute;
            width: 20px;
            height: 2px;
            background-color: #006561;
            left: -2%;
            top: 4px;
            transform: rotate(150deg);
            border-radius: 3px;
        }
        &::after{
            content: '';
            position: absolute;
            width: 20px;
            height: 2px;
            top: 13px;
            left: -2%;
            background-color: #006561;
            transform: rotate(-150deg);
            border-radius: 3px;
        }
}

nav{
    ul{
        display: flex;
        padding: 0;
        hr{
            display: none;
        }
    }
}

.nav{
    &_item{
        a{
            text-decoration: none;
            color: #f8f8ff;
        }
        position: relative;
        list-style-type: none;
        font-weight: 500;
        transition: 0.2s all;
        font-size: 20px;
        cursor: pointer;
        &:hover{
            // text-shadow: 2px 2px 1px #bbb6b6;
            &::before{
                content: " ";  
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #FF9933;
                border-radius: 1px;
            }
        }
        &::before{
            content: " ";  
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: #009999;
            transition: 0.3s all;
            bottom: -22px;
        }
    }
}
.navActive{
    background-color: cadetblue;
}

.divider{
    margin-top: 20px;
    width: 80%;
    border-color: #009b95;
    border-radius: 2px;

}


@media(max-width: 768px){
    .nav{
        &_item{
            font-size: 32px;
        }
    }
}

@media(max-width: 425px){
    .nav{
        &_item{
            font-size: 28px;
            a{
                color: #f8f8ff;
            }
        }
    }
    .burgerActive{
        position: fixed;
    }
    .menu{
        position: fixed;
        height: 100vh;
        width: 100vw;
        left: 0;
        top: 0;
        opacity: 0;
        z-index: -50;
        transition: 0.3s all;
        &-line{
            display: block;
        }
    }
    nav{
        ul{
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            row-gap: 18px;
            li{
                position: relative;
            }
            hr{
                display: block;
                width: 4px;
                height: 4px;
                background-color: #000;
                border-radius: 100%;
                border-color: #009b95;
                
            }
        }
    }

    .visibleMenu{
        opacity: 1;
        z-index: 50;
    }
}
</style>