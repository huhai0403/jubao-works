function busy_show(text, win, timeout) {
    text=text?text:"正在处理，请稍待。。。";
    win = win ? win : top;
    var indicator = $(win.document).find("#__busy_indicator");
    if (indicator.size() > 0)
        return;
    $(win.document).find("body").append(" <div id='__busy_indicator' style='margin:0;padding:0;position:fixed;left:0;top:0;bottom:0;right:0;border:0;z-index:9999;'><div style='margin:0;padding:0;border:0;position:absolute;width:100%;height:100%;opacity:0.3;background-color:#ccc;'></div><div style='width:auto;height:16px;border:1px solid #95B8E7;padding:10px;margin:auto;position:absolute;left:50%;top:50%;line-height:16px;vertical-align:middle;background-color:#fff;' id='__busy_indicator_content'><img src=\"/static/themes/default/images/loading.gif\" style='float:left;display:block;' />  <div style='float:left;'>" + text + "</div></div></div>");
    indicator = $(win.document).find("#__busy_indicator");
    var ind = $(win.document).find("#__busy_indicator_content");
    ind.css("margin-left", -ind.width() / 2 + "px").css("margin-top", -ind.height() / 2 + "px");
    if (timeout > 0) {
        setTimeout(function () {
            busy_close(indicator);
        }, timeout);
    }
    return indicator;
}
function busy_close(indicator) {
    indicator.remove();
}
function busy_close_from(win) {
    win = win ? win : top;
    var indicator = $(win.document).find("#__busy_indicator").remove();
}