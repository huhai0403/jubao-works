
$(document).ready(function(){

    //导航关闭或打开
    $(".menu dt").live("click",function(){
        if($(this).next().is(":hidden")) {
            $(this).siblings("dt").css({"background":"#d4d4ca","color":"#4b4b4b","margin-bottom":"1px"})
                .end().siblings("dd").stop().slideUp("10")
                .end().css({"background":"#ff5f3b url(/static/themes/default/images/navs.jpg) no-repeat 0 center","color":"#f0f4f6"});
            $(this).siblings("dt").children(".cf").css("display","none").siblings(".mr").css("display","inline-block");
            $(this).siblings("dt")
                .end().siblings("dd")
                .end().children(".mr").css("display","none").siblings(".cf").css("display","inline-block");
            $(this).next().stop().slideDown("slow");
        };
    });

    $(".top").parent().css("border-color","#373737");
    $(".change").parent().css("overflow","hidden");
    $(".menu").parent().css({"overflow-y":"auto","overflow-x":"hidden","position":"relative"});

    //导航,公告切换
    $(".notice").css({"top":$(".menu").parent().css("height"),"display":"none"});
    $(".change .changes").click(function(){
        $(this).addClass("focus").siblings().removeClass("focus");
        $(this).children(".mr").css("display","inline-block").siblings(".cf").css("display","none");
        $(this).siblings().children(".mr").css("display","none").siblings(".cf").css("display","inline-block");
        if($(this).index() == 1){

            $(".menu").slideUp(10).siblings(".notice").css("top","0").fadeIn();
        }else if($(this).index() ==0){

            $(".notice").css({"display":"none","top":$(".menu").parent().css("height")}).siblings(".menu").slideDown();
        }
    });
    //菜单按钮外移
    $(".Aside").parent().css({"overflow":"visible","z-index":999}).next().css("z-index",1);
    $(".Aside").siblings().css({"position":"relative","height":"20px","overflow":"visible","position":"relative"});
    $(".Aside").css({"position":"relative","z-index":99,"overflow":"visible"});
    $(".Aside").children(".layout").css({"position":"relative","z-index":99,"overflow":"visible"});
    $(".Aside").children(".layout").children().eq(0).css({"position":"relative","z-index":99,"overflow":"visible"});
    $(".Aside").children(".layout").children().eq(0).children().css({"position":"relative","z-index":99,"overflow":"visible","height":"10px"});
    $(".Aside").siblings().children(".panel-tool").css({"margin":0,"right":"-9px","top":(parseInt($(".Aside").css("height"))/2-19)+"px","z-index":99999999,"width":"8px","height":"38px"});
    $(".layout-button-left").css({"width":"8px","height":"38px","margin":0,"background":"url(/static/themes/default/images/jt.png) no-repeat center center"});
})