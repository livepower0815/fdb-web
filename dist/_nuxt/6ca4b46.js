(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{791:function(e,t,n){var content=n(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("57f9cf07",content,!0,{sourceMap:!1})},801:function(e,t,n){"use strict";n(791)},802:function(e,t,n){var r=n(37)(!1);r.push([e.i,".fdb-google-btn[data-v-a2eef8cc]{padding:2px;background-color:#1b73e8;border-radius:100px}",""]),e.exports=r},806:function(e,t,n){"use strict";n.r(t);n(46),n(50),n(70),n(13),n(106),n(51),n(107);var r=n(48),o=n(3),c=(n(39),n(60),function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=5;break}return e.next=3,new Promise((function(e){window.setTimeout((function(){e()}),100)}));case 3:e.next=0;break;case 5:window.google.accounts.id.initialize({client_id:"609031941340-kmrbpj2a3kne1931unv82tr6nlarncn3.apps.googleusercontent.com",callback:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l={TW:"zh-TW",EN:"en-US",CN:"zh-CN",JP:"ja",KR:"ko"},f={initialize:c,renderButton:function(e){var t=e.text,text=void 0===t?"signup_with":t,n=e.locale,r=void 0===n?"EN":n;window.google.accounts.id.renderButton(document.getElementById("g-login-button"),{theme:"filled_blue",text:text,shape:"circle",locale:l[r]||"en-US"})}};function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={name:"GoogleBtn",props:{config:{type:Object,default:function(){return{}}}},mounted:function(){this.initGoogleAccount()},methods:{initGoogleAccount:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.initialize(e.handleCredentialResponse);case 2:f.renderButton(w({locale:e.$route.params.lang},e.config));case 3:case"end":return t.stop()}}),t)})))()},handleCredentialResponse:function(e){if(e.error)return console.error(e.error);this.$emit("success",e)}}},h=(n(801),n(21)),component=Object(h.a)(O,(function(){return(0,this._self._c)("div",{staticClass:"fdb-google-btn",attrs:{id:"g-login-button"}})}),[],!1,null,"a2eef8cc",null);t.default=component.exports}}]);