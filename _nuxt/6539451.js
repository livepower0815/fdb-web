(window.webpackJsonp=window.webpackJsonp||[]).push([[37,8,12],{770:function(t,e,r){var content=r(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("42642f59",content,!0,{sourceMap:!1})},785:function(t,e,r){"use strict";r.r(e);r(48),r(53),r(75),r(14),r(111),r(54),r(112);var n=r(50);r(52);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={name:"Pager",props:{pager:{type:Object,required:!0,default:function(){return console.error('Please set pagination "props: pager" in route.name: '.concat(this.$parent.$route.name)),{pageIndex:1,pageSize:25,totalCount:0}}},getData:{type:Function,required:!0,default:function(){console.error('Please set pagination "props: getData" in route.name: '.concat(this.$parent.$route.name))}}},computed:{customAttr:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({small:!1,layout:"prev, pager, next",pagerCount:5},this.$attrs)}},methods:{pagerEvent:function(t,e){"pageChange"===e&&(this.pager.pageIndex=t),this.getData()}}},l=o,d=(r(786),r(24)),component=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("el-pagination",t._b({staticClass:"fdb-pager",attrs:{"current-page":t.pager.pageIndex,"page-size":t.pager.pageSize,total:t.pager.totalCount},on:{"update:currentPage":function(e){return t.$set(t.pager,"pageIndex",e)},"update:current-page":function(e){return t.$set(t.pager,"pageIndex",e)},"update:pageSize":function(e){return t.$set(t.pager,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pager,"pageSize",e)},"current-change":function(e){return t.pagerEvent(e,"pageChange")}}},"el-pagination",t.customAttr,!1))}),[],!1,null,"dfbe7e32",null);e.default=component.exports},786:function(t,e,r){"use strict";r(770)},787:function(t,e,r){var n=r(38)(!1);n.push([t.i,'.fdb-pager[data-v-dfbe7e32]{display:flex;justify-content:center;width:100%;padding:0}.fdb-pager[data-v-dfbe7e32] .btn-prev{height:32px;line-height:32px;color:#c0c4cc;background-color:unset}.fdb-pager[data-v-dfbe7e32] .el-pager li{min-width:32px;height:32px;margin:0 4px;font-family:"Noto Sans CJK TC";line-height:30px;color:#c0c4cc;background-color:unset;border-radius:5px}.fdb-pager[data-v-dfbe7e32] .el-pager li:hover{box-sizing:border-box;border:1px solid #62ffff}.fdb-pager[data-v-dfbe7e32] .el-pager li.active{box-sizing:border-box;cursor:default;border:1px solid #62ffff}.fdb-pager[data-v-dfbe7e32] .btn-next{height:32px;line-height:32px;color:#c0c4cc;background-color:unset}',""]),t.exports=n},807:function(t,e,r){"use strict";r.r(e);var n={name:"AdList",props:{listData:{type:Array,required:!0}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ad-list"},t._l(t.listData,(function(r,n){return e("a",{key:n,staticClass:"ad-list__item",attrs:{href:r.url,target:"_blank"}},[e("div",{staticClass:"item-title",class:{"-top":1===r.titlePosition,"-bottom":3===r.titlePosition}},[e("h3",{staticClass:"item-title__text",style:{color:r.titleColor}},[t._v(t._s(r.title))])]),t._v(" "),e("img",{staticClass:"item-img",attrs:{src:r.img,alt:r.imgAlt}})])})),0)}),[],!1,null,null,null);e.default=component.exports},889:function(t,e,r){"use strict";r.r(e);r(52),r(53),r(86);var n=r(1),c=(r(17),r(76),r(430),r(14),{HOT:"0",GUIDE:"1",MARKET:"2",SYSTEM:"3"}),o={name:"News",middleware:function(t){var e=t.query,r=t.redirect,n=t.params;e.category||r({name:"lang-news",params:{lang:n.lang},query:{category:c.HOT}})},data:function(){return{categoryNum:c,topList:[],topLoading:!0,lastList:[],articleList:[],listLoading:!0,moreHashTags:[],adList:[],pager:{pageIndex:1,pageSize:12,totalCount:0}}},computed:{category:function(){return this.$route.query.category},topArticleOne:function(){return this.topList[0]?this.topList[0]:{}},topArticleRest:function(){return this.topList.slice(1,3)}},watch:{$route:function(){this.getTopList(),this.getLastList(),this.getArticleList(!0)}},mounted:function(){this.getTopList(),this.getLastList(),this.getArticleList(!0),this.getHashTags(),this.getCommercial()},methods:{getTopList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.topLoading=!0,r={category:Number(t.category)},e.next=5,t.$api.news.getTopNews(r);case 5:n=e.sent,t.topList=n.data,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:return e.prev=12,t.topLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},getLastList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={category:Number(t.category)},e.next=4,t.$api.news.getLastNews(r);case 4:n=e.sent,t.lastList=n.data,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getArticleList:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],r.prev=1,e.listLoading=!0,n&&(e.pager.pageIndex=1),c={pageIndex:e.pager.pageIndex,pageSize:e.pager.pageSize,category:Number(e.category),tag:null,keyWord:""},r.next=7,e.$api.news.getNews(c);case 7:o=r.sent,e.articleList=o.data.data,e.pager.pageIndex=o.data.pageIndex,e.pager.totalCount=o.data.totalCount,r.next=16;break;case 13:return r.prev=13,r.t0=r.catch(1),r.abrupt("return",Promise.reject(r.t0));case 16:return r.prev=16,e.listLoading=!1,r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})))()},switchCategory:function(t){this.$router.push({query:{category:t}})},getHashTags:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.news.getHashTags();case 3:r=e.sent,t.moreHashTags=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCommercial:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={adPosition:2},e.next=4,t.$api.commercial.getCommercial(r);case 4:n=e.sent,t.adList=n,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},l=o,d=r(24),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("div",{staticClass:"title-banner"},[e("div",{staticClass:"title-banner__content"},[e("div",{staticClass:"banner-title"},[t._v(t._s(t.$t("exclusive_news_center")))]),t._v(" "),e("div",{staticClass:"banner-info"},[t._v(t._s(t.$t("news_stays_with_you")))])])]),t._v(" "),e("div",{staticClass:"layout-content"},[e("div",{staticClass:"btn-tab"},t._l([{name:this.$t("hot_articles"),category:t.categoryNum.HOT},{name:this.$t("beginner_guide"),category:t.categoryNum.GUIDE},{name:this.$t("market_pulse"),category:t.categoryNum.MARKET},{name:this.$t("system_notification"),category:t.categoryNum.SYSTEM}],(function(r){return e("a",{key:r.category,staticClass:"btn-tab__item",class:{"btn-tab__item--active":t.category===r.category},on:{click:function(e){return e.preventDefault(),t.switchCategory(r.category)}}},[e("span",{staticClass:"btn-tab__item__text"},[t._v(t._s(r.name))])])})),0),t._v(" "),t.topLoading?e("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"article-top-loading",staticStyle:{height:"560px"}}):e("div",{staticClass:"article-top"},[e("div",{staticClass:"article-top__lf"},t._l(t.topArticleRest,(function(article){return e("div",{key:article.id,staticClass:"article-card"},[e("NuxtLink",{staticClass:"article-card__photo",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("img",{staticClass:"photo-img hover-image",attrs:{src:article.img,alt:article.title}})]),t._v(" "),e("div",{staticClass:"article-card__content"},[e("div",{staticClass:"card-tag"},t._l(article.tags,(function(r){return e("NuxtLink",{key:r.id,staticClass:"card-tag__item",attrs:{to:{name:"lang-tag-info-tagName",params:{lang:t.$route.params.lang,tagName:r.name}}}},[e("span",{staticClass:"item-text"},[t._v("＃"+t._s(r.name))])])})),1),t._v(" "),e("NuxtLink",{staticClass:"card-title",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("h3",{staticClass:"card-title__text hover-primary"},[t._v(t._s(article.title))])])],1)],1)})),0),t._v(" "),e("div",{staticClass:"article-top__main"},[t.topArticleOne?e("div",{key:t.topArticleOne.id,staticClass:"article-card"},[e("NuxtLink",{staticClass:"article-card__photo",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:t.topArticleOne.id}}}},[e("img",{staticClass:"photo-img hover-image",attrs:{src:t.topArticleOne.img,alt:t.topArticleOne.title}})]),t._v(" "),e("div",{staticClass:"article-card__content"},[e("div",{staticClass:"card-tag"},t._l(t.topArticleOne.tags,(function(r){return e("NuxtLink",{key:r.id,staticClass:"card-tag__item",attrs:{to:{name:"lang-tag-info-tagName",params:{lang:t.$route.params.lang,tagName:r.name}}}},[e("span",{staticClass:"item-text"},[t._v("＃"+t._s(r.name))])])})),1),t._v(" "),e("NuxtLink",{staticClass:"card-title",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:t.topArticleOne.id}}}},[e("h3",{staticClass:"card-title__text hover-primary"},[t._v(t._s(t.topArticleOne.title))])]),t._v(" "),e("div",{staticClass:"card-date"},[e("span",{staticClass:"card-date__text"},[t._v(t._s(t.$formatDate(t.topArticleOne.date)))])])],1)],1):t._e()]),t._v(" "),e("div",{staticClass:"article-top__rt"},t._l(t.lastList,(function(article){return e("div",{key:article.id,staticClass:"article-card"},[e("div",{staticClass:"article-card__content"},[e("div",{staticClass:"card-tag"},t._l(article.tags,(function(r){return e("NuxtLink",{key:r.id,staticClass:"card-tag__item",attrs:{to:{name:"lang-tag-info-tagName",params:{lang:t.$route.params.lang,tagName:r.name}}}},[e("span",{staticClass:"item-text"},[t._v("＃"+t._s(r.name))])])})),1),t._v(" "),e("NuxtLink",{staticClass:"card-title",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("h3",{staticClass:"card-title__text hover-primary"},[t._v(t._s(article.title))])]),t._v(" "),e("div",{staticClass:"card-dec"},[e("span",{staticClass:"card-dec__text"},[t._v(t._s(article.description))])]),t._v(" "),e("div",{staticClass:"card-date"},[e("span",{staticClass:"card-date__text"},[t._v(t._s(t.$formatDate(article.date)))])])],1)])})),0)]),t._v(" "),t.listLoading?e("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"article-list-loading",staticStyle:{height:"500px"}}):e("div",{staticClass:"article"},[e("div",{staticClass:"article-main"},[e("div",{staticClass:"article-list"},t._l(t.articleList,(function(article){return e("div",{key:article.id,staticClass:"article-card -row"},[e("NuxtLink",{staticClass:"article-card__photo",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("img",{staticClass:"photo-img hover-image",attrs:{src:article.img,alt:article.title}})]),t._v(" "),e("div",{staticClass:"article-card__content"},[e("div",{staticClass:"card-tag"},t._l(article.tags,(function(r){return e("NuxtLink",{key:r.id,staticClass:"card-tag__item",attrs:{to:{name:"lang-tag-info-tagName",params:{lang:t.$route.params.lang,tagName:r.name}}}},[e("span",{staticClass:"item-text"},[t._v("＃"+t._s(r.name))])])})),1),t._v(" "),e("NuxtLink",{staticClass:"card-title",attrs:{to:{name:"lang-article-articleId",params:{lang:t.$route.params.lang,articleId:article.id}}}},[e("h3",{staticClass:"card-title__text hover-primary"},[t._v(t._s(article.title))])]),t._v(" "),e("div",{staticClass:"card-dec"},[e("span",{staticClass:"card-dec__text"},[t._v(t._s(article.description))])]),t._v(" "),e("div",{staticClass:"card-date"},[e("span",{staticClass:"card-date__text"},[t._v(t._s(t.$formatDate(article.date)))])])],1)],1)})),0),t._v(" "),e("CommonPager",{staticStyle:{"margin-top":"32px"},attrs:{"get-data":t.getArticleList,pager:t.pager}})],1),t._v(" "),e("div",{staticClass:"article-other"},[e("div",{staticClass:"n-recommend"},[e("div",{staticClass:"n-recommend__title"},[e("h3",{staticClass:"title-text"},[t._v(t._s(t.$t("explore_more_articles")))])]),t._v(" "),e("div",{staticClass:"tag-list"},t._l(t.moreHashTags,(function(r){return e("NuxtLink",{key:r.id,staticClass:"tag-list__item",attrs:{to:{name:"lang-tag-info-tagName",params:{lang:t.$route.params.lang,tagName:r.name}}}},[e("span",{staticClass:"item-text"},[t._v(t._s(r.name))])])})),1),t._v(" "),e("CommonAdList",{attrs:{"list-data":t.adList}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonPager:r(785).default,CommonAdList:r(807).default})}}]);