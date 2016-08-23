/*宝贝轮播图*/

TouchSlide({
	slideCell:"#focus",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul",
	effect:"leftLoop",
	autoPlay:true,//自动播放
	autoPage:true, //自动分页
});
$(function(){
	/*输入手机号*/
	$('.phone p,.test_code p').click(function(){
		$(this).hide();
		$(this).siblings('input').show();
		$(this).siblings('input').focus()
	});
});