//首页banner切换 s//
$(document).ready(function () {
    var flag = -1;
    $(".main_visual").hover(function () {
        $("#btn_prev,#btn_next").fadeIn()
    }, function () {
        $("#btn_prev,#btn_next").fadeOut()
    })
    $dragBln = false;
    $(".main_image").touchSlider({
        flexible: true,
        speed: 200,
        btn_prev: $("#btn_prev"),
        btn_next: $("#btn_next"),
        paging: $(".flicking_con a"),
        counter: function (e) {
            flag = e.total;
            $(".flicking_con a").removeClass("on").eq(e.current - 1).addClass("on");
        }
    });
    $(".main_image").bind("mousedown", function () {
        $dragBln = false;
    })
    $(".main_image").bind("dragstart", function () {
        $dragBln = true;
    })
    $(".main_image a").click(function () {
        if ($dragBln) {
            return false;
        }
    })
    if (flag>1) {
        timer = setInterval(function () { $("#btn_next").click(); }, 3000);
        $(".main_visual").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () { $("#btn_next").click(); }, 3000);
        })
        $(".main_image").bind("touchstart", function () {
            clearInterval(timer);
        }).bind("touchend", function () {
            timer = setInterval(function () { $("#btn_next").click(); }, 3000);
        })
    }
   
});
//首页banner切换 e//


$(function () {
    //radio切换
    $(".pay_kinds li").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".pay_kinds").find(".radio_value").val($(this).attr("data"));
    })
})


//继续添加s//
function add() {
    var num = $("#con_detail>div:first").clone(true);
    if (num.find("input").eq(0).val()==""){
        alert("请填写运单号");
        return;
    } else if (num.find("input").eq(1).val() == "") {
        alert("请选择始发地");
        return;
    } else if (num.find("input").eq(2).val() == "") {
        alert("请选择目的地");
        return;
    } else if (num.find("input").eq(3).val() == "") {
        alert("请填写货物种类");
        return;
    } else if (num.find("input").eq(4).val() == "") {
        alert("请填写货物数量");
        return;
    } else if (num.find("input").eq(5).val() == "") {
        alert("请填写货物单位");
        return;
    }
    var index = $("#con_detail .list").size();
    
    num.find("input").eq(0).val("");
    num.find("input").eq(1).val("");
    num.find("input").eq(2).val("");
    num.find("input").eq(3).val("");
    num.find("input").eq(4).val("");
    num.find("input").eq(5).val("");
    num.find("input").eq(6).val("");
    
    $("#but").before(num);

}

function add_photo(obj) {
    
        var item = $("#pic").children(":eq(0)").clone(true);
        if (item.find("input").eq(0).val()=="") {
            alert("请先上传图片");
            return;
        }
        var index = $("#pic .list").size();
        
        item.find("img").eq(0).attr("src", "");
        item.find("input").eq(0).val("");
        
        $(obj).parent().prev().before(item);
}
//继续添加e//


