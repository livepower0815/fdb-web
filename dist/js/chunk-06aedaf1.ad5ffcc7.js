(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06aedaf1"],{"09cb":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return n}));var r=a("d3a4"),s={1:"BTC",2:"ETH",3:"XRP",4:"EOS",5:"USDT"},o={BTC:"1",ETH:"2",XRP:"3",EOS:"4",USDT:"5"},i=[{country:r["a"].$t("Taiwan"),code:"886"},{country:r["a"].$t("China_Mainland"),code:"86"},{country:r["a"].$t("Hongkong"),code:"852"},{country:r["a"].$t("Japan"),code:"81"},{country:r["a"].$t("South_Korea"),code:"82"},{country:r["a"].$t("Philippines"),code:"63"},{country:r["a"].$t("Singapore"),code:"65"},{country:r["a"].$t("Malaysia"),code:"60"},{country:r["a"].$t("America"),code:"1"}],n={0:{name:r["a"].$t("forum"),key:"forum"},1:{name:r["a"].$t("announcement"),key:"bulletin"},2:{name:r["a"].$t("activity"),key:"activity"}}},"0f9e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register-bg"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"register-main-block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.5)"}},[r("div",{staticClass:"main"},[r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),r("div",{staticClass:"m-logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"m-logo-img",attrs:{src:a("e36b"),alt:"m-logo-img"}})])],1),r("div",{staticClass:"title"},[t._v("創建帳戶")]),r("div",{staticClass:"register-main"},[r("div",{staticClass:"title"},[t._v("*使用者名稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",attrs:{type:"text",placeholder:"請輸入使用者名稱"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),r("div",{staticClass:"register-main"},[r("div",{staticClass:"title"},[t._v("*電子郵箱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",attrs:{type:"text",placeholder:"example@mail.com"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),r("div",{staticClass:"register-main"},[r("div",{staticClass:"title"},[t._v("行動電話")]),r("div",{staticClass:"split-input"},[r("el-select",{staticClass:"fdb-select input select-L",staticStyle:{width:"90px","margin-right":"8px","padding-left":"0px"},attrs:{"popper-class":"fdb-select"},model:{value:t.formData.areaCode,callback:function(e){t.$set(t.formData,"areaCode",e)},expression:"formData.areaCode"}},t._l(t.phoneAreaCode,(function(e,a){return r("el-option",{key:a,attrs:{label:e.code,value:e.code}},[r("span",{staticStyle:{float:"left",color:"#cccccc","margin-right":"26px"}},[t._v(t._s(e.country))]),r("span",{staticStyle:{float:"right"}},[t._v(t._s(e.code))])])})),1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",staticStyle:{flex:"1"},attrs:{type:"text",placeholder:"912345678",autocomplete:"off"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})],1)]),r("div",{staticClass:"register-main"},[r("div",{staticClass:"title"},[t._v("*密碼")]),"checkbox"===t.passwordType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.formData.password)?t._i(t.formData.password,null)>-1:t.formData.password},on:{change:function(e){var a=t.formData.password,r=e.target,s=!!r.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);r.checked?i<0&&t.$set(t.formData,"password",a.concat([o])):i>-1&&t.$set(t.formData,"password",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.formData,"password",s)}}}):"radio"===t.passwordType?r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.formData.password,null)},on:{change:function(e){return t.$set(t.formData,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{placeholder:"輸入6位數以上，含英數字",autocomplete:"off",type:t.passwordType},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),r("PasswordIcon",{attrs:{"pwd-type":t.passwordType},on:{"update:pwdType":function(e){t.passwordType=e},"update:pwd-type":function(e){t.passwordType=e}}})],1),r("div",{staticClass:"register-main"},[r("div",{staticClass:"title"},[t._v("邀請碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.invitCode,expression:"formData.invitCode"}],staticClass:"input",attrs:{type:"text",placeholder:"輸入推薦人邀請碼"},domProps:{value:t.formData.invitCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"invitCode",e.target.value)}}})]),r("div",{staticClass:"register-main"},[r("div",{staticClass:"check",on:{click:function(e){t.formData.checkContract=!t.formData.checkContract}}},[t.formData.checkContract?r("i",{staticClass:"el-icon-check",staticStyle:{color:"#62ffff"}}):t._e()]),r("div",{staticClass:"check-title"},[t._v(" 我已閱讀並同意FDB的 "),r("router-link",{attrs:{to:{name:"Disclaimer"},custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.navigate;return[r("span",{staticClass:"text-link",on:{click:a}},[t._v("服務")])]}}])}),t._v(" 與 "),r("router-link",{attrs:{to:{name:"PrivacyPolicy"},custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.navigate;return[r("span",{staticClass:"text-link",on:{click:a}},[t._v("隱私條款")])]}}])})],1)]),r("a",{staticClass:"register-main-btn fdb-btn-primary-hover",attrs:{href:"javascript:void(0)"},on:{click:t.doRegister}},[t._v(t._s(t.$t("register")))]),r("div",{staticClass:"register-main-tips"},[t._v("已經有帳號？請 "),r("span",{staticClass:"text-link",on:{click:function(e){return t.$router.push("/login")}}},[t._v("登入")])])])]),r("div",{staticClass:"register-kv-block"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:a("e36b"),alt:"logo"}})])],1),r("el-dialog",{attrs:{title:"信箱驗證通知",visible:t.dialogVisible,width:"300px","show-close":!1,"custom-class":"fbd-dialog"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("div",{staticStyle:{"text-align":"center"}},[r("span",[t._v("提醒您：驗證電子郵件，開始返佣")])]),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("div",{staticClass:"fdb-btn-primary",on:{click:function(e){t.dialogVisible=!1}}},[t._v("關閉")])])])],1)},s=[],o=a("1da1"),i=(a("96cf"),a("b0c0"),a("d3b7"),a("1d89")),n=a("1602"),c=a("09cb"),l={name:"Register",components:{PasswordIcon:i["a"]},data:function(){return{passwordType:"password",phoneAreaCode:c["d"],isLoading:!1,dialogVisible:!1,formData:{name:"",email:"",areaCode:"886",phone:"",password:"",invitCode:"",checkContract:!1}}},mounted:function(){this.formData.invitCode=this.$route.query.inviteCode||""},methods:{doRegister:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.validate();case 4:return a={name:t.formData.name,email:t.formData.email,areaCode:t.formData.areaCode,phone:t.formData.phone,password:t.formData.password,invitCode:t.formData.invitCode},e.next=7,Object(n["j"])(a);case 7:t.dialogVisible=!0,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),e.t0.isHttpError||t.$message.error(e.t0.message),console.error(e.t0.message);case 14:t.isLoading=!1;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()},validate:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/\S+@\S+.\S+/.test(t.formData.email)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("電子郵件：請輸入正確電子郵件")));case 2:if(""===t.formData.phone||/^\d+$/.test(t.formData.phone)){e.next=4;break}return e.abrupt("return",Promise.reject(new Error("行動電話：請輸入數字")));case 4:if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(t.formData.password)){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("密碼：請輸入6位數以上英數字")));case 6:if(!t.formData.invitCode||/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(t.formData.invitCode)){e.next=8;break}return e.abrupt("return",Promise.reject(new Error("邀請碼：8位數，含英數字，不含特殊符號")));case 8:if(t.formData.checkContract){e.next=10;break}return e.abrupt("return",Promise.reject(new Error("隱私條件需勾選，才可以點擊註冊")));case 10:return e.abrupt("return","done");case 11:case"end":return e.stop()}}),e)})))()}}},d=l,p=(a("f882"),a("2877")),u=Object(p["a"])(d,r,s,!1,null,"718c3686",null);e["default"]=u.exports},"1d89":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative",float:"left"}},["password"===t.pt?r("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:a("54e1"),alt:"colse-eye"},on:{click:t.togglePwd}}):t._e(),"text"===t.pt?r("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:t.togglePwd}}):t._e()])},s=[],o={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(t){this.$emit("update:pwdType",t)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},i=o,n=a("2877"),c=Object(n["a"])(i,r,s,!1,null,null,null);e["a"]=c.exports},"54e1":function(t,e,a){t.exports=a.p+"img/close-eye.22e04588.svg"},d628:function(t,e,a){},f882:function(t,e,a){"use strict";a("d628")}}]);