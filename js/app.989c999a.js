(function(){"use strict";var t={2177:function(t,e,o){var a=o(9242),n=o(3396);const s={class:"navigation",id:"home"},i={class:"container"},r={class:"about"},l={class:"container"},c={class:"works",id:"projects"},d={class:"container"},u={class:"skills",id:"skills"},h={class:"container"};function p(t,e,o,a,p,m){const g=(0,n.up)("nav-bar"),v=(0,n.up)("about-comp"),f=(0,n.up)("work-item"),b=(0,n.up)("works-list"),w=(0,n.up)("skills-items"),k=(0,n.up)("to-up-page");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("section",s,[(0,n._)("div",i,[(0,n.Wm)(g)])]),(0,n._)("section",r,[(0,n._)("div",l,[(0,n.Wm)(v,{lang:p.lang,onChangeLang:m.changeLang},null,8,["lang","onChangeLang"])])]),(0,n._)("section",c,[(0,n._)("div",d,[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.works,(t=>((0,n.wg)(),(0,n.j4)(f,{key:t.id,work:t},null,8,["work"])))),128))])),_:1})])]),(0,n._)("section",u,[(0,n._)("div",h,[(0,n.Wm)(w)])]),(0,n.Wm)(k,{onToUpPage:m.toUpPageTop},null,8,["onToUpPage"])],64)}var m=o(7139);const g=t=>((0,n.dD)("data-v-1b3ddd4f"),t=t(),(0,n.Cn)(),t),v=g((()=>(0,n._)("a",{href:"#home"},"Home",-1))),f=[v],b=g((()=>(0,n._)("hr",null,null,-1))),w=g((()=>(0,n._)("a",{href:"#about"},"About",-1))),k=[w],y=g((()=>(0,n._)("hr",null,null,-1))),I=g((()=>(0,n._)("a",{href:"#projects"},"Projects",-1))),C=[I],M=g((()=>(0,n._)("hr",null,null,-1))),x=g((()=>(0,n._)("a",{href:"#contact"},"Contact",-1))),U=[x],W=g((()=>(0,n._)("hr",null,null,-1))),Z=g((()=>(0,n._)("hr",{class:"divider"},null,-1)));function Y(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{onClick:e[0]||(e[0]=(...t)=>i.menuOpen&&i.menuOpen(...t)),class:(0,m.C_)([{burgerActive:s.menu},"menu-line"])},null,2),(0,n._)("div",{class:(0,m.C_)([{visibleMenu:s.menu},"menu"])},[(0,n._)("nav",{class:(0,m.C_)({navActive:s.menu})},[(0,n._)("ul",null,[(0,n._)("li",{onClick:e[1]||(e[1]=t=>s.menu=!1),class:"nav_item"},f),(0,n.Uk)(),b,(0,n._)("li",{onClick:e[2]||(e[2]=t=>s.menu=!1),class:"nav_item"},k),(0,n.Uk)(),y,(0,n._)("li",{onClick:e[3]||(e[3]=t=>s.menu=!1),class:"nav_item"},C),(0,n.Uk)(),M,(0,n._)("li",{onClick:e[4]||(e[4]=t=>s.menu=!1),class:"nav_item"},U),(0,n.Uk)(),W]),Z],2)],2)],64)}var z={name:"nav-bar-component",props:{},data(){return{menu:!1}},methods:{menuOpen(){this.menu=!this.menu}},computed:{screenWidth(){return window.screen.width}}},E=o(89);const R=(0,E.Z)(z,[["render",Y],["__scopeId","data-v-1b3ddd4f"]]);var B=R;const N=t=>((0,n.dD)("data-v-7b4f1d22"),t=t(),(0,n.Cn)(),t),S={class:"about"},G={class:"about-wrapper"},P=N((()=>(0,n._)("h1",{class:"about-wrapper_name"},[(0,n.Uk)("Nikolai "),(0,n._)("br"),(0,n.Uk)(" Mishchenko ")],-1))),A=N((()=>(0,n._)("div",{class:"about-wrapper_info"},[(0,n.Uk)("FrontEnd Developer "),(0,n._)("br"),(0,n.Uk)(" 29 years old, "),(0,n._)("br"),(0,n.Uk)(" from Saint-Petersburg ")],-1))),Q={class:"about-wrapper_lang"},V={class:"about-image"},D=["src"],O=N((()=>(0,n._)("div",{class:"about-descr",id:"about"},[(0,n._)("h4",{class:"about-descr_title title"}," About me "),(0,n._)("p",{class:"about-descr_item"},[(0,n._)("span",null,[(0,n.Uk)(" Hi, I'm Nikolai – FrontEnd developer from Saint-Petersburg. "),(0,n._)("br"),(0,n.Uk)(" I'm interested in design and everything connected with it. ")]),(0,n._)("br"),(0,n._)("span",null,[(0,n.Uk)(" I'm studying at courses \"Web and mobile design "),(0,n._)("br"),(0,n.Uk)(' interfaces" in IT-Academy. ')]),(0,n._)("br"),(0,n._)("span",null,[(0,n.Uk)(" Ready to implement excellent projects "),(0,n._)("br"),(0,n.Uk)(" with wonderful people. ")])])],-1)));function X(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("div",G,[P,A,(0,n._)("div",Q,[(0,n._)("span",{onClick:e[0]||(e[0]=e=>t.$emit("change-lang","ru")),class:(0,m.C_)({active:"ru"===o.lang})}," RU ",2),(0,n.Uk)(" | "),(0,n._)("span",{onClick:e[1]||(e[1]=e=>t.$emit("change-lang","eng")),class:(0,m.C_)({active:"eng"===o.lang})}," ENG ",2)])]),(0,n._)("div",V,[(0,n._)("img",{src:s.frontend,alt:"frontend img"},null,8,D)]),O])}var T=o.p+"img/frontend.39f937b7.jpg",_={name:"about-section",props:{lang:{type:String}},data(){return{age:void 0,frontend:T}},methods:{}};const j=(0,E.Z)(_,[["render",X],["__scopeId","data-v-7b4f1d22"]]);var J=j;const L={class:"skills-wrapper"},H=(0,n.uE)('<h4 class="skills-title title" data-v-0d8e1316> Skills </h4><div style="display:none;" class="skills-subtitle subtitle" data-v-0d8e1316> I work with </div><div class="skills-icons" data-v-0d8e1316><div class="item" data-v-0d8e1316><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" data-v-0d8e1316><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" data-v-0d8e1316></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" data-v-0d8e1316></path></svg></div><div class="item" data-v-0d8e1316><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-v-0d8e1316><title data-v-0d8e1316>file_type_vue</title><path d="M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z" style="fill:#41b883;" data-v-0d8e1316></path><path d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z" style="fill:#41b883;" data-v-0d8e1316></path><path d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z" style="fill:#35495e;" data-v-0d8e1316></path></svg></div><div class="item" data-v-0d8e1316><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-v-0d8e1316><title data-v-0d8e1316>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26;" data-v-0d8e1316></polygon><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a;" data-v-0d8e1316></polygon><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb;" data-v-0d8e1316></polygon><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb;" data-v-0d8e1316></polygon><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff;" data-v-0d8e1316></polygon><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff;" data-v-0d8e1316></polygon></svg></div><div class="item" data-v-0d8e1316><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" data-v-0d8e1316><path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z" data-v-0d8e1316></path></svg></div><div class="item" data-v-0d8e1316><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.678 7.68" width="64" height="64" data-v-0d8e1316><path d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z" fill="#0acf83" data-v-0d8e1316></path><path d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#a259ff" data-v-0d8e1316></path><path d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#f24e1e" data-v-0d8e1316></path><path d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z" fill="#ff7262" data-v-0d8e1316></path><path d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z" fill="#1abcfe" data-v-0d8e1316></path></svg></div></div>',3),K=[H];function F(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",L,K)}var q={data(){return{}}};const $=(0,E.Z)(q,[["render",F],["__scopeId","data-v-0d8e1316"]]);var tt=$;const et=t=>((0,n.dD)("data-v-6bfbd470"),t=t(),(0,n.Cn)(),t),ot={class:"work"},at=et((()=>(0,n._)("h4",{class:"work-title title"},"Projects",-1)));function nt(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",ot,[at,(0,n._)("div",{class:(0,m.C_)(["work-wrapper",{showAll:s.showMore}])},[(0,n.WI)(t.$slots,"default",{},void 0,!0)],2),s.showMore?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>s.showMore=!s.showMore),class:"btn-show"},"Show more...")),s.showMore?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:e[1]||(e[1]=t=>s.showMore=!s.showMore),class:"btn-hide"},"Hide")):(0,n.kq)("",!0)])}var st={data(){return{showMore:!1}}};const it=(0,E.Z)(st,[["render",nt],["__scopeId","data-v-6bfbd470"]]);var rt=it;const lt=["href"],ct=["src","alt"],dt=["href"];function ut(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",{onMouseenter:e[1]||(e[1]=t=>s.hoverImg=!0),onMouseleave:e[2]||(e[2]=t=>(s.hoverImg=!1,s.coordX=1,s.coordY=1)),style:(0,m.j5)({transform:i.positionForClass,transition:"0.5s all"}),class:"work-item"},[(0,n._)("div",{onMousemove:e[0]||(e[0]=(...t)=>i.coordMouse&&i.coordMouse(...t)),class:"work-image"},[(0,n._)("a",{class:(0,m.C_)({aHover:!0===s.hoverImg}),href:o.work.url,target:"_blank"},[(0,n._)("img",{style:(0,m.j5)({boxShadow:i.positionShadow}),src:o.work.path,alt:o.work.tag},null,12,ct)],10,lt),(0,n._)("div",{class:(0,m.C_)([{workHover:!0===s.hoverImg},"work-tag title"])},[(0,n._)("a",{href:o.work.url,target:"_blank"},(0,m.zw)(o.work.tag),9,dt)],2)],32)],36)}var ht={name:"work-item",props:{work:{type:Object}},data(){return{hoverImg:!1,coordX:void 0,coordY:void 0}},methods:{coordMouse(t){"a"===t.srcElement.localName?(this.coordX=1,this.coordY=1):(this.coordX=t.layerX,this.coordY=t.layerY)}},computed:{positionForClass(){return this.coordX<150&&this.coordY<165&&this.coordX>1&&this.coordY>1?"rotate3d(-13, 10, -1, 12deg)":this.coordX>150&&this.coordY<165&&this.coordX>1&&this.coordY>1?"rotate3d(8, 2, 1, 12deg)":this.coordX>150&&this.coordY>165&&this.coordX>1&&this.coordY>1?"rotate3d(1, 9.5, 1, 16deg)":this.coordX<300&&this.coordY>165&&this.coordX>1&&this.coordY>1?"rotate3d(1, 9.5, 1, -16deg)":"rotate3d(1, 1, 1, 0deg)"},positionShadow(){return this.coordX<150&&this.coordY<165&&this.coordX>1&&this.coordY>1?"4px 8px 5px #000":this.coordX>150&&this.coordY<165&&this.coordX>1&&this.coordY>1?"-4px 8px 5px #000":this.coordX>150&&this.coordY>165&&this.coordX>1&&this.coordY>1?"-5px -5px 5px #000":this.coordX<300&&this.coordY>165&&this.coordX>1&&this.coordY>1?"5px -5px 5px #000":" 3px 3px 10px #000"}}};const pt=(0,E.Z)(ht,[["render",ut],["__scopeId","data-v-58e2be0e"]]);var mt=pt;function gt(t,e,o,a,s,i){return s.showUpBtn?((0,n.wg)(),(0,n.iD)("div",{key:0,onClick:e[0]||(e[0]=e=>t.$emit("to-up-page")),class:"btn btn-up"})):(0,n.kq)("",!0)}var vt={data(){return{showUpBtn:!1}},methods:{handleScroll(){let t=window.pageYOffset;this.showUpBtn=t>100}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}};const ft=(0,E.Z)(vt,[["render",gt],["__scopeId","data-v-14c89e06"]]);var bt=ft,wt=o.p+"img/lesson.4767d50c.png",kt=o.p+"img/pitshav.a8f91c52.png",yt=o.p+"img/timer.42625ed0.png",It=o.p+"img/xo.0b3b72cf.png",Ct=o.p+"img/weather.594affcd.png",Mt=o.p+"img/rest-2.8a04705a.png",xt=o.p+"img/diff.15fd1d22.png",Ut={name:"app-page",components:{NavBar:B,AboutComp:J,SkillsItems:tt,WorksList:rt,WorkItem:mt,ToUpPage:bt},data(){return{lang:"eng",works:[{id:0,tag:"Weather-App",path:Ct,url:"https://crumb789.github.io/weather-app"},{id:1,tag:"Timer-App",path:yt,url:"https://crumb789.github.io/timer"},{id:2,tag:"Pitshav-Bot",path:kt,url:"https://crumb789.github.io/pitshavbot"},{id:3,tag:"Lessons",path:wt,url:"https://crumb789.github.io/lesson"},{id:4,tag:"Tic-Tac-Toe",path:It,url:"https://crumb789.github.io/xo-app"},{id:5,tag:"Landing-Page",path:Mt,url:"https://crumb789.github.io/"},{id:6,tag:"Different",path:xt,url:"https://crumb789.github.io/different/"}]}},methods:{changeLang(t){this.lang=t},toUpPageTop(){window.scrollTo(0,0)}}};const Wt=(0,E.Z)(Ut,[["render",p]]);var Zt=Wt,Yt=o(2483),zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";const Et={class:"home"},Rt=(0,n._)("img",{alt:"Vue logo",src:zt},null,-1),Bt=[Rt];function Nt(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",Et,Bt)}var St={name:"HomeView",components:{}};const Gt=(0,E.Z)(St,[["render",Nt]]);var Pt=Gt;const At=[{path:"/",name:"home",component:Pt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],Qt=(0,Yt.p7)({history:(0,Yt.PO)("/portf/"),routes:At});var Vt=Qt,Dt=o(65),Ot=(0,Dt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Xt={class:"contacts",id:"contact"},Tt={class:"container"};function _t(t,e,o,a,s,i){const r=(0,n.up)("contacts-comp");return(0,n.wg)(),(0,n.iD)("section",Xt,[(0,n._)("div",Tt,[(0,n.Wm)(r)])])}const jt=t=>((0,n.dD)("data-v-7cc6f9ef"),t=t(),(0,n.Cn)(),t),Jt={class:"contact"},Lt={class:"contact-wrapper"},Ht=jt((()=>(0,n._)("h4",{class:"contact-title title"},"Contacts",-1))),Kt={class:"contact-social"},Ft={class:"contact-form"};function qt(t,e,o,a,s,i){const r=(0,n.up)("contact-icons"),l=(0,n.up)("form-contact");return(0,n.wg)(),(0,n.iD)("div",Jt,[(0,n._)("div",Lt,[Ht,(0,n._)("div",Kt,[(0,n.Wm)(r)]),(0,n._)("div",Ft,[(0,n.Wm)(l)])])])}const $t=t=>((0,n.dD)("data-v-1e1b6d8b"),t=t(),(0,n.Cn)(),t),te={class:"form"},ee={class:"form-item",id:"name-input"},oe=$t((()=>(0,n._)("label",{for:"user_name"},"Your Name",-1))),ae={class:"form-item",id:"mail-input"},ne=$t((()=>(0,n._)("label",{for:"user_email"},"Your Email",-1))),se={class:"form-item",id:"textarea-input"},ie=$t((()=>(0,n._)("label",{for:"message"},"Message",-1))),re={class:"submit-wrapper"},le=$t((()=>(0,n._)("button",{class:"btn",id:"button-submit"}," submit ",-1))),ce={key:0,class:"message"},de={key:1,class:"message message-false"};function ue(t,e,o,s,i,r){const l=(0,n.up)("loader-comp");return(0,n.wg)(),(0,n.iD)("div",te,[(0,n._)("form",{onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>r.submitBtn&&r.submitBtn(...t)),["prevent"])),action:"#"},[(0,n._)("div",ee,[oe,(0,n.wy)((0,n._)("input",{type:"text",id:"user_name",name:"user_name","onUpdate:modelValue":e[0]||(e[0]=t=>i.userName=t),required:""},null,512),[[a.nr,i.userName]])]),(0,n._)("div",ae,[ne,(0,n.wy)((0,n._)("input",{type:"email",id:"user_email",name:"user_email","onUpdate:modelValue":e[1]||(e[1]=t=>i.userMail=t),required:""},null,512),[[a.nr,i.userMail]])]),(0,n._)("div",se,[ie,(0,n.wy)((0,n._)("textarea",{name:"message","onUpdate:modelValue":e[2]||(e[2]=t=>i.userMessage=t)},null,512),[[a.nr,i.userMessage]])]),(0,n._)("div",re,[le,i.loaderShow?((0,n.wg)(),(0,n.j4)(l,{key:0})):(0,n.kq)("",!0)])],32),i.showMessage?((0,n.wg)(),(0,n.iD)("div",ce," Send! ")):(0,n.kq)("",!0),i.showMessageFalse?((0,n.wg)(),(0,n.iD)("div",de," Sending error... ")):(0,n.kq)("",!0)])}var he=o(3079);const pe=t=>((0,n.dD)("data-v-4897dff7"),t=t(),(0,n.Cn)(),t),me=pe((()=>(0,n._)("div",{class:"loader"},[(0,n._)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"})])],-1))),ge=pe((()=>(0,n._)("div",{class:"one"},null,-1)));function ve(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[me,ge],64)}var fe={name:"loader-comp",props:{},data(){return{}}};const be=(0,E.Z)(fe,[["render",ve],["__scopeId","data-v-4897dff7"]]);var we=be,ke={name:"form-contact",components:{LoaderComp:we},data(){return{userName:"",userMail:"",userMessage:"",showMessage:!1,showMessageFalse:!1,serv:"service_654gau7",templ:"template_2uuliqb",key:"QccUYVTCDVBSE0JEN",loaderShow:!1}},methods:{submitBtn(){this.sendEmail()},async sendEmail(){var t={name:this.userName,mail:this.userMail,message:this.userMessage};this.loaderShow=!0,await he.ZP.send(this.serv,this.templ,t,this.key).then((t=>{console.log("Mail Send!",t.text),this.showMessage=!0,this.deleteString(),this.loaderShow=!1,setTimeout((()=>this.showMessage=!1),3e3)}),(t=>{console.log("Sending error...try later",t.text),this.showMessageFalse=!0,this.loaderShow=!1,setTimeout((()=>this.showMessage=!1),3e3)}))},deleteString(){let t=()=>{this.userMessage=this.userMessage.substring(0,this.userMessage.length-1),0===this.userMessage.length&&clearInterval(e)},e=setInterval(t,10)}}};const ye=(0,E.Z)(ke,[["render",ue],["__scopeId","data-v-1e1b6d8b"]]);var Ie=ye;const Ce=t=>((0,n.dD)("data-v-57fd19b3"),t=t(),(0,n.Cn)(),t),Me={class:"icons-wrapper"},xe=["href"],Ue=["src"],We=["href"],Ze=Ce((()=>(0,n._)("svg",{"enable-background":"new 0 0 128 128",id:"github",version:"1.1",viewBox:"0 0 128 128","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,n._)("g",{id:"_x31__stroke"},[(0,n._)("g",{id:"Github_1_"},[(0,n._)("rect",{"clip-rule":"evenodd",fill:"none","fill-rule":"evenodd",height:"128",width:"128"}),(0,n._)("path",{"clip-rule":"evenodd",d:"M63.996,1.333C28.656,1.333,0,30.099,0,65.591    c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927    c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907    c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59    c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003    c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165    c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244    c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626    c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333",fill:"#3E75C3","fill-rule":"evenodd",id:"Github"})])])],-1))),Ye=[Ze];function ze(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",Me,[(0,n._)("a",{href:s.linkTelegram,target:"_blank",class:"icons-item",title:"contact by telegram"},[(0,n._)("img",{src:s.logo,alt:"logo-crumb"},null,8,Ue)],8,xe),(0,n._)("a",{href:s.linkGithub,target:"_blank",class:"icons-item",title:"github"},Ye,8,We)])}var Ee=o.p+"img/crumb-logo.962c51d5.png",Re={name:"contact-icons",data(){return{linkTelegram:"https://t.me/crumb789",linkGithub:"https://github.com/crumb789",logo:Ee}}};const Be=(0,E.Z)(Re,[["render",ze],["__scopeId","data-v-57fd19b3"]]);var Ne=Be,Se={name:"contacts-comp",components:{FormContact:Ie,ContactIcons:Ne},data(){return{}}};const Ge=(0,E.Z)(Se,[["render",qt],["__scopeId","data-v-7cc6f9ef"]]);var Pe=Ge,Ae={name:"sec-app",components:{ContactsComp:Pe},data(){return{}}};const Qe=(0,E.Z)(Ae,[["render",_t]]);var Ve=Qe;(0,a.ri)(Zt).use(Ot).use(Vt).mount("#app"),(0,a.ri)(Ve).use(Ot).use(Vt).mount("#sec-app")}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,s){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],s=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<i&&(i=s));if(r){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,n,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,a){return o.f[a](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.98b80af0.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portf-v1:";o.l=function(a,n,s,i){if(t[a])t[a].push(n);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+s){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",e+s),r.src=a),t[a]=[n];var h=function(e,o){r.onerror=r.onload=null,clearTimeout(p);var n=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(o)})),e)return e(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/portf/"}(),function(){var t={143:0};o.f.j=function(e,a){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var s=new Promise((function(o,a){n=t[e]=[o,a]}));a.push(n[2]=s);var i=o.p+o.u(e),r=new Error,l=function(a){if(o.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",r.name="ChunkLoadError",r.type=s,r.request=i,n[1](r)}};o.l(i,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],r=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var d=l(o)}for(e&&e(a);c<i.length;c++)s=i[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(d)},a=self["webpackChunkportf_v1"]=self["webpackChunkportf_v1"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(2177)}));a=o.O(a)})();
//# sourceMappingURL=app.989c999a.js.map