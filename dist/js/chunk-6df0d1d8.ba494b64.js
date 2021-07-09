(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6df0d1d8"],{"0f9e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-bg"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"register-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[s("div",{staticClass:"main"},[s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),s("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),s("div",{staticClass:"title"},[t._v("創建帳戶")]),s("div",{staticClass:"register-main"},[s("div",{staticClass:"title"},[t._v("*使用者名稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",attrs:{type:"text",placeholder:"請輸入使用者名稱"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),s("div",{staticClass:"register-main"},[s("div",{staticClass:"title"},[t._v("*電子郵箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",attrs:{type:"text",placeholder:"example@mail.com"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),s("div",{staticClass:"register-main"},[s("div",{staticClass:"title"},[t._v("行動電話")]),s("div",{staticClass:"split-input"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.areaCore,expression:"formData.areaCore"}],staticClass:"input",staticStyle:{width:"80px","margin-right":"8px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"areaCore",e.target.multiple?a:a[0])}}},[s("option",{attrs:{value:"886"}},[t._v("+886")]),s("option",{attrs:{value:"886"}},[t._v("+885")]),s("option",{attrs:{value:"886"}},[t._v("+884")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",staticStyle:{flex:"1"},attrs:{type:"text",placeholder:"912345678",autocomplete:"off"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})])]),s("div",{staticClass:"register-main"},[s("div",{staticClass:"title"},[t._v("*密碼")]),"checkbox"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.formData.password)?t._i(t.formData.password,null)>-1:t.formData.password},on:{change:function(e){var a=t.formData.password,s=e.target,o=!!s.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&t.$set(t.formData,"password",a.concat([r])):i>-1&&t.$set(t.formData,"password",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.formData,"password",o)}}}):"radio"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.formData.password,null)},on:{change:function(e){return t.$set(t.formData,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"數入6位數以上，含英數字",autocomplete:"off",type:t.passwordType},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),s("PasswordIcon",{attrs:{"pwd-type":t.passwordType},on:{"update:pwdType":function(e){t.passwordType=e},"update:pwd-type":function(e){t.passwordType=e}}})],1),s("div",{staticClass:"register-main"},[s("div",{staticClass:"title"},[t._v("邀請碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.invitCode,expression:"formData.invitCode"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.formData.invitCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"invitCode",e.target.value)}}})]),t._m(0),s("a",{staticClass:"register-main-btn",attrs:{href:"javascript:void(0)"},on:{click:t.doRegister}},[t._v("註冊")]),s("div",{staticClass:"register-main-tips"},[t._v("已經有帳號？請 "),s("span",{staticClass:"text-link",on:{click:function(e){return t.$router.push("/login")}}},[t._v("登入")])])])]),s("div",{staticClass:"register-kv-block"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:a("e36b"),alt:"logo"}})])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-main"},[a("input",{staticClass:"check",attrs:{type:"checkbox"}}),a("div",{staticClass:"check-title"},[t._v("我已閱讀並同意FDB的服務與隱私條款")])])}],r=a("1da1"),i=(a("96cf"),a("b0c0"),a("1d89")),n=a("1602"),l={name:"Register",components:{PasswordIcon:i["a"]},data:function(){return{passwordType:"password",isLoading:!1,formData:{name:"",email:"",areaCore:"886",phone:"",password:"",invitCode:""}}},methods:{doRegister:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,a={name:t.formData.name,email:t.formData.email,areaCore:"+886",phone:t.formData.phone,password:t.formData.password,invitCode:t.formData.invitCode},e.next=5,Object(n["d"])(a);case 5:s=e.sent,console.log(s),t.$message.success("成功請信箱收信"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.error(e.t0),t.$message.error("註冊失敗");case 14:t.isLoading=!1;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}},p=l,c=(a("43d1"),a("2877")),d=Object(c["a"])(p,s,o,!1,null,"023675b0",null);e["default"]=d.exports},"1d89":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative",float:"left"}},["password"===t.pt?s("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:a("54e1"),alt:"colse-eye"},on:{click:t.togglePwd}}):t._e(),"text"===t.pt?s("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:t.togglePwd}}):t._e()])},o=[],r={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(t){this.$emit("update:pwdType",t)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},i=r,n=a("2877"),l=Object(n["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},"43d1":function(t,e,a){"use strict";a("882f")},"54e1":function(t,e,a){t.exports=a.p+"img/close-eye.22e04588.svg"},"882f":function(t,e,a){}}]);