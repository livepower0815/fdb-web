(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{804:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(14),r(50);var n=function(t){var e,r,n=document.querySelector(t),c=n.childNodes,l=!1;function o(t){l=!0,e=t.pageX-n.offsetLeft,r=n.scrollLeft}function d(){l=!1,c.forEach((function(t){t.classList.remove("-pointer-none")}))}function m(t){if(t.preventDefault(),l){var o=t.pageX-n.offsetLeft-e;n.scrollLeft=r-o,c.forEach((function(t){t.classList.add("-pointer-none")}))}}return n.addEventListener("mousemove",m),n.addEventListener("mousedown",o,!1),n.addEventListener("mouseup",d,!1),n.addEventListener("mouseleave",d,!1),function(){n.removeEventListener("mousemove",m),n.removeEventListener("mousedown",o,!1),n.removeEventListener("mouseup",d,!1),n.removeEventListener("mouseleave",d,!1)}}},861:function(t,e,r){"use strict";r.r(e);r(131),r(48);var n=r(4),c=(r(37),r(14),r(72),r(804)),l={data:function(){return{activeName:"first",hostname:"",streamData:{live:0},pollingTimer:null,recommends:[{title:"FDB Title",tags:{name:"FDBTAG",id:"1"},date:"2022-09-20T22:00:19.94",img:"loading"},{title:"FDB Title",tags:{name:"FDBTAG",id:"1"},date:"2022-09-20T22:00:19.94",img:"loading"},{title:"FDB Title",tags:{name:"FDBTAG",id:"1"},date:"2022-09-20T22:00:19.94",img:"loading"},{title:"FDB Title",tags:{name:"FDBTAG",id:"1"},date:"2022-09-20T22:00:19.94",img:"loading"}],adList:[],removeSliderEvent:function(){}}},computed:{isLive:function(){return 1===this.streamData.live}},mounted:function(){this.hostname=window.location.hostname,this.getStreamSetting(),this.getRecommendNews(),this.getCommercial(),this.startPolling(),this.removeSliderEvent=Object(c.a)(".article-list")},destroyed:function(){this.pollingTimer&&window.clearInterval(this.pollingTimer),this.removeSliderEvent()},methods:{handleClick:function(){},getStreamSetting:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.stream.getStreamSetting();case 3:r=e.sent,t.streamData=r.data,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getRecommendNews:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.stream.getStreamNews();case 3:r=e.sent,t.recommends=r,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCommercial:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={adPosition:3},e.next=4,t.$api.commercial.getCommercial(r);case 4:n=e.sent,t.adList=n,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},startPolling:function(){this.pollingTimer=window.setInterval(this.getStreamSetting,6e4)}}},o=r(21),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"live"},[e("div",{staticClass:"live-centre"},[e("div",{staticClass:"container"},[e("div",{staticClass:"live-centre__lf",class:{"-full":!t.isLive,"-is-play-list":!t.isLive}},[t.isLive?e("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(t.streamData.ytkey),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/videoseries?list=".concat(t.streamData.liveListUrl),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLive,expression:"isLive"}],staticClass:"live-centre__rt"},[[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("chat_room"),name:"first"}},[e("div",{staticClass:"live-content"},[e("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/live_chat?v=".concat(t.streamData.ytkey,"&embed_domain=").concat(t.hostname),frameborder:"0"}})])]),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("teacher_presentation"),name:"second"}},[e("div",{staticClass:"live-content"},[e("div",{staticClass:"live-content__title"},[t._v(t._s(t.$t("teacher_presentation")))]),t._v(" "),e("div",{staticClass:"live-content__user"},[e("div",{staticClass:"user-photo"},[e("img",{staticClass:"user-photo__img",attrs:{src:t.streamData.streamerImg,alt:"streamer image"}})]),t._v(" "),e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-info__id"},[e("span",{staticClass:"id-text"},[t._v(t._s(t.streamData.streamer))])]),t._v(" "),e("div",{staticClass:"user-info__dec"},[e("span",{staticClass:"dec-text"},[t._v(t._s(t.streamData.experience))])])])]),t._v(" "),e("div",{staticClass:"live-content__dec"},[e("p",{staticClass:"dec-text"},[t._v(t._s(t.$t("teach_point"))+"：")]),t._v(" "),e("p",{staticClass:"dec-text"},[t._v(t._s(t.streamData.direction))])])])])],1)]],2)])]),t._v(" "),e("div",{staticClass:"article-slide"},[e("div",{staticClass:"container"},[e("div",{staticClass:"article-list"},t._l(t.recommends,(function(article){return e("NuxtLink",{key:article.id,staticClass:"article-card -row",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("div",{staticClass:"article-card__photo"},["loading"===article.img?e("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{display:"inline-block",width:"142px",height:"142px"}}):e("img",{staticClass:"photo-img",attrs:{src:article.img,alt:article.title}})]),t._v(" "),e("div",{staticClass:"article-card__content"},[e("div",{staticClass:"card-tag"},t._l(article.tags,(function(r){return e("div",{key:r.id,staticClass:"card-tag__item"},[e("span",{staticClass:"item-text"},[t._v("＃"+t._s(r.name))])])})),0),t._v(" "),e("div",{staticClass:"card-title"},[e("h3",{staticClass:"card-title__text"},[t._v(t._s(article.title))])]),t._v(" "),e("div",{staticClass:"card-date"},[e("span",{staticClass:"card-date__text"},[t._v(t._s(t.$formatDate(article.date)))])])])])})),1)])]),t._v(" "),e("div",{staticClass:"ad-list"},[e("div",{staticClass:"container"},t._l(t.adList,(function(r,n){return e("a",{key:n,staticClass:"ad-list__item",attrs:{href:r.url,target:"_blank"}},[e("div",{staticClass:"item-title",class:{"-top":1===r.titlePosition,"-bottom":3===r.titlePosition}},[e("h3",{staticClass:"item-title__text",style:{color:r.titleColor}},[t._v(t._s(r.title))])]),t._v(" "),e("img",{staticClass:"item-img",attrs:{src:r.img,alt:r.imgAlt}})])})),0)])])}),[],!1,null,"693bc97c",null);e.default=component.exports}}]);