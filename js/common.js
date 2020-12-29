$(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var wHeight = $(this).height();
    if(scrollTop != 0 && scrollTop > wHeight){
      $("ul#gnb li a").css("color","#1428a0");
    }else{
      $("ul#gnb li a").css("color","#fff");
    }
  });
});
