(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2407d5ec"],{"1d89":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{position:"relative",float:"left"}},["password"===t.pt?s("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:e("54e1"),alt:"colse-eye"},on:{click:t.togglePwd}}):t._e(),"text"===t.pt?s("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:t.togglePwd}}):t._e()])},r=[],o={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(t){this.$emit("update:pwdType",t)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},i=o,n=e("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);a["a"]=c.exports},"1fee":function(t,a,e){},"2c3e":function(t,a,e){"use strict";e("1fee")},"54e1":function(t,a,e){t.exports=e.p+"img/close-eye.22e04588.svg"},ede4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"login-bg"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"login-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[s("div",{staticClass:"main"},[s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),s("div",{staticClass:"title"},[t._v("會員登入")]),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title"},[t._v("電子郵箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],staticClass:"input",attrs:{type:"text",placeholder:"example@mail.com",autocomplete:"off"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title"},[t._v("密碼")]),"checkbox"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.formData.password)?t._i(t.formData.password,null)>-1:t.formData.password},on:{change:function(a){var e=t.formData.password,s=a.target,r=!!s.checked;if(Array.isArray(e)){var o=null,i=t._i(e,o);s.checked?i<0&&t.$set(t.formData,"password",e.concat([o])):i>-1&&t.$set(t.formData,"password",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.formData,"password",r)}}}):"radio"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.formData.password,null)},on:{change:function(a){return t.$set(t.formData,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:t.passwordType},domProps:{value:t.formData.password},on:{input:function(a){a.target.composing||t.$set(t.formData,"password",a.target.value)}}}),s("PasswordIcon",{attrs:{"pwd-type":t.passwordType},on:{"update:pwdType":function(a){t.passwordType=a},"update:pwd-type":function(a){t.passwordType=a}}})],1),s("div",{staticClass:"login-main"},[s("div",{staticClass:"title flex-center",staticStyle:{"justify-content":"flex-start"}},[t._v(" 圖形驗證碼： "),t.captchaImg?s("img",{staticStyle:{width:"80px"},attrs:{src:"data:image/(png|jpg);base64,"+t.captchaImg,alt:"captchaImg"}}):s("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{height:"35px",width:"80px"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}}),s("i",{staticClass:"el-icon-refresh-right captcha-refresh",on:{click:t.init}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captchaCode,expression:"formData.captchaCode"}],staticClass:"input",attrs:{type:"text",placeholder:"請輸入圖形驗證碼"},domProps:{value:t.formData.captchaCode},on:{input:function(a){a.target.composing||t.$set(t.formData,"captchaCode",a.target.value)}}})]),s("div",{staticClass:"login-main flex-center"},[s("span",{staticClass:"text-link",on:{click:function(a){return t.$router.push("/reset-password")}}},[t._v("忘記密碼，請重設密碼")])]),s("a",{staticClass:"fdb-btn-primary-hover login-main-btn",attrs:{href:"javascript:void(0)"},on:{click:t.doLogin}},[t._v("登入")]),s("div",{staticClass:"login-main-tips"},[t._v("還沒創建過帳戶？請 "),s("span",{staticClass:"text-link",on:{click:function(a){return t.$router.push("/register")}}},[t._v("註冊")])])])]),s("div",{staticClass:"login-kv-block"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:e("e36b"),alt:"logo"}})])],1),s("el-dialog",{attrs:{title:"登入失敗",visible:t.validateEmail.show,width:"310px","show-close":!1,"custom-class":"fbd-dialog"},on:{"update:visible":function(a){return t.$set(t.validateEmail,"show",a)}}},[t.validateEmail.hasSent?s("div",{staticStyle:{"text-align":"center"}},[t._v("認證信已重新發送")]):s("div",[s("div",{staticStyle:{color:"#eb4664","margin-bottom":"12px","text-align":"center"}},[t._v("帳號未確認")]),s("div",{staticStyle:{"text-align":"center"}},[t._v("請至信箱收取認證信件或重新發送認證信，如仍有異常請聯繫客服團隊")])]),s("span",{attrs:{slot:"footer"},slot:"footer"},[t.validateEmail.hasSent?s("div",{staticClass:"fdb-btn-default",on:{click:function(a){t.validateEmail.show=!1}}},[t._v("關閉")]):[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.validateEmail.loading,expression:"validateEmail.loading"}],staticClass:"fdb-btn-primary",staticStyle:{padding:"0 12px","margin-right":"8px"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"},on:{click:t.reSentEmail}},[t._v(" 重新寄發認證信 ")]),s("div",{staticClass:"fdb-btn-default",staticStyle:{padding:"0 12px"},on:{click:function(a){t.validateEmail.show=!1}}},[t._v("取消")])]],2)])],1)},r=[],o=e("1da1"),i=(e("d3b7"),e("96cf"),e("1602")),n=e("1d89"),c={name:"Login",components:{PasswordIcon:n["a"]},data:function(){return{isLoading:!1,passwordType:"password",formData:{account:"",password:"",captchaCode:""},captchaImg:"",validateEmail:{show:!1,loading:!1,hasSent:!1}}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.formData.captchaCode="",t.captchaImg="",a.next=5,Object(i["d"])();case 5:e=a.sent,t.captchaImg=e.img,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},doLogin:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e,s,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.prev=1,a.next=4,t.validate();case 4:return e={account:t.formData.account,password:t.formData.password,captchaCode:t.formData.captchaCode},a.next=7,t.$store.dispatch("user/login",e);case 7:s=a.sent,t.$store.commit("user/SET_TOKEN",s.data),t.$message.success("登入成功"),t.$router.push({name:"Dashboard"},(function(){})),a.next=17;break;case 13:a.prev=13,a.t0=a["catch"](1),a.t0.isHttpError?2===(null===(r=a.t0.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.result)&&(t.validateEmail.show=!0,t.validateEmail.hasSent=!1):t.$message.error(a.t0.message),console.error(a.t0);case 17:t.isLoading=!1;case 18:case"end":return a.stop()}}),a,null,[[1,13]])})))()},validate:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(/\S+@\S+.\S+/.test(t.formData.account)){a.next=2;break}return a.abrupt("return",Promise.reject(new Error("電子郵件：格式錯誤")));case 2:if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(t.formData.password)){a.next=4;break}return a.abrupt("return",Promise.reject(new Error("密碼：6位數以上，含英數字，不含特殊符號")));case 4:if(t.formData.captchaCode){a.next=6;break}return a.abrupt("return",Promise.reject(new Error("請輸入圖形驗證碼")));case 6:return a.abrupt("return","done");case 7:case"end":return a.stop()}}),a)})))()},reSentEmail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.validateEmail.loading=!0,a.prev=1,e={email:t.formData.account,password:t.formData.password},a.next=5,Object(i["h"])(e);case 5:t.validateEmail.hasSent=!0,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.error(a.t0);case 11:t.validateEmail.loading=!1;case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()}}},l=c,d=(e("2c3e"),e("2877")),p=Object(d["a"])(l,s,r,!1,null,"25fc03d8",null);a["default"]=p.exports}}]);