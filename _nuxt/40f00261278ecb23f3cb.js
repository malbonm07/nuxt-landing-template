(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{332:function(t,e,r){t.exports=r.p+"img/ea9dce9.jpeg"},335:function(t,e,r){t.exports=r.p+"img/85d7ecb.jpeg"},336:function(t,e,r){t.exports=r.p+"img/e56400a.jpeg"},337:function(t,e,r){t.exports=r.p+"img/82d2b52.jpeg"},339:function(t,e,r){var content=r(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("55ecb5ef",content,!0,{sourceMap:!1})},377:function(t,e,r){t.exports=r.p+"img/6fc7439.jpeg"},378:function(t,e,r){t.exports=r.p+"img/59aac1f.jpeg"},379:function(t,e,r){t.exports=r.p+"img/c6da25f.jpeg"},380:function(t,e,r){t.exports=r.p+"img/21555e1.jpeg"},381:function(t,e,r){t.exports=r.p+"img/8fcde08.jpeg"},382:function(t,e,r){t.exports=r.p+"img/abcd4a5.jpeg"},383:function(t,e,r){t.exports=r.p+"img/763d912.jpeg"},384:function(t,e,r){t.exports=r.p+"img/ccedfcc.png"},385:function(t,e,r){t.exports=r.p+"img/0b6b1a1.png"},386:function(t,e,r){t.exports=r.p+"img/c158653.png"},387:function(t,e,r){t.exports=r.p+"img/2c18b1b.png"},388:function(t,e,r){"use strict";var o=r(339);r.n(o).a},389:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".v-card--reveal{align-items:center;bottom:0;justify-content:center;opacity:.5;position:absolute;width:100%}",""])},394:function(t,e,r){"use strict";r.r(e);var o=r(80),n={props:{cardObject:{type:Object,required:!0},colorTheme:{type:String,required:!0}}},l=r(17),c=r(25),d=r.n(c),m=r(131),v=r(129),_=r(331),f=r(81),y=r(165),x=r(46),h=r(2),w=r(3),C=Object(h.a)(y.a,x.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(w.c)("v-hover is missing a default scopedSlot or bound value",this),null;var element=void 0;return this.$scopedSlots.default?element=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(element=this.$slots.default[0]),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(w.c)("v-hover should only contain a single element",this),element)}}),j=r(132),S=r(190),k=r(327),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return t.cardObject?r("v-card",{attrs:{color:t.colorTheme,"max-width":"600",nuxt:"",to:t.cardObject.linkerTo}},[r("v-img",{attrs:{"aspect-ratio":12/9,src:t.cardObject.src}},[t.cardObject.button?r("div",[r("v-expand-transition",[o?r("div",{staticClass:"d-flex transition-fast-in-fast-out orange darken-1 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v("\n            $"+t._s(t.cardObject.price)+"\n                ")]):t._e()])],1):t._e()]),t._v(" "),r("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[t.cardObject.button?r("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"teal accent-4",fab:"",right:"",top:""}},[r("v-icon",[t._v("shopping_cart")])],1):t._e(),t._v(" "),r("div",{staticClass:"font-weight-light grey--text title mb-2"},[t._t("header")],2),t._v(" "),t._t("title"),t._v(" "),t._t("description")],2),t._v(" "),t.cardObject.socialMedia?r("div",[r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"#263238"}},[r("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fab","linkedin-in"]}})],1),t._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"#263238"}},[r("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fab","twitter"]}})],1),t._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"#263238"}},[r("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fab","instagram"]}})],1)],1)],1):t._e()],1):t._e()}}],null,!0)})},[],!1,null,null,null),L=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:_.a,VCardText:_.b,VExpandTransition:f.a,VHover:C,VIcon:j.a,VImg:S.a,VSpacer:k.a});var O=r(144),T={name:"itemCard",props:{itemObject:{type:Object,required:!0}}},A=r(319),V=r(123),F=r(124),E=r(130),B=r(321),M=Object(l.a)(T,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list",{attrs:{"three-line":""}},[[r("v-list-tile",[r("v-list-tile-avatar",{attrs:{size:"48"}},[t.itemObject.avatar?r("img",{attrs:{src:t.itemObject.avatar}}):t.itemObject.icon?r("v-icon",{staticClass:"services",attrs:{color:"#00BFA5"}},[t._v(t._s(t.itemObject.icon))]):t._e()],1),t._v(" "),r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-content",[t.itemObject.title?r("v-list-tile-title",[r("h5",{staticClass:"text-uppercase title font-weight-regular"},[t._v(t._s(t.itemObject.title))])]):t.itemObject.name?r("v-list-tile-title",[r("h5",{staticClass:"text-uppercase subheading font-weight-light"},[t._v(t._s(t.itemObject.name))])]):t._e(),t._v(" "),r("v-list-tile-sub-title",{staticClass:"body-2 font-weight-light"},[t._v(t._s(t.itemObject.description))])],1)],1)],1)],t._v(" "),t.itemObject.link?[r("v-divider"),t._v(" "),r("v-list-tile",{attrs:{avatar:"",dense:""}},[r("v-list-tile-content",{staticClass:"pl-3"},[r("v-btn",{staticClass:"ml-5",attrs:{flat:"",small:"",color:"teal accent-4"}},[t._v("Learn More")])],1)],1)]:t._e()],2)],1)},[],!1,null,null,null),$=M.exports;d()(M,{VBtn:m.a,VDivider:A.a,VIcon:j.a,VList:V.a,VListTile:F.a,VListTileAvatar:E.a,VListTileContent:B.a,VListTileSubTitle:B.b,VListTileTitle:B.c});var N=r(377),z=r.n(N),P=r(378),U=r.n(P),I=r(379),D=r.n(I),H=r(380),W=r.n(H),J=r(381),R=r.n(J),Y=r(332),G=r.n(Y),K=r(382),Q=r.n(K),X=r(383),Z=r.n(X),tt=r(335),et=r.n(tt),at=r(336),it=r.n(at),st=r(337),ot=r.n(st),nt=r(384),lt=r.n(nt),ct=r(385),pt=r.n(ct),mt=r(386),ut=r.n(mt),vt=r(387),gt=r.n(vt),_t={components:{Card:L,Carousel:O.a,Services:$,Testimonial:$},data:function(){var t,e,r;return{contactForm:{name:"",lastname:"",email:""},colorPropertiesCard:"grey lighten-3",colorAgentsCard:"teal accent-4",cards:[{title:"Premium homes",address:"Texas - USA",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",price:"400,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"},{title:"Favorite",address:"New York - USA",src:z.a,price:"700,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"},{title:"Best Home",address:"Seattle - USA",src:U.a,price:"800,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"},{title:"Premium homes",address:"Texas - USA",src:D.a,price:"400,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"},{title:"Favorite",address:"New York - USA",src:W.a,price:"700,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"},{title:"Best Home",address:"Seattle - USA",src:R.a,price:"800,000",button:!0,description:"Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet",linkerTo:"/properties/propertie1"}],agents:[(t={name:"aaron holmes",description:"real estate agent",src:G.a},Object(o.a)(t,"description","Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra."),Object(o.a)(t,"delay","100"),Object(o.a)(t,"socialMedia",{linkedind:"",twitter:"",instragram:""}),t),(e={name:"Olivia williams",description:"real estate agent",src:Q.a},Object(o.a)(e,"description","Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra."),Object(o.a)(e,"delay","200"),Object(o.a)(e,"socialMedia",{linkedind:"",twitter:"",instragram:""}),e),(r={name:"isabella moore",description:"real estate agent",src:Z.a},Object(o.a)(r,"description","Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra."),Object(o.a)(r,"delay","300"),Object(o.a)(r,"socialMedia",{linkedind:"",twitter:"",instragram:""}),r)],about:[{icon:"search",title:"find property",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{icon:"attach_money",title:"buy property",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{icon:"location_city",title:"outstanding",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],carousel:[{src:et.a},{src:it.a},{src:ot.a}],realEstateList:[{icon:"done",title:"Placeat maxime animi minus"},{icon:"done",title:"Dolore qui placeat maxime"},{icon:"done",title:"Consectetur adipisicing"},{icon:"done",title:"Lorem ipsum dolor"}],services:[{title:"find property",icon:"search",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",link:"https://www.google.com",delay:"50"},{title:"buy property",icon:"attach_money",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",link:"https://www.google.com",delay:"100"},{title:"beautiful home",icon:"home",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",link:"https://www.google.com",delay:"150"},{title:"buildings & lands",icon:"domain",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",link:"https://www.google.com",delay:"200"},{title:"property locator",icon:"location_on",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.",link:"https://www.google.com",delay:"250"},{title:"mobile apps",icon:"stay_current_portrait",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",link:"https://www.google.com",delay:"300"}],testimonials:[{name:"allison holmes",avatar:lt.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."},{name:"aiden russell",avatar:pt.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."},{name:"charles morgan",avatar:ut.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."},{name:"curt rayels",avatar:gt.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."},{name:"charles morgan",avatar:ut.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."},{name:"curt rayels",avatar:gt.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia."}],news:[{src:ot.a,title:"popular real estate propierties for 2019",name:"aaron holmes",date:"jan 18, 2019",linkerTo:"/news/new1",delay:"100"},{src:it.a,title:"popular real estate propierties for 2019",name:"olivia williams",date:"march 20, 2019",linkerTo:"/news/new1",delay:"200"},{src:et.a,title:"popular real estate propierties for 2019",name:"isabella moore",date:"april 17, 2019",linkerTo:"/news/new1",delay:"300"}]}}},ft=(r(388),r(127)),bt=r(122),yt=r(120),xt=r(121),ht=r(125),wt=r(324),Ct=r(179),jt=Object(l.a)(_t,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","pt-5":"",id:"properties"}},t._l(t.cards,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[r("Card",{attrs:{cardObject:e,colorTheme:t.colorPropertiesCard},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n            "+t._s(e.title)+"\n          ")]},proxy:!0},{key:"title",fn:function(){return[r("h3",{staticClass:"display-1 font-weight-light orange--text mb-2"},[t._v("\n              "+t._s(e.address)+"\n            ")])]},proxy:!0},{key:"description",fn:function(){return[r("div",{staticClass:"font-weight-light title mb-2"},[t._v("\n            "+t._s(e.description)+"\n            ")])]},proxy:!0}],null,!0)})],1)}),1)],1),t._v(" "),r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","pt-5":"","pb-2":""}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"display-2 mb-2 text-xs-center text-sm-left",staticStyle:{color:"#00BFA5"}},[t._v("REAL ESTATE AGENTS")]),t._v(" "),r("h5",{staticClass:"subheading"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor")])])],1)],1),t._v(" "),r("v-container",[r("v-layout",{attrs:{row:"",wrap:"",id:"agents"}},t._l(t.agents,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[r("Card",{attrs:{cardObject:e,colorTheme:t.colorAgentsCard,"data-aos":"flip-up","data-aos-delay":e.delay},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticStyle:{"text-align":"center"}},[r("h3",{staticClass:"display-1 text-capitalize mb-2",staticStyle:{color:"#000"}},[t._v(t._s(e.name))])])]},proxy:!0},{key:"description",fn:function(){return[r("div",{staticClass:"font-weight-regular subheading",staticStyle:{"text-align":"center"}},[t._v("\n            "+t._s(e.description)+"\n          ")])]},proxy:!0}],null,!0)})],1)}),1)],1),t._v(" "),r("div",{staticClass:"mt-5 mb-5",staticStyle:{background:"#00BFA5"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-center":"",id:"about"}},[r("v-flex",{staticClass:"center"},[r("h2",{staticClass:"center display-1 pt-3 pb-5",staticStyle:{color:"#000"}},[t._v("HOW IT WORKS")])])],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.about,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm4:"",md4:""}},[r("v-card",{staticClass:"pa-1",attrs:{color:"transparent",elevation:"0","data-aos":"flip-up"}},[r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("v-icon",{staticClass:"icon",attrs:{color:"#000"}},[t._v(t._s(e.icon))])],1),t._v(" "),r("v-card-title",{staticStyle:{display:"flex","justify-content":"center"},attrs:{"primary-title":""}},[r("p",{staticClass:"title text-uppercase"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("span",{staticClass:"subheading"},[t._v(t._s(e.description))])])])],1)],1)}),1)],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-space-between":"","pb-3":""}},[r("v-flex",{attrs:{xs12:"",md6:"","mb-5":""}},[r("Carousel",{attrs:{itemsArray:t.carousel}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md5:""}},[r("h2",{staticClass:"display-2 text-capitalize",staticStyle:{color:"#00BFA5"}},[t._v("warehouse real estate template")]),t._v(" "),r("p",{staticClass:"title pt-2 pb-2 font-weight-light grey--text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")]),t._v(" "),r("p",[t._v("Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.")]),t._v(" "),r("v-list",{staticStyle:{background:"transparent"}},[t._l(t.realEstateList,function(e,i){return r("v-list-tile",{key:i,attrs:{avatar:"",color:"transparent"}},[r("v-list-tile-action",[e.icon?r("v-icon",{attrs:{color:"#00BFA5"}},[t._v(t._s(e.icon))]):t._e()],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),t._v(" "),r("v-btn",{staticClass:"mt-2",attrs:{large:"",color:"#00BFA5",dark:""}},[t._v("Learn More")])],2)],1)],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"display-2 text-uppercase pb-4 text-xs-center",staticStyle:{color:"#00BFA5"}},[t._v("services")])]),t._v(" "),t._l(t.services,function(t,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:"","pa-1":""}},[r("services",{attrs:{itemObject:t,"data-aos":"zoom-in","data-aos-delay":t.delay}})],1)})],2)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"display-2 text-uppercase pb-4 text-xs-center",staticStyle:{color:"#00BFA5"}},[t._v("testimonial")])]),t._v(" "),t._l(t.testimonials,function(t,i){return r("v-flex",{key:i,staticClass:"pa-1",attrs:{xs12:"",sm6:""}},[r("Testimonial",{attrs:{itemObject:t}})],1)})],2)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:"",id:"news"}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"display-2 text-uppercase pb-4 text-xs-center",staticStyle:{color:"#00BFA5"}},[t._v("news & events")])]),t._v(" "),t._l(t.news,function(e,i){return r("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[r("v-card",{attrs:{nuxt:"",to:e.linkerTo,"data-aos":"fade-up","data-aos-delay":e.delay}},[r("v-img",{attrs:{src:e.src,height:"400px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline text-uppercase pb-2 font-weight-light"},[t._v(t._s(e.title))])])])],1),t._v(" "),r("div",{staticClass:"mt-3",attrs:{"data-aos":"flip-up"}},[r("span",{staticClass:"grey--text subheading text-capitalize"},[t._v(t._s(e.name)+" - ")]),t._v(" "),r("span",{staticClass:"grey--text subheading text-capitalize"},[t._v(t._s(e.date)+" - ")]),t._v(" "),r("a",{staticClass:"subheading",staticStyle:{color:"#00BFA5"},attrs:{href:e.linkerTo}},[t._v("News")])])],1)})],2)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-space-between":"",id:"about"}},[r("v-flex",{attrs:{xs12:""}},[r("h2",{staticClass:"display-2 text-uppercase pb-4 text-xs-center text-sm-left",staticStyle:{color:"#00BFA5"}},[t._v("contact us")]),t._v(" "),r("h4",{staticClass:"title text-uppercase pt-5 pb-5 pl-3"},[t._v("get in touch")])]),t._v(" "),r("v-flex",{attrs:{xs12:"",sm5:""}},[r("v-card",{staticClass:"pa-3 transpa",attrs:{elevation:"0"}},[r("v-text-field",{attrs:{outline:"",clearable:"",label:"First Name",type:"text",color:"teal accent-4",required:""},model:{value:t.contactForm.name,callback:function(e){t.$set(t.contactForm,"name",e)},expression:"contactForm.name"}}),t._v(" "),r("v-text-field",{attrs:{outline:"",clearable:"",label:"Last Name",type:"text",color:"teal accent-4",required:""},model:{value:t.contactForm.lastname,callback:function(e){t.$set(t.contactForm,"lastname",e)},expression:"contactForm.lastname"}}),t._v(" "),r("v-text-field",{attrs:{outline:"",clearable:"",label:"Email Address",type:"emal",color:"teal accent-4",required:""},model:{value:t.contactForm.email,callback:function(e){t.$set(t.contactForm,"email",e)},expression:"contactForm.email"}}),t._v(" "),r("v-textarea",{attrs:{outline:"",color:"teal accent-4",name:"input-7-4",label:"Write your notes or question here",value:""}})],1),t._v(" "),r("v-btn",{staticClass:"mt-5 mb-5 ml-3",attrs:{depressed:"",large:"",color:"teal accent-4",dark:""}},[t._v("Send Message")])],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"","mt-3":"","pr-3":"","pl-3":""}},[r("div",{staticClass:"pb-3"},[r("h4",{staticClass:"title",staticStyle:{color:"#616161"}},[t._v("Adrees")]),t._v(" "),r("p",{staticClass:"subheading pt-2 grey--text"},[t._v("203 Fake St. Mountain View, San Francisco, California, USA")])]),t._v(" "),r("div",{staticClass:"pb-3"},[r("h4",{staticClass:"title",staticStyle:{color:"#616161"}},[t._v("Phone")]),t._v(" "),r("p",{staticClass:"subheading pt-2",staticStyle:{color:"#00BFA5"}},[t._v("+1 324 3233 232")])]),t._v(" "),r("div",{staticClass:"pb-3"},[r("h4",{staticClass:"title",staticStyle:{color:"#616161"}},[t._v("Email Address")]),t._v(" "),r("p",{staticClass:"subheading pt-2",staticStyle:{color:"#00BFA5"}},[t._v("youremail@domain.com")])])])],1)],1)],1)},[],!1,null,null,null);e.default=jt.exports;d()(jt,{VBtn:m.a,VCard:v.a,VCardTitle:ft.a,VContainer:bt.a,VFlex:yt.a,VIcon:j.a,VImg:S.a,VLayout:xt.a,VList:V.a,VListTile:F.a,VListTileAction:ht.a,VListTileContent:B.a,VListTileTitle:B.c,VTextField:wt.a,VTextarea:Ct.a})}}]);