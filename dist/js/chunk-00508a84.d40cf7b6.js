(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00508a84"],{"1d89":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{position:"relative",float:"left"}},["password"===t.pt?s("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:e("54e1"),alt:"colse-eye"},on:{click:t.togglePwd}}):t._e(),"text"===t.pt?s("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:t.togglePwd}}):t._e()])},r=[],o={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(t){this.$emit("update:pwdType",t)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},n=o,i=e("2877"),c=Object(i["a"])(n,s,r,!1,null,null,null);a["a"]=c.exports},"321b":function(t,a,e){},"54e1":function(t,a,e){t.exports=e.p+"img/close-eye.22e04588.svg"},"59ff":function(t,a,e){"use strict";e("321b")},ede4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login-bg"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"login-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[s("div",{staticClass:"main"},[s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),s("div",{staticClass:"title"},[t._v("會員登入")]),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title"},[t._v("電子郵箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],staticClass:"input",attrs:{type:"text",placeholder:"example@mail.com",autocomplete:"off"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title"},[t._v("密碼")]),"checkbox"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.formData.password)?t._i(t.formData.password,null)>-1:t.formData.password},on:{change:function(a){var e=t.formData.password,s=a.target,r=!!s.checked;if(Array.isArray(e)){var o=null,n=t._i(e,o);s.checked?n<0&&t.$set(t.formData,"password",e.concat([o])):n>-1&&t.$set(t.formData,"password",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.formData,"password",r)}}}):"radio"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.formData.password,null)},on:{change:function(a){return t.$set(t.formData,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:t.passwordType},domProps:{value:t.formData.password},on:{input:function(a){a.target.composing||t.$set(t.formData,"password",a.target.value)}}}),s("PasswordIcon",{attrs:{"pwd-type":t.passwordType},on:{"update:pwdType":function(a){t.passwordType=a},"update:pwd-type":function(a){t.passwordType=a}}})],1),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title"},[t._v("圖形驗證碼："+t._s(t.captchaCode))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captchaCode,expression:"formData.captchaCode"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.formData.captchaCode},on:{input:function(a){a.target.composing||t.$set(t.formData,"captchaCode",a.target.value)}}})]),s("div",{staticClass:"login-main flex-center"},[s("span",{staticClass:"text-link",on:{click:function(a){return t.$router.push("/reset-password")}}},[t._v("忘記密碼，請重設密碼")])]),s("a",{staticClass:"login-main-btn",attrs:{href:"javascript:void(0)"},on:{click:t.doLogin}},[t._v("登入")]),s("div",{staticClass:"login-main-tips"},[t._v("還沒創建過帳戶？請 "),s("span",{staticClass:"text-link",on:{click:function(a){return t.$router.push("/register")}}},[t._v("註冊")])])])]),s("div",{staticClass:"login-kv-block"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:e("e36b"),alt:"logo"}})])],1)])},r=[],o=e("1da1"),n=(e("d3b7"),e("96cf"),e("1602")),i=e("1d89"),c={name:"Login",components:{PasswordIcon:i["a"]},data:function(){return{isLoading:!1,passwordType:"password",formData:{account:"",password:"",captchaCode:""},captchaCode:""}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(n["a"])();case 3:e=a.sent,t.captchaCode=e.code,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},doLogin:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.prev=1,a.next=4,t.validate();case 4:return e={account:t.formData.account,password:t.formData.password,captchaCode:t.formData.captchaCode},a.next=7,t.$store.dispatch("user/login",e);case 7:t.$message.success("登入成功"),t.$router.push({name:"Home"}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](1),console.error(a.t0.message),t.$message.error(a.t0.message);case 15:t.isLoading=!1;case 16:case"end":return a.stop()}}),a,null,[[1,11]])})))()},validate:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(/\S+@\S+.\S+/.test(t.formData.account)){a.next=2;break}return a.abrupt("return",Promise.reject(new Error("電子郵件：格式錯誤")));case 2:if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(t.formData.password)){a.next=4;break}return a.abrupt("return",Promise.reject(new Error("密碼：6位數以上，含英數字，不含特殊符號")));case 4:return a.abrupt("return","done");case 5:case"end":return a.stop()}}),a)})))()}}},p=c,d=(e("59ff"),e("2877")),l=Object(d["a"])(p,s,r,!1,null,"d9063b2c",null);a["default"]=l.exports}}]);