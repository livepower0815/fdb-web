(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{807:function(e,n,t){"use strict";t.r(n);t(52);n.default={updated:function(){this.$_resizeHandler()},mounted:function(){this.$_initResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent()},methods:{$_resizeHandler:function(){var e=this;this.$nextTick((function(){e.$refs["".concat(e.$options.name)].resize()}))},$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)}}}}}]);