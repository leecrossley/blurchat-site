var blurchat=function(){"use strict";var a={},b=function(a){800>=a?($.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setAllowScrolling(!1),$("#fullpage").addClass("top0")):a>800&&($.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$("#fullpage").removeClass("top0"))};return a.init=function(){var a=$(window).width();$("#fullpage").fullpage({scrollingSpeed:800,loopBottom:!1,easing:"swing",resize:!1,afterResize:function(){a=$(window).width(),b(a)}}),b(a)},a.onLoad=function(){$(".status").fadeOut(),$(".preloader").delay(100).fadeOut("slow")},a}();$(document).ready(blurchat.init),$(window).load(blurchat.onLoad);