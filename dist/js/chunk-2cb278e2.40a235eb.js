(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb278e2"],{"58d8":function(e,t,a){"use strict";a("7af8")},"6d4e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reset-bg"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"reset-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[s("div",{staticClass:"main"},[s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),s("div",{staticClass:"title"},[e._v("重置您的密碼")]),s("div",{staticClass:"reset-sub"},[e._v("請輸入註冊時電子郵件，進行密碼重置")]),s("div",{staticClass:"reset-main",staticStyle:{"margin-bottom":"64px"}},[s("div",{staticClass:"title"},[e._v("*電子郵箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"example@mail.com",autocomplete:"off"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("a",{staticClass:"reset-main-btn",attrs:{href:"javascript:void(0)"},on:{click:e.submitReq}},[e._v("發送密碼重置連結")]),s("div",{staticClass:"reset-main-tips"},[s("span",{staticClass:"text-link",on:{click:function(t){return e.$router.push("/login")}}},[e._v("回到登入畫面")])])])]),s("div",{staticClass:"reset-kv-block"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:a("e36b"),alt:"logo"}})])],1),s("el-dialog",{attrs:{title:"電子郵箱通知",visible:e.dialogVisible,width:"300px","show-close":!1,"custom-class":"fbd-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticStyle:{"text-align":"center"}},[s("span",[e._v("請去電子郵箱收取連結信件。")])]),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"fdb-btn-primary",on:{click:function(t){e.dialogVisible=!1}}},[e._v("關閉")])])])],1)},i=[],r=a("1da1"),n=(a("d3b7"),a("96cf"),a("1602")),o={name:"ResetPassword",data:function(){return{isLoading:!1,email:"",dialogVisible:!1}},methods:{submitReq:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.validate();case 4:return t.next=6,Object(n["e"])({email:e.email});case 6:e.dialogVisible=!0,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),t.t0.isHttpError?e.$message.error((null===(a=t.t0.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.resultMsg)||"重置失敗"):e.$message.error(t.t0.message),console.error(t.t0);case 13:e.isLoading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},validate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(/\S+@\S+.\S+/.test(e.email)){t.next=2;break}return t.abrupt("return",Promise.reject(new Error("電子郵件：格式錯誤")));case 2:return t.abrupt("return","done");case 3:case"end":return t.stop()}}),t)})))()}}},l=o,c=(a("58d8"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,"2277d1d0",null);t["default"]=u.exports},"7af8":function(e,t,a){}}]);