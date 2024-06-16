(function(){"use strict";var a={525:function(a,e,o){var t=o(5130),r=o(6768);const i={id:"app"},n={class:"main-content"},s={class:"content"};function m(a,e,o,t,m,d){const l=(0,r.g2)("DoramaAppHeader"),u=(0,r.g2)("TheDoramaSidebar"),c=(0,r.g2)("HelloWorld"),p=(0,r.g2)("TheDoramaList"),v=(0,r.g2)("DoramaContactForm"),h=(0,r.g2)("DoramaAppFooter");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(l),(0,r.Lk)("div",n,[(0,r.bF)(u),(0,r.Lk)("div",s,[(0,r.bF)(c,{msg:"Bem-vindo ao Dorama World!"}),(0,r.bF)(p),(0,r.bF)(v)])]),(0,r.bF)(h)])}const d=a=>((0,r.Qi)("data-v-529581b0"),a=a(),(0,r.jt)(),a),l={class:"app-header"},u=d((()=>(0,r.Lk)("h1",null,"Dorama World",-1))),c=[u];function p(a,e,o,t,i,n){return(0,r.uX)(),(0,r.CE)("header",l,c)}var v={name:"DoramaAppHeader"},h=o(1241);const f=(0,h.A)(v,[["render",p],["__scopeId","data-v-529581b0"]]);var D=f,g=o(4232);const k=a=>((0,r.Qi)("data-v-5f1e01fa"),a=a(),(0,r.jt)(),a),b={class:"dorama-list"},L=k((()=>(0,r.Lk)("h2",null,"Lista de Doramas",-1))),w={class:"dorama-info"},I=["src"],y={class:"dorama-details"},C=["onClick"],F=["onClick"],_=["onClick"],E={class:"new-dorama"},j={key:0,class:"edit-dorama"};function A(a,e,o,i,n,s){return(0,r.uX)(),(0,r.CE)("div",b,[L,(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.doramas,((a,e)=>((0,r.uX)(),(0,r.CE)("li",{key:a.id},[(0,r.Lk)("div",w,[(0,r.Lk)("img",{src:a.image,alt:"Imagem do Dorama",class:"dorama-image"},null,8,I),(0,r.Lk)("div",y,[(0,r.Lk)("h3",null,(0,g.v_)(a.title),1),(0,r.Lk)("p",null,(0,g.v_)(a.description),1)])]),(0,r.Lk)("button",{onClick:a=>s.editDorama(e)},"Editar",8,C),(0,r.Lk)("button",{onClick:a=>s.removeDorama(e)},"Remover",8,F),(0,r.Lk)("button",{onClick:a=>s.toggleFavorite(e)},(0,g.v_)(a.favorite?"Remover dos Favoritos":"Adicionar aos Favoritos"),9,_)])))),128))]),(0,r.Lk)("div",E,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>n.newDoramaTitle=a),placeholder:"Adicionar novo dorama",onKeyup:e[1]||(e[1]=(0,t.jR)(((...a)=>s.addDorama&&s.addDorama(...a)),["enter"]))},null,544),[[t.Jo,n.newDoramaTitle]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>n.newDoramaImage=a),placeholder:"URL da imagem",onKeyup:e[3]||(e[3]=(0,t.jR)(((...a)=>s.addDorama&&s.addDorama(...a)),["enter"]))},null,544),[[t.Jo,n.newDoramaImage]]),(0,r.Lk)("button",{onClick:e[4]||(e[4]=(...a)=>s.addDorama&&s.addDorama(...a))},"Adicionar")]),null!==n.editIndex?((0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("h3",null,"Editando: "+(0,g.v_)(n.doramas[n.editIndex].title),1),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>n.editDoramaTitle=a),placeholder:"Editar título",onKeyup:e[6]||(e[6]=(0,t.jR)(((...a)=>s.saveDorama&&s.saveDorama(...a)),["enter"]))},null,544),[[t.Jo,n.editDoramaTitle]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>n.editDoramaImage=a),placeholder:"Editar URL da imagem",onKeyup:e[8]||(e[8]=(0,t.jR)(((...a)=>s.saveDorama&&s.saveDorama(...a)),["enter"]))},null,544),[[t.Jo,n.editDoramaImage]]),(0,r.Lk)("button",{onClick:e[9]||(e[9]=(...a)=>s.saveDorama&&s.saveDorama(...a))},"Salvar"),(0,r.Lk)("button",{onClick:e[10]||(e[10]=(...a)=>s.cancelEdit&&s.cancelEdit(...a))},"Cancelar")])):(0,r.Q3)("",!0)])}o(4114);var T={name:"TheDoramaList",data(){return{doramas:[{id:1,title:"Lovelly Runner",description:"Im Sol está arrasada com a morte repentina e trágica de seu astro favorito, Ryu Sun Jae, um ex-nadador que se tornou um ídolo do K-pop. Mas, em meio à sua angústia, ela magicamente volta para 2008, quando Sun Jae ainda tinha apenas 19 anos de idade! Encantada por ter a chance de ajudá-lo a evitar seu destino infeliz, Sol assume a missão de mudar o futuro... e talvez encontrar o amor no caminho. Será que seus esforços para desviar o curso do passado serão bem-sucedidos ou poderão ter consequências inesperadas?",image:"https://th.bing.com/th/id/OIP.4gYzuJ49Bwfey4B2pZ9w7QAAAA?rs=1&pid=ImgDetMain",favorite:!1},{id:2,title:"Goblin",description:"Kim Shin é um condecorado general militar da Dinastia Goryeo que acaba traído pelo rei invejoso a quem servia. Quando Kim Shin é confrontado com a morte em vez da honra após uma grande batalha, Deus transforma Kim Shin em um duende cuja função é proteger certas pessoas de uma vida de sofrimento.",image:"https://th.bing.com/th/id/OIP.2jOUPv6l9fuXUEROOITDqgHaK4?rs=1&pid=ImgDetMain",favorite:!1},{id:3,title:"Crash Landing on You",description:"Uma herdeira sul-coreana, Yoon Se-ri, faz um pouso forçado na Coreia do Norte durante um voo de parapente e encontra Ri Jeong-hyeok, um oficial do exército norte-coreano. Eles começam a se apaixonar, desafiando as fronteiras entre seus países.",image:"https://referencianerd.com/wp-content/uploads/2020/12/crash-landing-on-you-featured-image-scaled-1200x720-1.jpg",favorite:!1},{id:4,title:"Descendants of the Sun",description:"A história segue um capitão das forças especiais, Yoo Si-jin, que se apaixona pela cirurgiã Kang Mo-yeon enquanto estão em uma missão de paz em um país fictício devastado pela guerra.",image:"https://th.bing.com/th/id/OIP.wLY3PcUj6HkNm65mrRWmXAHaEK?rs=1&pid=ImgDetMain",favorite:!1},{id:5,title:"My Love from the Star",description:"Um alienígena que chegou à Terra há 400 anos, Do Min-joon, encontra uma atriz de top, Cheon Song-yi, e se apaixona por ela, enquanto se prepara para deixar o planeta.",image:"https://th.bing.com/th/id/R.566b323a444db91d1228e341cf18a3b6?rik=4hmnRetvbFS4Dg&pid=ImgRaw&r=0",favorite:!1}],newDoramaTitle:"",newDoramaImage:"",editIndex:null,editDoramaTitle:"",editDoramaImage:""}},methods:{addDorama(){this.newDoramaTitle&&this.newDoramaImage&&(this.doramas.push({id:this.doramas.length+1,title:this.newDoramaTitle,description:"Descrição do Novo Dorama",image:this.newDoramaImage,favorite:!1}),this.newDoramaTitle="",this.newDoramaImage="")},removeDorama(a){this.doramas.splice(a,1)},editDorama(a){this.editIndex=a,this.editDoramaTitle=this.doramas[a].title,this.editDoramaImage=this.doramas[a].image},saveDorama(){this.editDoramaTitle&&this.editDoramaImage&&(this.doramas[this.editIndex].title=this.editDoramaTitle,this.doramas[this.editIndex].image=this.editDoramaImage,this.cancelEdit())},cancelEdit(){this.editIndex=null,this.editDoramaTitle="",this.editDoramaImage=""},toggleFavorite(a){this.doramas[a].favorite=!this.doramas[a].favorite}}};const x=(0,h.A)(T,[["render",A],["__scopeId","data-v-5f1e01fa"]]);var S=x;const R=a=>((0,r.Qi)("data-v-501096a0"),a=a(),(0,r.jt)(),a),O={class:"contact-form"},U=R((()=>(0,r.Lk)("h2",null,"Formulário de Contato",-1))),X=R((()=>(0,r.Lk)("label",{for:"name"},"Nome:",-1))),q=R((()=>(0,r.Lk)("label",{for:"email"},"E-mail:",-1))),K=R((()=>(0,r.Lk)("label",{for:"message"},"Mensagem:",-1))),M=R((()=>(0,r.Lk)("button",{type:"submit"},"Enviar",-1))),J={key:0},P=R((()=>(0,r.Lk)("h3",null,"Formulário enviado com sucesso!",-1)));function Q(a,e,o,i,n,s){return(0,r.uX)(),(0,r.CE)("div",O,[U,(0,r.Lk)("form",{onSubmit:e[3]||(e[3]=(0,t.D$)(((...a)=>s.submitForm&&s.submitForm(...a)),["prevent"]))},[X,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>n.formData.name=a)},null,512),[[t.Jo,n.formData.name]]),q,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>n.formData.email=a)},null,512),[[t.Jo,n.formData.email]]),K,(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=a=>n.formData.message=a)},null,512),[[t.Jo,n.formData.message]]),M],32),n.submitted?((0,r.uX)(),(0,r.CE)("div",J,[P,(0,r.Lk)("p",null,"Nome: "+(0,g.v_)(n.formData.name),1),(0,r.Lk)("p",null,"E-mail: "+(0,g.v_)(n.formData.email),1),(0,r.Lk)("p",null,"Mensagem: "+(0,g.v_)(n.formData.message),1),(0,r.Lk)("button",{onClick:e[4]||(e[4]=(...a)=>s.resetForm&&s.resetForm(...a))},"Novo Formulário")])):(0,r.Q3)("",!0)])}var H={name:"DoramaContactForm",data(){return{formData:{name:"",email:"",message:""},submitted:!1}},methods:{submitForm(){this.submitted=!0,console.log("Formulário enviado!",this.formData)},resetForm(){this.formData.name="",this.formData.email="",this.formData.message="",this.submitted=!1}}};const V=(0,h.A)(H,[["render",Q],["__scopeId","data-v-501096a0"]]);var N=V;const z=a=>((0,r.Qi)("data-v-ad63f610"),a=a(),(0,r.jt)(),a),W={class:"sidebar"},Y=z((()=>(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.Lk)("a",{href:"https://www.maioresemelhores.com/melhores-doramas/"},"Popular Doramas")]),(0,r.Lk)("li",null,[(0,r.Lk)("a",{href:"https://br.mydramalist.com/shows/newest"},"New Releases")]),(0,r.Lk)("li",null,[(0,r.Lk)("a",{href:"https://br.mydramalist.com/shows/top_korean_dramas"},"Top Rated")])],-1))),B=[Y];function G(a,e,o,t,i,n){return(0,r.uX)(),(0,r.CE)("div",W,B)}var Z={name:"DoramaSidebar"};const $=(0,h.A)(Z,[["render",G],["__scopeId","data-v-ad63f610"]]);var aa=$;const ea=a=>((0,r.Qi)("data-v-9237fc8c"),a=a(),(0,r.jt)(),a),oa={class:"footer"},ta={class:"footer-content"},ra=ea((()=>(0,r.Lk)("p",null,"© 2024 Meu Aplicativo de Doramas. Todos os direitos reservados.",-1))),ia={key:0,class:"success-message"};function na(a,e,o,t,i,n){return(0,r.uX)(),(0,r.CE)("footer",oa,[(0,r.Lk)("div",ta,[ra,i.formSubmitted?((0,r.uX)(),(0,r.CE)("p",ia,"Formulário enviado com sucesso!")):(0,r.Q3)("",!0)])])}var sa={name:"DoramaAppFooter",data(){return{formSubmitted:!1}}};const ma=(0,h.A)(sa,[["render",na],["__scopeId","data-v-9237fc8c"]]);var da=ma;const la={class:"hello"},ua=(0,r.Fv)('<p data-v-06c85226> Bem-vindo ao aplicativo Dorama World! Aqui você encontra informações e listas dos melhores doramas. </p><h3 data-v-06c85226>Funcionalidades Principais</h3><ul data-v-06c85226><li data-v-06c85226>Lista de Doramas</li><li data-v-06c85226>Formulário de Contato</li><li data-v-06c85226>Recomendações de Doramas Populares</li></ul><h3 data-v-06c85226>Links Úteis</h3><ul data-v-06c85226><li data-v-06c85226><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-06c85226>Documentação do Vue.js</a></li><li data-v-06c85226><a href="https://br.mydramalist.com" target="_blank" rel="noopener" data-v-06c85226>MyDramaList</a></li><li data-v-06c85226><a href="https://www.netflix.com" target="_blank" rel="noopener" data-v-06c85226>Netflix</a></li><li data-v-06c85226><a href="https://www.viki.com" target="_blank" rel="noopener" data-v-06c85226>Viki</a></li></ul>',5);function ca(a,e,o,t,i,n){return(0,r.uX)(),(0,r.CE)("div",la,[(0,r.Lk)("h1",null,(0,g.v_)(o.msg),1),ua])}var pa={name:"HelloWorld",props:{msg:String}};const va=(0,h.A)(pa,[["render",ca],["__scopeId","data-v-06c85226"]]);var ha=va,fa={name:"App",components:{DoramaAppHeader:D,TheDoramaSidebar:aa,TheDoramaList:S,DoramaContactForm:N,DoramaAppFooter:da,HelloWorld:ha}};const Da=(0,h.A)(fa,[["render",m]]);var ga=Da;(0,t.Ef)(ga).mount("#app")}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return a[t].call(i.exports,i,i.exports,o),i.exports}o.m=a,function(){var a=[];o.O=function(e,t,r,i){if(!t){var n=1/0;for(l=0;l<a.length;l++){t=a[l][0],r=a[l][1],i=a[l][2];for(var s=!0,m=0;m<t.length;m++)(!1&i||n>=i)&&Object.keys(o.O).every((function(a){return o.O[a](t[m])}))?t.splice(m--,1):(s=!1,i<n&&(n=i));if(s){a.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=a.length;l>0&&a[l-1][2]>i;l--)a[l]=a[l-1];a[l]=[t,r,i]}}(),function(){o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,{a:e}),e}}(),function(){o.d=function(a,e){for(var t in e)o.o(e,t)&&!o.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={524:0};o.O.j=function(e){return 0===a[e]};var e=function(e,t){var r,i,n=t[0],s=t[1],m=t[2],d=0;if(n.some((function(e){return 0!==a[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(m)var l=m(o)}for(e&&e(t);d<n.length;d++)i=n[d],o.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return o.O(l)},t=self["webpackChunkmy_dorama_app"]=self["webpackChunkmy_dorama_app"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(525)}));t=o.O(t)})();
//# sourceMappingURL=app.efa92828.js.map