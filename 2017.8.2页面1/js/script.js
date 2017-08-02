document.documentElement.style.fontSize = window.innerWidth/375*50+"px";
var scroll1 = new IScroll(".ls",{
	click:true,
	scrollX:true,
	scrollY:false
});
var scroll2 = new IScroll(".main");
$(".uls li").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
})
$(".ols li").on("click",function(){
	$(this).addClass("onn").siblings().removeClass("onn");
})
var dom = "";
$.ajax({
	url:"data.json",
	success:function(data){
		$.each(data,function(i,val){
			dom += `<dl>
					<dd>
						<span>${val.tit1}</span>
						<p><em class="line">${val.tit2}</em><em>${val.tit3}</em></p>
					</dd>
					<dt><img src="images/${val.img}" alt=""></dt>
				</dl>`;
		})
		$(".bot").html(dom);
		scroll2.refresh();
	}
})