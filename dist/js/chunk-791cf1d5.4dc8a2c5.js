(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-791cf1d5"],{"1d89":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{position:"relative",float:"left"}},["password"===t.pt?a("img",{staticStyle:{position:"absolute",right:"12px",top:"13px",width:"auto",height:"7px",padding:"3px 0"},attrs:{src:e("54e1"),alt:"colse-eye"},on:{click:t.togglePwd}}):t._e(),"text"===t.pt?a("i",{staticClass:"el-icon-view",staticStyle:{position:"absolute",right:"12px",top:"13px"},on:{click:t.togglePwd}}):t._e()])},i=[],p={name:"PasswordIcon",props:{pwdType:{type:String,default:"password"}},computed:{pt:{get:function(){return this.pwdType},set:function(t){this.$emit("update:pwdType",t)}}},methods:{togglePwd:function(){this.pt="password"===this.pt?"text":"password"}}},o=p,n=e("2877"),c=Object(n["a"])(o,a,i,!1,null,null,null);s["a"]=c.exports},"4ec6":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"newpwd-bg"},[a("div",{staticClass:"newpwd-main-block"},[a("div",{staticClass:"main"},[a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"username"}}),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"password",name:"password"}}),a("div",{staticClass:"title"},[t._v("建立新的密碼")]),a("div",{staticClass:"newpwd-sub"},[t._v("輸入新的密碼，完成後須以新密碼登入")]),a("div",{staticClass:"newpwd-main"},[a("div",{staticClass:"title"},[t._v("密碼")]),a("input",{staticClass:"input",attrs:{type:t.passwordType,placeholder:"數入6位數以上，含英數字",autocomplete:"off"}}),a("PasswordIcon",{attrs:{"pwd-type":t.passwordType},on:{"update:pwdType":function(s){t.passwordType=s},"update:pwd-type":function(s){t.passwordType=s}}})],1),a("div",{staticClass:"newpwd-main",staticStyle:{"margin-bottom":"60px"}},[a("div",{staticClass:"title"},[t._v("再次確認")]),a("input",{staticClass:"input",attrs:{type:t.checkPasswordType,placeholder:"數入6位數以上，含英數字",autocomplete:"off"}}),a("PasswordIcon",{attrs:{"pwd-type":t.checkPasswordType},on:{"update:pwdType":function(s){t.checkPasswordType=s},"update:pwd-type":function(s){t.checkPasswordType=s}}})],1),a("a",{staticClass:"newpwd-main-btn",attrs:{href:"javascript:void(0)"}},[t._v("儲存密碼")])])]),a("div",{staticClass:"newpwd-kv-block"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:e("e36b"),alt:"logo"}})])],1)])},i=[],p=e("1d89"),o={name:"NewPassword",components:{PasswordIcon:p["a"]},data:function(){return{passwordType:"password",checkPasswordType:"password"}}},n=o,c=(e("5e79"),e("2877")),d=Object(c["a"])(n,a,i,!1,null,"f230194e",null);s["default"]=d.exports},"54e1":function(t,s,e){t.exports=e.p+"img/close-eye.22e04588.svg"},"5e79":function(t,s,e){"use strict";e("d9ae")},d9ae:function(t,s,e){}}]);