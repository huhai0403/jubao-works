$(function () {
    var xOffset = 10;
    var yOffset = 20;
    var w = $(window).width();
    $("a.preview").livequery("mouseover", function (e) {  
        if (/.png$|.gif$|.jpg$|.bmp$/.test($(this).attr("ref"))) {
            $("body").append("<div id='preview'><div><img src='" + $(this).attr("ref") + "' /><p>" + $(this).attr("title") + "</p></div></div>");
        } else {
            $("body").append("<div id='preview'><div><p>" + $(this).attr("title") + "</p></div></div>");
        }
        $("#preview").css({
            position: "absolute",
            padding: "4px",
            border: "1px solid #f3f3f3",
            backgroundColor: "#eeeeee", 
            zIndex: 1000,
            maxWidth:"600px"
        });
        $("#preview > div").css({
            padding: "5px",
            backgroundColor: "white",
            border: "1px solid #cccccc"
        });
        $("#preview > div > p").css({
            textAlign: "center",
            fontSize: "12px",
            padding: "8px 0 3px",
            margin: "0"
        });
        if (e.pageX < w / 2) {
            $("#preview").css({
                left: e.pageX + xOffset + "px",
                right: "auto"
            }).fadeIn("fast");
        } else {
            $("#preview").css("right", (w - e.pageX + yOffset) + "px").css("left", "auto").fadeIn("fast");
        }
    }).livequery("mouseout", function () {
        $("#preview img").attr("src", "");
        
        $("#preview").remove();
    }).livequery("mousemove", function (e) {
        $("#preview").css("top", (e.pageY - xOffset-50) + "px")
        if (e.pageX < w / 2) {
            $("#preview").css("left", (e.pageX + yOffset) + "px").css("right", "auto");
        } else {
            $("#preview").css("right", (w - e.pageX + yOffset) + "px").css("left", "auto");
        }
    });
   
    
})