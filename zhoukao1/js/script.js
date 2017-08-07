document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
var soller = new IScroll(".main",{
	click:true
});
$(".ols1 li").on("click",function(){
	$(this).addClass("onn").siblings().removeClass("onn");
})
$(".uls_top li").on("click",function(){
	$(this).addClass("colors").siblings().removeClass("colors");
})