(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(e,t,r){e.exports=r.p+"img/ea9dce9.jpeg"},340:function(e,t,r){"use strict";var n={name:"cardAgent",props:{agentObject:{type:Object,required:!0},heightCard:{type:String,required:!0}}},o=r(17),l=r(25),c=r.n(l),m=r(131),d=r(129),v=r(331),h=r(127),y=r(190),component=Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"transpa",attrs:{elevation:"0"}},[r("v-img",{staticStyle:{"border-radius":"3px"},attrs:{src:e.agentObject.src,alt:"agent image",height:e.heightCard}}),e._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[r("h3",{staticClass:"title pb-1 font-weight-medium text-uppercase"},[e._v(e._s(e.agentObject.name))]),e._v(" "),r("span",{staticClass:"subheading font-weight-light text-uppercase"},[e._v(e._s(e.agentObject.subTitle))])])]),e._v(" "),r("v-card-text",[r("p",{staticClass:"subheading font-weight-light"},[e._v(e._s(e.agentObject.description))])]),e._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{depressed:"",large:"",color:"teal accent-4",dark:""}},[e._t("butname")],2)],1)],1)},[],!1,null,null,null);t.a=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:v.b,VCardTitle:h.a,VImg:y.a})},395:function(e,t,r){"use strict";r.r(t);var n=r(340),o=r(332),l=r.n(o),c={props:{propTableHeaders:{type:Array,required:!0},propTableCategories:{type:Array,required:!0}}},m=r(17),d=r(25),v=r.n(d),h=r(396),component=Object(m.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{attrs:{headers:e.propTableHeaders,items:e.propTableCategories,"hide-actions":"","disable-initial-sort":""},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[r("a",{staticClass:"subheading text-capitalize",staticStyle:{color:"#00BFA5"},attrs:{href:""}},[e._v(e._s(t.item.name))])]),e._v(" "),r("td",{staticClass:"text-xs-right"},[r("span",[e._v("(")]),e._v(e._s(t.item.posts)),r("span",[e._v(")")])])]}}])})},[],!1,null,null,null),y=component.exports;v()(component,{VDataTable:h.a});var C={props:{postObject:{type:Object,required:!0}}},f=r(131),_=r(129),T=r(127),x=r(190),k=r(124),j=r(130),L=r(321),w=Object(m.a)(C,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mb-4",attrs:{color:"#F5F5F5",elevation:"0"}},[r("v-card-title",[r("v-list-tile-avatar",{attrs:{color:"grey darken-3"}},[r("v-img",{staticClass:"elevation-6",attrs:{src:e.postObject.avatar}})],1),e._v(" "),r("v-card-title",[r("div",[r("div",{staticClass:"headline text-capitalize pb-1"},[e._v(e._s(e.postObject.user))]),e._v(" "),r("span",{staticClass:"grey--text text-uppercase"},[e._v(e._s(e.postObject.date))])])])],1),e._v(" "),r("div",{staticClass:"pl-5"},[r("div",{staticClass:"subheading grey--text pl-5"},[e._v("\n            "+e._s(e.postObject.comment)+"\n        ")]),e._v(" "),r("v-list-tile",{staticClass:"grow pl-4"},[r("v-list-tile-content",[r("v-btn",{attrs:{depressed:"",small:"",color:"#E0E0E0"}},[e._v("Reply")])],1)],1)],1)],1)},[],!1,null,null,null),S=w.exports;v()(w,{VBtn:f.a,VCard:_.a,VCardTitle:T.a,VImg:x.a,VListTile:k.a,VListTileAvatar:j.a,VListTileContent:L.a});var O={components:{ContactAgent:n.a,CategoriesTable:y,PostComponent:S},data:function(){return{categoriesLinks:[{title:"news",link:""},{title:"evens",link:""}],categoriesTags:[{title:"#HTML",link:"/"},{title:"#Trends",link:"/"}],agent:{name:"Aaron Holmes",src:l.a,subTitle:"real estate agent",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iure atque sit ratione vitae neque! Laborum voluptate eius, laboriosam explicabo, ipsum dolor sit amet, consectetur adipisicing elit. Ab, iure!",heightAgentCard:"300px"},headers:[{text:"CATEGORIES",align:"left",sortable:!1,value:"name"},{text:"",value:"iron"}],categories:[{name:"creates",posts:"12"},{name:"news",posts:"22"},{name:"design",posts:"37"},{name:"HTML",posts:"42"},{name:"web dev.",posts:"14"}],posts:[{user:"james brand",avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",date:"january 9, 2018 at 2:21"},{user:"james brand",avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",date:"january 9, 2018 at 2:21"},{user:"james brand",avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",date:"january 9, 2018 at 2:21"},{user:"james brand",avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",date:"january 9, 2018 at 2:21"}]}}},H=r(122),V=r(120),A=r(121),B=r(324),D=Object(m.a)(O,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-xs":"",fluid:"","mt-4":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",sm8:"","mb-4":""}},[r("div",[r("p",{staticClass:"title font-weight-light newstitle"},[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?")]),e._v(" "),r("p",{staticClass:"subheading grey--text"},[e._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.\n                ")]),e._v(" "),r("p",{staticClass:"subheading grey--text"},[e._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.\n                ")]),e._v(" "),r("p",{staticClass:"subheading grey--text"},[e._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.\n                ")]),e._v(" "),r("p",{staticClass:"subheading grey--text"},[e._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.\n                ")]),e._v(" "),r("p",{staticClass:"subheading grey--text"},[e._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.\n                ")])]),e._v(" "),r("div",[r("p",{staticClass:"subheading"},[e._v("Categories: \n                        "),e._l(e.categoriesLinks,function(t){return r("a",{key:t.name,staticClass:"subheading text-capitalize",staticStyle:{color:"#00BFA5"},attrs:{href:t.link}},[e._v("\n                            "+e._s(t.title)+" \n                        ")])}),e._v("\n                        Tags:\n                        "),e._l(e.categoriesTags,function(t){return r("a",{key:t.title,staticClass:"subheading text-capitalize",staticStyle:{color:"#00BFA5"},attrs:{href:t.link}},[e._v("\n                            "+e._s(t.title)+" \n                        ")])})],2)]),e._v(" "),e._l(e.posts,function(e,i){return r("div",{key:i},[r("PostComponent",{attrs:{postObject:e}})],1)})],2),e._v(" "),r("v-flex",{staticClass:"pa-1",attrs:{xs12:"",sm4:"",md3:""}},[r("div",{staticClass:"mb-2"},[r("v-text-field",{attrs:{label:"Search",color:"teal accent-4",outline:"",placeholder:"Enter a key and hit enter"}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("CategoriesTable",{attrs:{propTableHeaders:e.headers,propTableCategories:e.categories}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("ContactAgent",{staticClass:"transparentCard",attrs:{agentObject:e.agent,heightCard:e.agent.heightAgentCard},scopedSlots:e._u([{key:"butname",fn:function(){return[e._v("\n                            Learn More\n                        ")]},proxy:!0}])})],1)])],1)],1)},[],!1,null,null,null);t.default=D.exports;v()(D,{VContainer:H.a,VFlex:V.a,VLayout:A.a,VTextField:B.a})}}]);