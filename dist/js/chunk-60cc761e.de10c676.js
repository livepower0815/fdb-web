(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60cc761e"],{"1d89":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{position:"relative",float:"left"}},["password"===e.pt?s("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:a("54e1"),alt:"colse-eye"},on:{click:e.togglePwd}}):e._e(),"text"===e.pt?s("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:e.togglePwd}}):e._e()])},o=[],r={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(e){this.$emit("update:pwdType",e)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},n=r,c=a("2877"),i=Object(c["a"])(n,s,o,!1,null,null,null);t["a"]=i.exports},"37a9":function(e,t,a){"use strict";a("c0d6")},"4ec6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"newpwd-bg"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"newpwd-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[s("div",{staticClass:"main"},[s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),s("div",{staticClass:"title"},[e._v("建立新的密碼")]),s("div",{staticClass:"newpwd-sub"},[e._v("輸入新的密碼，完成後須以新密碼登入")]),s("div",{staticClass:"newpwd-main"},[s("div",{staticClass:"title"},[e._v("密碼")]),"checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.newPassword,expression:"formData.newPassword"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.formData.newPassword)?e._i(e.formData.newPassword,null)>-1:e.formData.newPassword},on:{change:function(t){var a=e.formData.newPassword,s=t.target,o=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.formData,"newPassword",a.concat([r])):n>-1&&e.$set(e.formData,"newPassword",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.formData,"newPassword",o)}}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.newPassword,expression:"formData.newPassword"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.formData.newPassword,null)},on:{change:function(t){return e.$set(e.formData,"newPassword",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.newPassword,expression:"formData.newPassword"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:e.passwordType},domProps:{value:e.formData.newPassword},on:{input:function(t){t.target.composing||e.$set(e.formData,"newPassword",t.target.value)}}}),s("PasswordIcon",{attrs:{"pwd-type":e.passwordType},on:{"update:pwdType":function(t){e.passwordType=t},"update:pwd-type":function(t){e.passwordType=t}}})],1),s("div",{staticClass:"newpwd-main",staticStyle:{"margin-bottom":"60px"}},[s("div",{staticClass:"title"},[e._v("再次確認")]),"checkbox"===e.checkPasswordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.doubleCheck,expression:"formData.doubleCheck"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.formData.doubleCheck)?e._i(e.formData.doubleCheck,null)>-1:e.formData.doubleCheck},on:{change:function(t){var a=e.formData.doubleCheck,s=t.target,o=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.formData,"doubleCheck",a.concat([r])):n>-1&&e.$set(e.formData,"doubleCheck",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.formData,"doubleCheck",o)}}}):"radio"===e.checkPasswordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.doubleCheck,expression:"formData.doubleCheck"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.formData.doubleCheck,null)},on:{change:function(t){return e.$set(e.formData,"doubleCheck",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.doubleCheck,expression:"formData.doubleCheck"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:e.checkPasswordType},domProps:{value:e.formData.doubleCheck},on:{input:function(t){t.target.composing||e.$set(e.formData,"doubleCheck",t.target.value)}}}),s("PasswordIcon",{attrs:{"pwd-type":e.checkPasswordType},on:{"update:pwdType":function(t){e.checkPasswordType=t},"update:pwd-type":function(t){e.checkPasswordType=t}}})],1),s("a",{staticClass:"newpwd-main-btn",attrs:{href:"javascript:void(0)"},on:{click:e.resetPassword}},[e._v("儲存密碼")])])]),s("div",{staticClass:"newpwd-kv-block"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:a("e36b"),alt:"logo"}})])],1)])},o=[],r=a("1da1"),n=(a("d3b7"),a("96cf"),a("1d89")),c=a("1602"),i={name:"NewPassword",components:{PasswordIcon:n["a"]},data:function(){return{isLoading:!1,passwordType:"password",checkPasswordType:"password",formData:{newPassword:"",doubleCheck:""}}},mounted:function(){this.$route.query.AuthCore||(this.$message.error("無效頁面，倒轉回到首頁"),this.$router.push({name:"Home"}))},methods:{resetPassword:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.validate();case 4:return t.next=6,Object(c["f"])({core:e.$route.query.AuthCore,newPassword:e.formData.newPassword});case 6:e.$message.success("設定成功"),e.$router.push({name:"Login"}),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),t.t0.isHttpError?e.$message.error((null===(a=t.t0.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.resultMsg)||"建立失敗"):e.$message.error(t.t0.message),console.error(t.t0);case 14:e.isLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[1,10]])})))()},validate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.formData.newPassword)){t.next=2;break}return t.abrupt("return",Promise.reject(new Error("密碼：6位數以上，含英數字，不含特殊符號")));case 2:if(e.formData.newPassword===e.formData.doubleCheck){t.next=4;break}return t.abrupt("return",Promise.reject(new Error("確認密碼：密碼要與新密碼一致")));case 4:return t.abrupt("return","done");case 5:case"end":return t.stop()}}),t)})))()}}},d=i,l=(a("37a9"),a("2877")),p=Object(l["a"])(d,s,o,!1,null,"30a935e0",null);t["default"]=p.exports},"54e1":function(e,t,a){e.exports=a.p+"img/close-eye.22e04588.svg"},c0d6:function(e,t,a){}}]);