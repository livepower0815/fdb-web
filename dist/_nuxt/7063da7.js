(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{809:function(t,e,r){"use strict";r.r(e);r(415);var c={name:"StarScore",props:{score:{type:Number,default:0},maxNumber:{type:Number,default:5}},computed:{starts:function(){for(var t=[],e=Math.floor(2*this.score);e>0;)e>=2?(t.push("star-score__item--active"),e-=2):(t.push("star-score__item--helf"),e-=1);return t}}},o=r(21),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"star-score"},t._l(t.maxNumber,(function(r){return e("div",{key:r,staticClass:"star-score__item",class:t.starts[r-1]})})),0)}),[],!1,null,null,null);e.default=component.exports}}]);