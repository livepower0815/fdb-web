(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a9030d5"],{"0cb2b":function(t,e,n){var a=n("7b0b"),i=Math.floor,c="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,o,u){var f=n+t.length,v=l.length,d=s;return void 0!==o&&(o=a(o),d=r),c.call(u,d,(function(a,c){var r;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":r=o[c.slice(1,-1)];break;default:var s=+c;if(0===s)return a;if(s>v){var u=i(s/10);return 0===u?a:u<=v?void 0===l[u-1]?c.charAt(1):l[u-1]+c.charAt(1):a}r=l[s-1]}return void 0===r?"":r}))}},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1b87":function(t,e,n){"use strict";n("5992")},"200a":function(t,e,n){t.exports=n.p+"img/news-chat-pic.79cf81c4.jpg"},4267:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgB7ZmLjdswDIbpoANkBG9w2aDeoCM0G/Q2qDe4buDbIOgESSfodQKlEyQb/KUquTWuR+phWamBfADhILJJkaZpiSZaOQ3NAEDHhx3Le3/cerFcWc5efrCcmqY50a3hSW9ZPrNckI5hGVhaqo2f+BPKMVRzhA19Ql7EQxiWPS0JykZd4olKA5cyR9Tju7VJpfAKYziyPLLsphOAC0Dnx46xuqgEiEubAQkPoT2X5TlC77x0YgX7gAHDsqNMvCMmYOORcohQbiM4O0/h0uug2Llk2YFLC4kDFQZ6SqWlko++hEHJCvHX5hb6HY+3GYh+SwsBV70k+hRFRlAy0MJATqVLrIION4j+xL6Wvp127cYfpZPsEvhMC+NtnIRhtWSPDjwI41+pHpKtjhRGB1ph/IXqcRL+f6AQkJfKxUunMoctMh7kxl+MNwcZqkjOPDa0ckYHrm8N1k4hYeiqXbcJnNRSPaRyeSaF0QGp2nRUD8mBn6QwOvBNGP9A9ZBshUv5mpcSUyXSu6DGYm4QbJsUJb0ShewtZIRdLfrxwYP8JvwdCdxmQ9Om6LMKv6BENOLtHYra8xHRWogHlNvUD4odg9ziAdeIwiLK6c8W0gRs7GkO0FNpZEB6Y2tAHPPbjEhoB8LdtQ7/thZ3SGstlnPCTyC2P7oU83uliEunJZlf/eD6pQblsRXPptgzKjgR212Oxd7Z6TOzvBOvHDFIx0a8h/BwIsOJd5SI7+HsvcGO3J7Bdg5aL9PPrFbsctgu119Cn1l53Kaq/flROEXdG/w3CHeipzXxyome1oh3oqc7d+6I/ALfFv9lVhszyAAAAABJRU5ErkJggg=="},5319:function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),c=n("50c4"),r=n("a691"),s=n("1d80"),l=n("8aa5"),o=n("0cb2b"),u=n("14c3"),f=Math.max,v=Math.min,d=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=a.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(n,a){var i=s(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,i,a):e.call(String(i),n,a)},function(t,a){if(!p&&h||"string"===typeof a&&-1===a.indexOf(g)){var s=n(e,t,this,a);if(s.done)return s.value}var m=i(t),A=String(this),x="function"===typeof a;x||(a=String(a));var b=m.global;if(b){var E=m.unicode;m.lastIndex=0}var C=[];while(1){var _=u(m,A);if(null===_)break;if(C.push(_),!b)break;var w=String(_[0]);""===w&&(m.lastIndex=l(A,c(m.lastIndex),E))}for(var R="",I=0,S=0;S<C.length;S++){_=C[S];for(var k=String(_[0]),y=f(v(r(_.index),A.length),0),T=[],P=1;P<_.length;P++)T.push(d(_[P]));var O=_.groups;if(x){var $=[k].concat(T,y,A);void 0!==O&&$.push(O);var U=String(a.apply(void 0,$))}else U=o(k,A,y,T,O,a);y>=I&&(R+=A.slice(I,y)+U,I=y+k.length)}return R+A.slice(I)}]}))},5884:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nwes"},[t._m(0),a("div",{staticClass:"news-content"},[a("div",{staticClass:"menu-bar"},[a("div",{staticClass:"menu-left"},[a("div",{staticClass:"menu-item",class:{active:"all"===t.activeTab},on:{click:function(e){t.activeTab="all"}}},[t._v("全部")]),a("div",{staticClass:"menu-item",class:{active:"forum"===t.activeTab},on:{click:function(e){t.activeTab="forum"}}},[t._v("論壇")]),a("div",{staticClass:"menu-item",class:{active:"bulletin"===t.activeTab},on:{click:function(e){t.activeTab="bulletin"}}},[t._v("公告")]),a("div",{staticClass:"menu-item",class:{active:"activity"===t.activeTab},on:{click:function(e){t.activeTab="activity"}}},[t._v("活動")])]),a("div",{staticClass:"menu-right"},[a("img",{staticClass:"icon-search",attrs:{src:n("4267"),alt:"search"},on:{click:function(e){t.showSearch=!t.showSearch}}}),a("input",{staticClass:"input",class:{hide:!t.showSearch},attrs:{type:"text"}})])]),"all"===t.activeTab?a("AllInfo"):t._e(),a("Information",{on:{loadArticle:t.loadArticle}}),a("Article")],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-banner"},[n("div",{staticClass:"banner-content"},[n("div",{staticClass:"banner-title"},[t._v("返多寶社群")]),n("div",{staticClass:"banner-info"},[t._v("逐步發展虛擬貨幣須知，發展成獨立的虛擬貨幣自媒體")])])])}],c=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all-info"},[t._m(0),n("div",{staticClass:"info-list"},t._l([{name:"論壇",class:"forum"},{name:"公告",class:"bulletin"},{name:"活動",class:"activity"}],(function(e){return n("div",{key:e.class,staticClass:"list-item"},[n("div",{staticClass:"list-main"},[n("div",{class:"list-tag info-bg-"+e.class},[t._v(t._s(e.name))]),n("div",{staticClass:"list-title"},[t._v("How to make a website look more attractive with illustrations.")]),n("div",{staticClass:"list-date"},[t._v("2020.03.01")])]),t._m(1,!0)])})),0)])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-main"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:n("8321"),alt:"announced"}})]),a("div",{staticClass:"info-tag"},[a("div",{staticClass:"info-tag-inside info-bg-bulletin"},[t._v("公告")])]),a("div",{staticClass:"info-title"},[t._v(" How to make a website look more attractive with illustrations. ")]),a("div",{staticClass:"info-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ")]),a("div",{staticClass:"info-date"},[t._v("2020.03.01")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-img"},[a("img",{attrs:{src:n("200a"),alt:"img"}})])}],s={name:"AllInfo"},l=s,o=(n("f6fa"),n("2877")),u=Object(o["a"])(l,c,r,!1,null,"3f4cedad",null),f=u.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information"},t._l(6,(function(e){return n("div",{key:e,staticClass:"info-card",on:{click:function(e){return t.$emit("loadArticle")}}},[t._m(0,!0),t._m(1,!0),n("div",{staticClass:"info-card-title"},[t._v(" How to make a website look more attractive with illustrations. ")]),n("div",{staticClass:"info-card-date"},[t._v("2020.03.01")])])})),0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-card-img"},[a("img",{attrs:{src:n("9066"),alt:"news"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-card-tag"},[n("div",{staticClass:"tag info-bg-activity"},[t._v("活動")])])}],p={name:"Information"},h=p,g=(n("dd10"),Object(o["a"])(h,v,d,!1,null,"6098894c",null)),m=g.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Article")])},x=[],b={name:"Article"},E=b,C=Object(o["a"])(E,A,x,!1,null,"2d80907a",null),_=C.exports,w={name:"News",components:{AllInfo:f,Information:m,Article:_},data:function(){return{activeTab:this.$route.query.tab||"all",showSearch:!1}},watch:{activeTab:function(t){this.$router.replace({query:{tab:t}})}},methods:{loadArticle:function(){this.activeTab="article"}}},R=w,I=(n("1b87"),Object(o["a"])(R,a,i,!1,null,"4d7e1ce4",null));e["default"]=I.exports},5992:function(t,e,n){},8321:function(t,e,n){t.exports=n.p+"img/news-announced-pic.e898d775.jpg"},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9066:function(t,e,n){t.exports=n.p+"img/news-pic.0901f566.jpg"},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),c=n("5692"),r=RegExp.prototype.exec,s=c("native-string-replace",String.prototype.replace),l=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],v=o||f||u;v&&(l=function(t){var e,n,i,c,l=this,v=u&&l.sticky,d=a.call(l),p=l.source,h=0,g=t;return v&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),n=new RegExp("^(?:"+p+")",d)),f&&(n=new RegExp("^"+p+"$(?!\\s)",d)),o&&(e=l.lastIndex),i=r.call(v?n:l,g),v?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=l.lastIndex,l.lastIndex+=i[0].length):l.lastIndex=0:o&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),f&&i&&i.length>1&&s.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=l},"9c92":function(t,e,n){},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},aa18:function(t,e,n){},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("9263"),c=n("d039"),r=n("b622"),s=n("9112"),l=r("species"),o=RegExp.prototype,u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),v=r("replace"),d=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),p=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,v){var h=r(t),g=!c((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=g&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!m||"replace"===t&&(!u||!f||d)||"split"===t&&!p){var A=/./[h],x=n(h,""[t],(function(t,e,n,a,c){var r=e.exec;return r===i||r===o.exec?g&&!c?{done:!0,value:A.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],E=x[1];a(String.prototype,t,b),a(o,h,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}v&&s(o[h],"sham",!0)}},dd10:function(t,e,n){"use strict";n("9c92")},f6fa:function(t,e,n){"use strict";n("aa18")}}]);