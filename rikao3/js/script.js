document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
var scroll1 = new IScroll(".main",{
	click:true
});

// var swiper1 = new Swiper(".swiper-container",{
// 	onSlideChangeStart:function(swiper){
// 		$(".uls li").eq(swiper.activeIndex).addClass("on").siblings().removeClass("on");
// 		$(".list").animate({"transform":"translate3d("+swiper.activeIndex*100+"%,0,0)"})
// 	}
// });
// function fn(ind){
// 	swiper1.slideTo(ind)
// }
// $(".uls li").on("click",function(){
// 	var ind = $(this).index();
// 	$(this).addClass("on").siblings().removeClass("on");
// 	$(".list").animate({"transform":"translate3d("+ind*100+"%,0,0)"})
// })