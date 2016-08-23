
function cantForm(){
    $('#dlg').window('close');
}
function ui_dialog(url,obj,title,x,y) {
    $('.window-header .panel-title').html(title);
    x = (x == null) ? 600 : x;
    y = (y == null) ? 400 : y;
    var dlg_obj = $('#dlg');
    dlg_obj.window('resize',{"width":x,"height":y}).window('center').window('open');
    $("#dialog-content").html('加载中...');
    $("#dialog-content").load(url, null, function() {
        dlg_obj.window('resize');
        var obj= $('#btn_submit');
        if(obj)obj.hide();
        $.parser.parse($('#dialog-content').parent());
    });
}

// 设置内容背景颜色
$(document).ready(function(){
    $("#index_tabs").parent().css("background","#f2f2f0");
});


// 动态添加dialog对话框----按钮提交
function BombBox(tit, BoxWidth, BoxHeight, ContentURL){
    var dialogBox = top.$("<div></div>").dialog({
        title: tit,
        width: BoxWidth,
        height: BoxHeight,
        content: ContentURL,
        closed: true,
        modal: true,
        buttons: [{
            text:'提交',
            iconCls:'icon-ok',
            handler: function(){
                alert('ok');
            }
        },{
            text:'取消',
            iconCls: 'icon-cancel',
            handler: function(){
                dialogBox.dialog('destroy');
            }
        }]
    }).dialog('open');
};

// 动态添加dialog对话框----
function BombBoxSG(tit, BoxWidth, BoxHeight, ContentURL, BtnValue){
    var dialogBox = top.$("<div></div>").dialog({
        title: tit,
        width: BoxWidth,
        height: BoxHeight,
        content: ContentURL,
        closed: true,
        modal: true,
        buttons: [{
            text: BtnValue,
            iconCls:'icon-ok',
            handler: function(){
                alert('ok');
            }
        },{
            text:'取消',
            iconCls: 'icon-cancel',
            handler: function(){
                dialogBox.dialog('destroy');
            }
        }]
    }).dialog('open');
};

// 动态添加dialog对话框----没有提交按钮
function BombBoxNoBtn(parent,tit, BoxWidth, BoxHeight, ContentURL){
    var dialogBox = top.$("<div class='dialog_box'></div>").dialog({
        title: tit,
        width: BoxWidth,
        height: BoxHeight,
        content: ContentURL,
        closed: true,
        modal: true
    }).dialog('open');
    dialogBox.parentWindow = parent;
};

//--dialog extension
function showDialog1(parent, d_title, d_width, d_height, d_contenturl) {
    var t = top.$("<div class='dialog_box'></div>");
    var dialogBox = top.$("<div class='dialog_box'></div>").dialog({
        title: d_title,
        width: d_width,
        height: d_height,
        content: d_contenturl,
        closed: true,
        modal: true,
        
    }).dialog('open');
    var child = $(dialogBox[0]).find("iframe")[0].contentWindow;
    child.parentWindow = parent;
    child.me = dialogBox;
    return dialogBox;
};
//--dialog extension end


// 鼠标经过预览图片函数
function previewss(img){
    $("#previewss .jqzoom img").attr("src",$(img).attr("src"));
    $("#previewss .jqzoom img").attr("jqimg",$(img).attr("bimg"));
};

// 图片左右滚动
function picture(tempLength, moveTime, scrollDiv, scrollItems, moveLength, countLength, NextBtn, PrevBtn){
    // 下一张
    NextBtn.bind("click",function(){
        if(tempLength < countLength){
            if((countLength - tempLength) > moveLength){
                scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
                tempLength += moveLength;
            } else {
                scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
                tempLength += (countLength - tempLength);
            }
        }
    });
    
    // 上一张
    PrevBtn.bind("click",function(){
        if(tempLength > 0){
            if(tempLength > moveLength){
                scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
                tempLength -= moveLength;
            } else {
                scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
                tempLength = 0;
            }
        };
    });
};





