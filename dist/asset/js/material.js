!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=265)}({10:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function t(){var e=this;n(this,t),this.optionIsOpen=!1,$(".switch").on("click",function(){e.optionIsOpen?($(".news_select").removeClass("OPEN"),e.optionIsOpen=!1):($(".news_select").addClass("OPEN"),e.optionIsOpen=!0)}),$(".option").on("click",function(t){$(".default_option").attr({"data-value":$(t.target).attr("data-value"),"data-name":$(t.target).attr("data-name")}).html($(t.target).attr("data-name")),$(".news_select").removeClass("OPEN"),e.optionIsOpen=!1})};t.exports=new i},11:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){n(this,t),this.gaInit()}return i(t,[{key:"gaInit",value:function(){$(".service a").on("click",function(t){var e=window.location.pathname;switch($(t.currentTarget).index()){case 0:gaEvent("service","btn_business",e);break;case 1:gaEvent("service","btn_contact",e)}})}}]),t}();t.exports=new o},119:function(t,e,n){t.exports=n.p+"CH/material.html"},12:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function t(){var e=this;n(this,t),this.optionIsOpen=!1,$(".select_switch").on("click",function(t){e.optionIsOpen?($(t.target).parent(".select").removeClass("OPEN"),e.optionIsOpen=!1):($(t.target).parent(".select").addClass("OPEN"),e.optionIsOpen=!0)}),$(".select_option").on("click",function(t){$(t.target).parent(".option_out").parent(".select").children(".default_option").attr({"data-value":$(t.target).attr("data-value"),"data-name":$(t.target).attr("data-name")}).html($(t.target).attr("data-name")).addClass("USED"),$(t.target).parent(".option_out").parent(".select").removeClass("OPEN"),e.optionIsOpen=!1})};t.exports=new i},13:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function t(){n(this,t),this.WindowListen=window.WindowListen;var e=$(".page_select_out").offset(),i=e.top;this.WindowListen.on("scroll",function(t){t>i?$(".makers_header").addClass("ON"):$(".makers_header").removeClass("ON")})};t.exports=new i},140:function(t,e,n){t.exports=n.p+"EN/material.html"},16:function(t,e,n){t.exports=n.p+"asset/lib/swiper/swiper.min.css"},17:function(t,e,n){t.exports=n.p+"asset/lib/swiper/swiper.min.js"},26:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){var e=this;n(this,t),this.WindowListen=window.WindowListen,this.swiper=new Swiper(".swiper-container",{pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:25,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",initialSlide:1}),this.WindowListen.on("resize",function(){e.resizeSwiper()})}return i(t,[{key:"updateSwiper",value:function(){if(this.swiper.length)for(var t=0;t<this.swiper.length;t++){var e=this.swiper[t];e.update()}else this.swiper.update()}},{key:"resizeSwiper",value:function(){if(this.swiper.length)for(var t=0;t<this.swiper.length;t++){var e=this.swiper[t];e.onResize()}else this.swiper.onResize()}}]),t}();t.exports=new o},265:function(t,e,n){t.exports=n(56)},56:function(t,e,n){n(119),n(140),n(94),n(16),n(17),$(window).on("load",function(t){n(26)}),$(function(){n(9),n(10),n(12),n(13),n(11),n(8)})},8:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){n(this,t),this.gaInit(),$("body").hasClass("EN")&&($(".fixe_service .business").attr("title","Contact Us").html(""),$(".fixe_service .customized").attr("title","Cooperation").html(""))}return i(t,[{key:"gaInit",value:function(){$(".fixe_service a").on("click",function(t){console.log($(t.currentTarget).index());var e=window.location.pathname;switch($(t.currentTarget).index()){case 0:gaEvent("service","btn_business",e);break;case 2:gaEvent("service","btn_contact",e)}})}}]),t}();t.exports=new o},9:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){n(this,t),this.WindowListen=window.WindowListen,this.WindowListen.on("scroll",function(t){t>500?$(".page_theme").css("position","static"):device.desktop()?$(".page_theme").css("position","fixed"):$(".page_theme").css("position","relative")}),this.WindowListen.onScroll()}return i(t,[{key:"scrollTopImgToBlack",value:function(t){var e=t/$(".page_theme").height(),n=e>1?1:1-1*e;$(".page_theme").css("opacity",n)}}]),t}();t.exports=new o},94:function(t,e){}});