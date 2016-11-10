var Swiper = require('./components/swiper/swiper-3.3.1.min');
var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min')


var swiper =  new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  });        

var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;

$("#myScroll").hide();
$(".swiper-container").show();

$("#enter").tap(function(){
	$("#myScroll").show();
	$(".swiper-container").hide();
	var IScroll=require('./components/iscroll/iscroll');
	var myScroll;
    function loaded () {
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

})



// $.post('/api/skill',{},function(data){
//         console.log(data);
//         for(var i=0;i<data.length;i++){
//              skil='<ul id="sk_ul">'+
//                     '<li>技术类型：'+data[i].category+'</li>'+
//                     '<li>水平：'+data[i].level+'</li>'+
//                     '<li>技术名称：'+data[i].name+'</li>'+
//                     '<li>学习时间：'+data[i].time+'</li>'+
//                    '</ul>';
//             $('#slide3').append(skil);
//         }
       
//        var IScroll=require("./components/iscroll/iscroll")
//         var myScroll;
//         myScroll = new IScroll('#wrapper', { mouseWheel: true });
//         document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

//     })
/**
 * 获取技能列表
 */
function getSkill(){
  $.ajax({
      url:"./api/skill",
      type:"post",
      success:function(data){
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
          var msg="<ul>"+
                  "<li>"+data[i].category+":"+data[i].name+"</li>"+
                  "<li>时间："+data[i].time+"</li>"+
                  "<li>level:"+data[i].level+"</li>";
          $("#slide3").append(msg); 
        } 
      }
  });
}
getSkill()；
