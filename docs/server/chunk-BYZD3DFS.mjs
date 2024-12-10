import './polyfills.server.mjs';
import{A as H,D as A,F as w,G as C,H as M,I as x,J as N,K as O,N as P,T as z,a as s,b as f,c as u,d as h,e as F,f as p,g as v,h as d,i as e,j as n,k as r,l as y,m as S,n as T,o as I,p as i,q as b,r as _,s as j,t as m,u as B,v as k}from"./chunk-76HG5IP6.mjs";var ne=(t,c)=>({"blur-[0px] rounded-sm sticky opacity-100 transform translate-y-0":t,"blur-[0px] left-0 right-0 opacity-0 transform -translate-y-2":c}),ie=(t,c)=>({"blur-[100px] opacity-100 transform translate-y-0":t,"blur-[0px] opacity-0 transform -translate-y-2":c}),L=(()=>{class t{isScrolledDown=!1;onWindowScroll(){this.isScrolledDown=window.scrollY>0}ngOnInit(){}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-tab"]],hostBindings:function(o,l){o&1&&y("scroll",function(){return l.onWindowScroll()},!1,F)},standalone:!0,features:[m],decls:2,vars:8,consts:[[1,"fixed","top-0","z-50","h-[10px]","w-full","bg-[#38BDF8]","transition-all","duration-1000",3,"ngClass"],[1,"sticky","left-0","right-0","top-0","z-50","h-[50px]","w-full","bg-[#38BDF8]","transition-all","duration-1000",3,"ngClass"]],template:function(o,l){o&1&&r(0,"div",0)(1,"div",1),o&2&&(d("ngClass",k(2,ne,l.isScrolledDown,!l.isScrolledDown)),p(),d("ngClass",k(5,ie,l.isScrolledDown,!l.isScrolledDown)))},dependencies:[x,w]})}return t})();var U=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-blurback"]],standalone:!0,features:[m],decls:1,vars:0,consts:[[1,"fixed","-bottom-2","left-0","h-[58px]","shadow-2xl","blur-lg","w-full","text-black"]],template:function(o,l){o&1&&r(0,"div",0)}})}return t})();var V=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-my"]],standalone:!0,features:[m],decls:8,vars:0,consts:[[1,"flex","items-center","gap-5","justify-between"],[1,"flex","flex-col","gap-2"],[1,"inline-block","text-3xl","font-bold","tracking-tighter","sm:text-5xl","xl:text-6xl/none"],[1,"max-w-[300px]","md:max-w-[500px]","text-[14px]","md:text-[16px]"],["src","/Prabhas.jpg","alt","Prabhas","width","150","height","150",1,"rounded-full"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),i(3," Hi, I'm Prabhas \u{1F44B} "),n(),e(4,"p",3),i(5," Frontend Developer, Part-Time Freelancer. I love building things and helping people. I'm currently learning Tailwind CSS and Three JS. "),n()(),e(6,"div"),r(7,"img",4),n()())}})}return t})();var G=(()=>{class t{getprint(){let o=window.open("/prabhas_resume.pdf","_blank");o?o.onload=function(){o.print()}:alert("something went wrong")}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-about"]],standalone:!0,features:[m],decls:21,vars:0,consts:[[1,"font-bold","text-xl"],[1,"text-[15px]","text-gray-600","dark:text-gray-500"],[1,"font-semibold","text-black"],[1,"mt-4","col-start-1","row-start-3","self-center","grid","justify-items-center","sm:mt-0","sm:col-start-2","sm:row-start-2","sm:row-span-2","lg:mt-6","lg:col-start-1","lg:row-start-3","lg:row-end-4"],["type","button",1,"bg-sky-500","text-white","text-sm","leading-6","font-medium","py-2","px-3","rounded-lg","hover:bg-gray-400","hover:text-black","hover:border-slate-900","hover:rounded-lg",3,"click"]],template:function(o,l){o&1&&(e(0,"div")(1,"p",0),i(2,"About"),n(),e(3,"p",1),i(4," Hello there! I'm Prabhas Utla, an Engineer-I at Comunus Technologies. I hold a Bachelor of Science degree in Information Technology from B.N.N. College in Mumbai, India. I am an experienced "),e(5,"span",2),i(6," Angular Developer "),n(),i(7," with over one year of experience in "),e(8,"span",2),i(9," front-end development "),n(),i(10,", specializing in creating intuitive and responsive user interfaces that deliver exceptional user experiences."),r(11,"br"),i(12," Skilled in "),e(13,"span",2),i(14," HTML, CSS, JavaScript, TypeScript, and Angular, ionic, "),n(),i(15," with additional expertise in UI design. I am passionate about leveraging my technical skills to contribute to the success of innovative projects and drive the growth of a forward-thinking company. Seeking a challenging role where I can continue to develop my skills and make a meaningful impact "),r(16,"span",2),i(17," and I am ready to contribute to innovative projects and make a meaningful impact. "),n(),e(18,"div",3)(19,"button",4),y("click",function(){return l.getprint()}),i(20,"Checkout Resume"),n()()())}})}return t})();var oe=(t,c)=>({"rotate-90":t,"animate-bounce group-hover:text-black dark:group-hover:text-white":c});function re(t,c){if(t&1&&(e(0,"li",18),f(),e(1,"svg",19),r(2,"circle",20),n(),u(),e(3,"p",21),i(4),n()()),t&2){let a=c.$implicit;p(4),b(a)}}function ae(t,c){if(t&1&&(e(0,"div",15)(1,"p",16),i(2," As a Frontend Develper at ComUnus, I specialize in developing and optimizing our High-Tech farm platform using Angular . My role involves designing and implementing dynamic, responsive user interfaces to enhance the User experience for our Clients. "),n(),e(3,"div",15)(4,"ul"),v(5,re,5,1,"li",17),n()()()),t&2){let a=S();p(5),d("ngForOf",a.responsibilities)}}var W=(()=>{class t{isOpen=!1;responsibilities=["Building and maintaining scalable and high-performance web applications with Angular .","Implementing best practices to ensure fast loading times and smooth interactions across various devices.","Working closely with design and backend teams to deliver seamless integration and innovative solutions for complex problems."];toggleOpen(){this.isOpen=!this.isOpen}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-workexperience"]],standalone:!0,features:[m],decls:21,vars:5,consts:[[1,"flex","flex-col","gap-4"],[1,"text-xl","font-bold"],[1,"flex","items-start","justify-between"],[1,"flex","items-start","gap-3","w-full"],[1,"avatar","border-[2px]","dark:border-gray-300","rounded-md"],["src","/Comunus.jpg","alt","Avatar",1,"avatar-image","max-h-10"],[1,"flex","flex-col","flex-1","items-start","w-full","justify-between","cursor-pointer","group",3,"click"],[1,"flex","items-start","justify-between","w-full"],[1,"flex","items-center","gap-2"],[1,"inline-flex","font-semibold","leading-none","text-xs","sm:text-sm"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"inline-block","w-4","h-4","ml-1","text-gray-400","transform","transition-transform","duration-400",3,"ngClass"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 5l7 7-7 7"],[1,"font-sans","text-xs"],[1,"font-medium","hidden","md:block","text-gray-500","text-sm","md:text-[14px]"],["class","mt-2",4,"ngIf"],[1,"mt-2"],[1,"font-normal","text-gray-600","dark:text-gray-500","text-[14px]"],["class","flex items-start gap-2 text-gray-600 dark:text-gray-500",4,"ngFor","ngForOf"],[1,"flex","items-start","gap-2","text-gray-600","dark:text-gray-500"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-4","h-4","text-gray-600","dark:text-gray-500"],["cx","12","cy","12","r","2"],[1,"text-[14px]"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"p",1),i(2,"Work Experience"),n(),e(3,"div",2)(4,"div",3)(5,"div",4),r(6,"img",5),n(),e(7,"div",6),y("click",function(){return l.toggleOpen()}),e(8,"div",7)(9,"div")(10,"div",8)(11,"p",9),i(12," Comunus Technologies Pvt Ltd "),n(),f(),e(13,"svg",10),r(14,"path",11),n()(),u(),e(15,"p",12),i(16," FRONTEND DEVELOPER (Angular) "),n()(),e(17,"div")(18,"p",13),i(19," August 2024 - Present "),n()()(),v(20,ae,6,1,"div",14),n()()()()),o&2&&(p(13),d("ngClass",k(2,oe,l.isOpen,!l.isOpen)),p(7),d("ngIf",l.isOpen))},dependencies:[x,w,C,M]})}return t})();var R=(()=>{class t{degree;name;startDate;endDate;image;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-education"]],inputs:{degree:"degree",name:"name",startDate:"startDate",endDate:"endDate",image:"image"},standalone:!0,features:[m],decls:9,vars:6,consts:[[1,"flex","items-center","gap-4"],[1,"w-16","h-16","rounded-full",3,"src","alt"],[1,"font-bold","text-sm","sm:text-base"],[1,"text-gray-600","dark:text-gray-400","text-xs","sm:text-sm"],[1,"text-gray-500","text-xs","sm:text-sm"]],template:function(o,l){o&1&&(e(0,"div",0),r(1,"img",1),e(2,"div")(3,"p",2),i(4),n(),e(5,"p",3),i(6),n(),e(7,"p",4),i(8),n()()()),o&2&&(p(),d("src",l.image,h)("alt",l.name),p(3),b(l.degree),p(2),_(" ",l.name," "),p(2),j(" ",l.startDate," - ",l.endDate," "))}})}return t})();var $=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-educationsection"]],standalone:!0,features:[m],decls:7,vars:0,consts:[[1,"flex","flex-col","gap-4"],[1,"text-xl","font-bold"],[1,"flex","flex-col","gap-4","w-full"],["degree","Bachelor in Information Technology","name","B.N.N College, Bhiwandi","startDate","2020","endDate","2023","image","/college.jpg"],["degree","12th Commerce","name","B.N.N College, Bhiwandi","startDate","2019","endDate","2020","image","/college.jpg"],["degree","10th STD","name","P.E.M High School, Bhiwandi","startDate","2017","endDate","2018","image","/school.jpg"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"p",1),i(2,"Education"),n(),e(3,"div",2),r(4,"app-education",3)(5,"app-education",4)(6,"app-education",5),n()())},dependencies:[R]})}return t})();var le=["*"],se=t=>["inline-flex items-center rounded-full border px-2.5 bg-slate-800 text-slate-100 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-gray-400 hover:text-black hover:border-slate-200",t],J=(()=>{class t{variant="default";get variantClass(){let a={default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"};return a[this.variant]||a.default}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-badge"]],inputs:{variant:"variant"},standalone:!0,features:[m],ngContentSelectors:le,decls:2,vars:3,consts:[[3,"ngClass"]],template:function(o,l){o&1&&(T(),e(0,"div",0),I(1),n()),o&2&&d("ngClass",B(1,se,l.variantClass))},dependencies:[x,w]})}return t})();var X=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-skillsection"]],standalone:!0,features:[m],decls:61,vars:0,consts:[[1,"flex","flex-col","gap-4"],[1,"text-xl","font-bold"],[1,"flex","flex-wrap","items-center","gap-2"],["src","/javascrpit.jpg","alt","",1,"w-5","mx-1"],["src","/typescrpit1.png","alt","",1,"w-5","mx-1"],["src","/favicon.ico","alt","",1,"w-5","mx-1"],["src","/ionic-bg.png","alt","",1,"w-5","mx-1"],["src","/capcity.png","alt","",1,"w-5","mx-1"],["src","/RxJs.png","alt","",1,"w-5","mx-1"],["src","/react.png","alt","",1,"w-5","mx-1"],["src","/tailwind.svg","alt","",1,"w-5","mx-1"],["src","/matu.png","alt","",1,"w-5","mx-1"],["src","/html.png","alt","",1,"w-5","mx-1"],["src","/css.png","alt","",1,"w-5","mx-1"],["src","/node.png","alt","",1,"w-5","mx-1"],["src","/python.png","alt","",1,"w-5","mx-1"],["src","/mangodb.png","alt","",1,"w-5","mx-1"],["src","/mysql.png","alt","",1,"w-5","mx-1"],["src","/git.png","alt","",1,"w-5","mx-1"],["src","/github.png","alt","",1,"w-5","mx-1"],["src","/gitlab.png","alt","",1,"w-5","mx-1"],["src","/aggrid.png","alt","",1,"w-5","mx-1"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"p",1),i(2,"Skills"),n(),e(3,"div",2)(4,"app-badge"),r(5,"img",3),i(6," Javascript"),n(),e(7,"app-badge"),r(8,"img",4),i(9," Typescript"),n(),e(10,"app-badge"),r(11,"img",5),i(12," Angular "),n(),e(13,"app-badge"),r(14,"img",6),i(15," Ionic "),n(),e(16,"app-badge"),r(17,"img",7),i(18," Capacitor "),n(),e(19,"app-badge"),r(20,"img",8),i(21," RxJs"),n(),e(22,"app-badge"),r(23,"img",9),i(24," React"),n(),e(25,"app-badge"),r(26,"img",10),i(27," Tailwind"),n(),e(28,"app-badge"),r(29,"img",11),i(30," Material UI"),n(),e(31,"app-badge"),r(32,"img",12),i(33," HTML"),n(),e(34,"app-badge"),r(35,"img",13),i(36," CSS"),n(),e(37,"app-badge"),r(38,"img",14),i(39," Node.js"),n(),e(40,"app-badge"),r(41,"img",15),i(42," Python"),n(),e(43,"app-badge"),r(44,"img",16),i(45," MongoDB"),n(),e(46,"app-badge"),r(47,"img",17),i(48," MYSQL"),n(),e(49,"app-badge"),r(50,"img",18),i(51," Git"),n(),e(52,"app-badge"),r(53,"img",19),i(54," GitHub"),n(),e(55,"app-badge"),r(56,"img",20),i(57," GitLab"),n(),e(58,"app-badge"),r(59,"img",21),i(60," AGgrid"),n()()())},dependencies:[J]})}return t})();function me(t,c){if(t&1&&(e(0,"div",13)(1,"p",14),i(2),n()()),t&2){let a=c.$implicit;p(2),b(a)}}function pe(t,c){if(t&1&&(e(0,"a",9),f(),e(1,"svg",10),r(2,"path",15),n(),u(),e(3,"p",12),i(4,"Website"),n()()),t&2){let a=S();d("href",a.live,h)}}var Y=(()=>{class t{title;description;image;skills;github;live;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-project"]],inputs:{title:"title",description:"description",image:"image",skills:"skills",github:"github",live:"live"},standalone:!0,features:[m],decls:17,vars:7,consts:[[1,"shadow-md","rounded-lg","overflow-hidden","bg-white","dark:bg-gray-800"],[1,"rounded-t-lg","h-[170px]","object-cover","w-full",3,"src","alt"],[1,"p-4"],[1,"font-semibold","tracking-tight","text-base","mt-1","text-gray-100"],[1,"prose","mt-2","max-w-full","line-clamp-3","text-pretty","font-medium","font-sans","text-xs","text-muted-foreground","dark:prose-invert","text-gray-100"],[1,"flex","items-center","gap-2","flex-wrap","mt-4"],["class","flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 cursor-pointer",4,"ngFor","ngForOf"],[1,"flex","items-center","gap-2","mt-4"],["target","_blank","class","flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer",3,"href",4,"ngIf"],["target","_blank",1,"flex","items-center","gap-2","bg-gray-950","hover:bg-gray-700","rounded-lg","px-2","py-1","cursor-pointer",3,"href"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4","text-white"],["stroke-linecap","round","stroke-linejoin","round","d","M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.23-.25-4.56-1.12-4.56-5a3.88 3.88 0 011.03-2.69 3.6 3.6 0 01.1-2.65s.84-.27 2.75 1.04a9.3 9.3 0 015 0c1.91-1.3 2.75-1.04 2.75-1.04.65 1.71.25 2.97.12 3.28a3.88 3.88 0 011.03 2.69c0 3.89-2.34 4.74-4.58 4.99.36.31.68.91.68 1.82v2.7c0 .27.16.58.68.48A9.97 9.97 0 0022 12c0-5.52-4.48-10-10-10z"],[1,"text-[10px]","text-white"],[1,"flex","items-center","gap-2","bg-gray-100","rounded-lg","px-2","py-1","cursor-pointer"],[1,"text-[10px]","font-semibold","text-gray-900"],["stroke-linecap","round","stroke-linejoin","round","d","M13.828 21A10.97 10.97 0 0112 21c-5.523 0-10-4.477-10-10S6.477 1 12 1s10 4.477 10 10a10.97 10.97 0 01-.172 2.056M16.828 12.828L21 16m-5-5l3.172 3.172M5 12h.01M12 5v.01M12 19v.01M7 16l.01-.01M16.828 9.172L21 12m-5-5l3.172 3.172"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"div"),r(2,"img",1),n(),e(3,"div",2)(4,"p",3),i(5),n(),e(6,"p",4),i(7),n(),e(8,"div",5),v(9,me,3,1,"div",6),n(),e(10,"div",7),v(11,pe,5,1,"a",8),e(12,"a",9),f(),e(13,"svg",10),r(14,"path",11),n(),u(),e(15,"p",12),i(16,"Source"),n()()()()()),o&2&&(p(2),d("src",l.image,h)("alt",l.title),p(3),b(l.title),p(2),_(" ",l.description," "),p(2),d("ngForOf",l.skills),p(2),d("ngIf",l.live),p(),d("href",l.github,h))},dependencies:[x,C,M]})}return t})();function de(t,c){if(t&1&&r(0,"app-project",8),t&2){let a=c.$implicit;d("title",a.title)("description",a.description)("image",a.image)("github",a.github)("live",a.live)("skills",a.skills)}}var q=(()=>{class t{projects=[{title:"Anime Atlas",description:"Developed a comprehensive anime web application that centralizes Anime and Manga information for users.",image:"/animeatlas.png",github:"https://github.com/Uprabhas/AnimeAtlas",live:"https://anime-atlas-psi.vercel.app/",skills:["Angular","Typescript","Scss","Material UI","Tailwind"]},{title:"E-cart",description:"Our e-commerce website offers a seamless online shopping experience, providing a wide range of products across multiple categories, including electronics, fashion, home decor, beauty, and more.",image:"/ecart.png",github:"https://github.com/Uprabhas/e-cart",skills:["Angular","typescrpti","material UI","Scss"]},{title:"Weather-app",description:"The weather application was implemented to provide climate information using geolocation & search city`s, fetching location-based climate data from the database.",image:"/climate.png",github:"https://github.com/Uprabhas/climateapp",live:"https://climateapp-ten.vercel.app/",skills:["React","Tailwind","Material UI","search opitimed"]},{title:"spend wise",description:"This application helps you track all your expenses from bank accounts and UPI apps, displaying them in one place.",image:"/moblie.png",github:"https://github.com/deepanshu2711/discord-clone",skills:["Angular","ionic","capacitor","Android","Typescrpit","Material UI","Tailwind"]}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-projectsection"]],standalone:!0,features:[m],decls:11,vars:1,consts:[[1,"mt-10"],[1,"flex","flex-col","items-center","justify-center","gap-4"],[1,"px-5","py-3","rounded-md","uppercase","bg-gray-200","dark:bg-gray-800","text-gray-800","dark:text-gray-200"],[1,"flex","flex-col","gap-2","items-center","text-center"],[1,"text-3xl","font-bold","tracking-tighter","sm:text-5xl"],[1,"md:text-[16px]","max-w-[700px]","text-[14px]","text-gray-500","dark:text-gray-400"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mt-4"],[3,"title","description","image","github","live","skills",4,"ngFor","ngForOf"],[3,"title","description","image","github","live","skills"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),i(3," My Projects "),n(),e(4,"div",3)(5,"p",4),i(6," Check out my latest work "),n(),e(7,"p",5),i(8," I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites. "),n()(),e(9,"div",6),v(10,de,1,6,"app-project",7),n()()()),o&2&&(p(10),d("ngForOf",l.projects))},dependencies:[Y,x,C]})}return t})();var Z=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-contact"]],standalone:!0,features:[m],decls:29,vars:0,consts:[[1,"mt-10","mb-5"],[1,"flex","flex-col","items-center","justify-center","gap-4"],[1,"px-5","py-3","rounded-md","uppercase","bg-gray-200","dark:bg-gray-800","text-gray-800","dark:text-gray-200"],[1,"flex","flex-col","gap-2","items-center","text-center"],[1,"text-3xl","font-bold","tracking-tighter","sm:text-5xl"],[1,"md:text-[16px]","max-w-[700px]","text-[14px]","text-gray-500","dark:text-gray-400"],["href","mailto:prabashutla111@gmail.com.com","rel","noopener noreferrer",1,"text-blue-500"],[1,"flex","justify-center"],[1,"rounded-full","border-solid","border-1","border-gray-400","p-2","text-orange-700","mx-2"],["href","https://www.instagram.com/xx_asce_xx?igsh=MXdlM2R1OHo4MTU0ZQ==","target","_blank","rel","noopener noreferrer"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-instagram"],["d","M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"],[1,"rounded-full","border-solid","border-1","border-gray-400","p-2","text-sky-500"],["href","https://x.com/Prabhas52297614?t=PBHzBvCCvEkMz0EMIkTiSg&s=08","target","_blank","rel","noopener noreferrer"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-twitter-x"],["d","M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"],[1,"rounded-full","border-solid","border-1","border-gray-400","p-2","text-indigo-800"],["href","https://github.com/Uprabhas","target","_blank","rel","noopener noreferrer"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-github"],["d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"],[1,"rounded-full","border-solid","border-1","border-gray-400","p-2","text-indigo-500"],["href","https://www.linkedin.com/in/prabhasutla/","target","_blank","rel","noopener noreferrer"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-linkedin"],["d","M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),i(3," Contact "),n(),e(4,"div",3)(5,"p",4),i(6," Get in Touch "),n(),e(7,"p",5),i(8," Want to chat? Just shoot me a DM with a "),e(9,"a",6),i(10," direct question on mail "),n(),i(11," and I'll respond whenever I can. I will ignore all soliciting. "),n()(),e(12,"div",7)(13,"div",8)(14,"a",9),f(),e(15,"svg",10),r(16,"path",11),n()()(),u(),e(17,"div",12)(18,"a",13),f(),e(19,"svg",14),r(20,"path",15),n()()(),u(),e(21,"div",16)(22,"a",17),f(),e(23,"svg",18),r(24,"path",19),n()()(),u(),e(25,"div",20)(26,"a",21),f(),e(27,"svg",22),r(28,"path",23),n()()()()()())}})}return t})();var Q=(()=>{class t{title="Uprabhas";static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:11,vars:0,consts:[[1,"max-w-3xl","mx-auto","px-[20px]","md:px-0","mb-[100px]"],["className","flex flex-col gap-10 mt-16"]],template:function(o,l){o&1&&(e(0,"div",0),r(1,"app-tab"),e(2,"div",1),r(3,"app-blurback")(4,"app-my")(5,"app-about")(6,"app-workexperience")(7,"app-educationsection")(8,"app-skillsection")(9,"app-projectsection")(10,"app-contact"),n()())},dependencies:[L,U,V,G,W,$,X,q,Z]})}return t})();var K=[];var ee={providers:[H({eventCoalescing:!0}),z(K),O()]};var ce={providers:[P()]},te=A(ee,ce);var ge=()=>N(Q,te),mt=ge;export{mt as a};
