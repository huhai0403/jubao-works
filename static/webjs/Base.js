// 导航下拉菜单

// stuHover = function() {
//   var cssRule;
//   var newSelector;
//   for (var i = 0; i < document.styleSheets.length; i++)
//     for (var x = 0; x < document.styleSheets[i].rules.length ; x++)
//       {
//       cssRule = document.styleSheets[i].rules[x];
//       if (cssRule.selectorText.indexOf("LI:hover") != -1)
//       {
//          newSelector = cssRule.selectorText.replace(/LI:hover/gi, "LI.iehover");
//         document.styleSheets[i].addRule(newSelector , cssRule.style.cssText);
//       }
//     }
//   var getElm = document.getElementById("nav").getElementsByTagName("LI");
//   for (var i=0; i<getElm.length; i++) {
//     getElm[i].onmouseover=function() {
//       this.className+=" iehover";
//     }
//     getElm[i].onmouseout=function() {
//       this.className=this.className.replace(new RegExp(" iehover\\b"), "");
//     }
//   }
// }
// if (window.attachEvent) window.attachEvent("onload", stuHover);





// $(function(){
//     $(".nav li").hover(function(){
//         var navBox = $(this).children(".subNavBox");
//         var hgt = (navBox.children().length*38+10)+"px";
//         $(this).addClass("current");
//         navBox.stop().animate({height:hgt,opacity:"1"},300);
//     },function(){
//         var navBox = $(this).children(".subNavBox");
//         $(this).removeClass("current");
//         navBox.stop().animate({height:"0px",opacity:"0"},300);
//     });
	
// 	$(function(){
//   $(".subNav_03").hide();
//   $(".subNav_02 span").hover(function(){
//     $(".subNav_03").show();
//   },function(){
//     $(".subNav_03").hide();
//   })
// })



// });



function displaySubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "block"; 
} 
function hideSubMenu(li) { 
	var subMenu = li.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "none"; 
} 




//JS金额格式
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    var f = s < 0 ? "-" : "";
    s = parseFloat((Math.abs(s) + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    var t = "";
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }

    return f + t.split("").reverse().join("") + "." + r;
}







/*=============点击清空事件===============*/
$(function(){
  $(".input_T").click(function(){
    if($(this).val() == this.defaultValue){
      $(this).val("");
    };
  });
  $(".input_T").blur(function(){
    if($(this).val() == ""){
      $(this).val(this.defaultValue);
    };
  });
});
/*=============/点击清空事件===============*/



// 首页新闻资讯选项卡
$(function(){
    $(".tabbtn li").click(function(){
        var _index = $(this).index();
        var postCnt = $(this).parent().siblings().children();
        $(this).addClass("current").siblings().removeClass("current");
        postCnt.hide();
        postCnt.eq(_index).show();
    });
});

// 首页新闻资讯选项卡


// 内页产品详情选项卡
$(function(){
    $(".pd_tabbtn li").click(function(){
        var _index = $(this).index();
        var postCnt = $(this).parent().siblings().children();
        $(this).addClass("current").siblings().removeClass("current");
        postCnt.hide();
        postCnt.eq(_index).show();
    });
});

// 内页产品详情选项卡


// 产品详情焦点图小图选中效果JS
    // $(function(){
    //     $(".items ul li").mouseenter(function(){
    //         $(this).css("background-color","#39a3ae")
    //     })

    //     $(".items ul li").mouseleave(function(){
    //         $(this).css("background-color","#fff")
    //     })
    // })




