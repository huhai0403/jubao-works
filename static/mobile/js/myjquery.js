// JavaScript Document

$(function(){
	
$('#search').val("请输入商品、商家、服务").addClass("c1");
$('#search').focus(function(){
if($('#search').val()=="请输入商品、商家、服务"){
$('#search').val("").addClass("c2").removeClass("c1");
}

});

$('#search').blur(function(){
if($('#search').val()==""){
$('#search').val("请输入商品、商家、服务").addClass("c1").removeClass("c2");
}
});

$('#search2').val("请输入商品、商家、服务").addClass("c1_1");
$('#search2').focus(function(){
if($('#search2').val()=="请输入商品、商家、服务"){
$('#search2').val("").addClass("c2_1").removeClass("c1_1");
}

});

$('#search2').blur(function(){
if($('#search2').val()==""){
$('#search2').val("请输入商品、商家、服务").addClass("c1_1").removeClass("c2_1");
}
});

});
