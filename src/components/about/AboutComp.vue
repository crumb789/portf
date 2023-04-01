<template>
    <div class="about">
        <div class="about-wrapper">
            <h1 class="about-wrapper_name">Nikolai <br> Mishchenko
            </h1>
            <div class="about-wrapper_info">FrontEnd Developer <br>
                29 years old, <br> 
                from Saint-Petersburg
            </div>
            <div class="about-wrapper_lang">
                <span @click="$emit('change-lang', 'ru' )" :class="{active: lang === 'ru'} "> RU </span> 
                | 
                <span @click="$emit('change-lang', 'eng' )" :class="{active: lang === 'eng'}" > ENG </span>
            </div>
        </div>

        <div class="about-image">
            <img :src="frontend" alt="frontend img">
        </div>

        <div class="about-descr" id="about">
            <h4 class="about-descr_title title">
                About me
            </h4>
            <p class="about-descr_item">
                <span>
                    Hi, I'm Nikolai – FrontEnd developer from Saint-Petersburg. <br>
                    I'm interested in design and everything connected with it.
                </span>
                <br>
                <span>
                    I'm studying at courses "Web and mobile design <br>
                    interfaces" in IT-Academy.
                </span>
                <br>
                <span>
                    Ready to implement excellent projects <br>
                    with wonderful people.
                </span>
            </p>
        </div>
    </div>
    
</template>

<script>
import frontend from '@/assets/images/frontend.jpg'

export default {
    name:'about-section',
    props:{
        lang:{
            type: String,
        }
    },
    data() {
        return{
            age: undefined,
            frontend,
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.about{
    &-wrapper{
        display: flex;
        height: 120px;
        align-items: center;
        &_name{
            font-size: 47px;
            text-align: left;
            margin-left: 140px;
            font-weight: 400;
        }
        &_info{
            font-size: 18px;
            font-weight: 500;
            margin-right: 310px;
        }
        &_lang{
            transform: rotate(270deg);
            font-weight: 500;
            cursor: pointer;
            margin-right: 115px;
            .active{
                color: #009B95;
                transition: 0.2s all;
            }
        }   
    }
    &-image{
        margin-top: 30px;
        width: 80%;
        // height: 387px;
        background-color: #f6ffef;
        border-radius: 12px 12px 0 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px 10px 0 0;

        }
    }
    &-descr{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 20px;
        min-height: 220px;
        padding: 40px 0;
        color: #2c3e50;
        background-color: #f6ffef;
        width: 80%;
        border-radius: 0 0 10px 10px;
        &_title{
            background-color: #f6ffef;
        }
        &_item{
            background-color: #f6ffef;
            display: flex;
            flex-direction: column;
            span{
                background-color:#f6ffef;
            }
        }
        
    }
}

/////////// media 
@media(max-width: 1024px){
    .about{
        &-wrapper{
            
            &_name{
                font-size: 55px;
                
            }
            &_info{
                font-size: 24px;
                margin-right: 268px;
            }
            &_lang{
                font-size: 22px;
                .active{
                    font-weight: 700;
                }
            }   
        }
        &-image{

        }
        &-descr{
            row-gap: 30px;
            &_title{
                font-size: 36px;
            }
            &_item{
                font-size: 22px;
            }
        }
    }
}


@media(max-width: 768px){
    .about{
        &-wrapper{

            &_name{
                font-size: 55px;
                
            }
            &_info{
                font-size: 24px;
            }
            &_lang{
                font-size: 22px;
                .active{
                    font-weight: 700;
                }
            }   
        }
        &-image{

        }
        &-descr{
            row-gap: 30px;
            &_title{
                font-size: 40px;
            }
            &_item{
                font-size: 26px;
            }
        }
    }
}

@media(max-width: 425px){
    .about{
        &-wrapper{
            position: relative;
            flex-direction: column;
            justify-content: center;
            height: 400px;
            row-gap: 30px;
            &_name{
                margin: 0;
                font-size: 45px;
            }
            &_info{
                margin: 0;
            }
            &_lang{
                margin: 0;
                position: absolute;
                top: 0;
                right: 15px;
                transform: none;
                font-size: 16px;
            }
        }
        &-image{
            margin: 0 auto;
            width: 100%;
        }
        &-descr{
            width: 100%;
            padding: 50px 0;
            
            &_title{
                font-size: 34px;
            }
            &_item{
                span{
                    font-size: 20px;
                }
            }
        }
    }
}
</style>