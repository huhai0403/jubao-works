
var menu1 ='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">借款人管理</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("借款人列表","Iframe/Project/LoanList.html")>借款人列表</a>'+
            '<a href="#" onclick=addTab("新增借款人","Iframe/Project/Prompt/LoanAdd.html")>新增借款人</a>'+
            '</dd>'+
             '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">借企业管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("借款企业列表","Iframe/Project/LoanList.html")>借款企业列表</a>'+
            '<a href="#" onclick=addTab("新增借款企业","Iframe/Project/Prompt/LoanAdd.html")>新增借款企业</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">融资项目管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
             '<a href="#" onclick=addTab("已保存项目","iframe/Project/ProjectList1.html")>已保存项目</a>'+
             '<a href="#" onclick=addTab("待发布项目","iframe/Project/ProjectList2.html")>待发布项目</a>'+
               '<a href="#" onclick=addTab("投标中项目","iframe/Project/ProjectList3.html")>投标中项目</a>'+
             '<a href="#" onclick=addTab("已满标项目","iframe/Project/ProjectList4.html")>已满标项目</a>'+
               '<a href="#" onclick=addTab("已流标项目","iframe/Project/ProjectList5.html")>已流标项目</a>'+
             '<a href="#" onclick=addTab("还款中项目","iframe/Project/ProjectList6.html")>还款中项目</a>'+
               '<a href="#" onclick=addTab("已完成项目","iframe/Project/ProjectList7.html")>已完成项目</a>'+
             '<a href="#" onclick=addTab("回收站","iframe/Project/ProjectList8.html")>回收站</a>'+
              '<a href="#" onclick=addTab("项目发标历史","iframe/Project/ProjectList0.html")>项目发标历史</a>'+
            '<a href="#" onclick=addTab("发布新项目","iframe/Project/prompt/project_add1.html")>发布新项目</a>'+
            '<a href="#" onclick=addTab("项目咨询记录","iframe/Project/MessList.html")>项目咨询记录</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">贷后管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("还款查询","iframe/Project/RepaymentList.html")>项目还款记录</a>'+
            '<a href="#" onclick=addTab("待收项目","iframe/Orders/OrderHistory.html")>待收项目</a>'+
            '<a href="#" onclick=addTab("逾期项目","iframe/Orders/OrderHistory.html")>逾期项目</a>'+
            '<a href="#" onclick=addTab("垫付项目","iframe/Orders/OrderHistory.html")>垫付项目</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">三方机构</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("三方机构","iframe/Project/AssociationList.html")>担保公司</a>'+
            '</dd>'+
            '</dl>';

var menu2 ='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">内容配置</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("栏目管理","/webcontent_module/article_class/list")>栏目管理</a>' +
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">内容管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("文章内容","/webcontent_module/article/list")>文章内容</a>' +
            '<a href="#" onclick=addTab("友情链接","/webcontent_module/link/index")>友情链接</a>' +
            '<a href="#" onclick=addTab("广告位置","/webcontent_module/ad_position/index")>广告位置</a>' +
             '<a href="#" onclick=addTab("广告内容","/webcontent_module/ad/index")>广告内容</a>' +
            '</dd>'+
           
            '</dl>';


var menu3 ='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">会员管理</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("会员列表","iframe/Users/UserList.html")>会员列表</a>'+
            '<a href="#" onclick=addTab("客服系统","iframe/Orders/ScheduledVehicle.html")>客服系统</a>'+
            '<a href="#" onclick=addTab("会员等级管理","iframe/Users/UserLevel.html")>会员等级管理</a>'+
             '<a href="#" onclick=addTab("贷款申请记录","Iframe/Goods/Genre.html")>贷款申请记录</a>'+
              '<a href="#" onclick=addTab("积分历史记录","Iframe/Users/UserScore.html")>积分历史记录</a>'+
            '</dd>'+

            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">充值提现</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("充值记录","iframe/Users/MoneyInList.html")>充值记录</a>'+
             '<a href="#" onclick=addTab("提现记录","iframe/Users/MoneyOutList.html")>提现记录</a>'+
              '<a href="#" onclick=addTab("修改推荐码","iframe/Orders/LeasedVehicles.html")>修改推荐码</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">红包管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("红包发放","iframe/Orders/LeasedVehicles.html")>红包发放</a>'+
             '<a href="#" onclick=addTab("红包查询","iframe/Users/RedPaperList.html")>红包记录</a>'+
            '</dd>'+
            '</dl>';

var menu4 ='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">内容管理</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("限时抢购","iframe/Orders/LeasedVehicles.html")>站点栏目管理</a>'+
            '<a href="#" onclick=addTab("特价促销","iframe/Orders/LeasedVehicles.html")>文章分类管理</a>'+
            '<a href="#" onclick=addTab("秒杀促销","iframe/Orders/ScheduledVehicle.html")>文章管理</a>'+
            '<a href="#" onclick=addTab("商城团购","iframe/Orders/ScheduledVehicle.html")>招聘管理</a>'+
            '<a href="#" onclick=addTab("限时抢购","iframe/Orders/LeasedVehicles.html")>广告管理</a>'+
            '<a href="#" onclick=addTab("特价促销","iframe/Orders/LeasedVehicles.html")>单页面管理</a>'+
            '<a href="#" onclick=addTab("秒杀促销","iframe/Orders/ScheduledVehicle.html")>友情链接管理</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">模板管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("优惠劵列表","iframe/Orders/LeasedVehicles.html")>文章模板</a>'+
            '<a href="#" onclick=addTab("积分兑换优惠卷","iframe/Orders/LeasedVehicles.html")>单页模板</a>'+
            '</dd>'+
            '</dl>';

var menu5='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">员工管理</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("员工列表","/employee_module/employee/list")>员工列表</a>' +
            '<a href="#" onclick=addTab("客服列表","/employee_module/employee/index")>客服列表</a>' +
            '<a href="#" onclick=addTab("组织机构","/employee_module/organization/list")>组织机构</a>' +
            '<a href="#" onclick=addTab("角色管理","/employee_module/role/list")>角色管理</a>' +
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">系统配置</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("基本信息","iframe/Orders/LeasedVehicles.html")>基本信息</a>'+
            '<a href="#" onclick=addTab("权限管理","/system_module/function/list")>权限管理</a>' +
             '<a href="#" onclick=addTab("数据字典","/system_module/dict/index")>数据字典管理</a>' +
             '<a href="#" onclick=addTab("菜单管理","/system_module/admin_menu/list")>菜单管理</a>' +
            '<a href="#" onclick=addTab("省市区管理","/system_module/prov_city_area/index")>省市区管理</a>' +
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">接口配置</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("邮件接口","system_module/system_params/system_email")>邮件接口</a>' +
            '<a href="#" onclick=addTab("短信接口","system_module/system_params/system_sms")>短信接口</a>' +
            '<a href="#" onclick=addTab("支付接口","system_module/system_params/system_pay")>支付接口</a>' +
            '<a href="#" onclick=addTab("第三方登录接口","iframe/SystemManger/OAuth.html")>第三方登录接口</a>'+
            '</dd>'+
            '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">模板管理</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("邮件模板","message_module/message/listemail")>邮件模板</a>' +
            '<a href="#" onclick=addTab("短信模板","message_module/message/listesms")>短信模板</a>' +
            '<a href="#" onclick=addTab("站内信模板","message_module/message/liststation")>站内信模板</a>' +
            '<a href="#" onclick=addTab("消息记录","message_module/message/listmessage")>消息记录</a>' +
            '<a href="#" onclick=addTab("模板协议","message_module/protocol/list")>模板协议</a>' +
            '</dd>'+
             '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">系统日志</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
             '<a href="#" onclick=addTab("ip过滤","safe_module/ip_filter/index")>ip过滤</a>' +
             '<a href="#" onclick=addTab("ip过滤日志","safe_module/log_ip_filter/index")>ip过滤日志</a>' +
              '<a href="#" onclick=addTab("前台操作日志","safe_module/log_operate_user/index")>前台操作日志</a>' +
              '<a href="#" onclick=addTab("后台操作日志","safe_module/log_operate/list")>后台操作日志</a>' +
              '<a href="#" onclick=addTab("前台登陆日志","safe_module/log_login_user/index")>前台登陆日志</a>' +
            '<a href="#" onclick=addTab("后台登陆日志","safe_module/log_login/list")>后台登陆日志</a>' +
            '<a href="#" onclick=addTab("系统错误日志","safe_module/log_error/index")>系统错误日志</a>' +
            '</dd>'+
             '<dt>'+
            '<span class="My-iconB1 mr""></span><span class="My-iconB2 cf" style="display: none;"></span><span class="wz">活动配置</span>'+
            '</dt>'+
            '<dd style="display:none;">'+
            '<a href="#" onclick=addTab("红包参数设置","iframe/Orders/LeasedVehicles.html")>红包参数设置</a>'+
            '<a href="#" onclick=addTab("奖励参数设置","iframe/Orders/LeasedVehicles.html")>奖励参数设置</a>'+
            '</dd>'+
            '</dl>';



var menu6 ='<dl>'+
            '<dt style="margin-bottom: 0; background:#ff5f3b url(/themes/default/images//navs.jpg) no-repeat 0 center; color:#f0f4f6;">'+
            '<span class="My-iconB1 mr" style="display: none;"></span><span class="My-iconB2 cf"></span><span class="wz">统计报表</span>'+
            '</dt>'+
            '<dd style="display:block;">'+
            '<a href="#" onclick=addTab("投资人统计","iframe/Orders/LeasedVehicles.html")>投资人统计</a>'+
            '<a href="#" onclick=addTab("投资统计","iframe/Orders/LeasedVehicles.html")>投资统计</a>'+
            '<a href="#" onclick=addTab("项目统计","iframe/Orders/LeasedVehicles.html")>项目统计</a>'+
            '<a href="#" onclick=addTab("自动投资统计","iframe/Orders/LeasedVehicles.html")>自动投资统计</a>'+
            '</dd>'+
            '</dl>';



$(document).ready(function(){
    $("#menus").html(menu1);
    $(".top .navs .nav2 a").click(function(){
        $(this).addClass("focus").siblings().removeClass("focus");
        $("#menus").slideUp(10);
        var menu_num = $(this).index();
        if(menu_num == 0){
            $("#menus").html(menu1);
        }else if(menu_num ==1){
            $("#menus").html(menu2);
        }else if(menu_num ==2){
            $("#menus").html(menu3);
        }else if(menu_num ==3){
            $("#menus").html(menu6);
        }else if(menu_num ==4){
            $("#menus").html(menu5);
        }else if(menu_num ==5){
            $("#menus").html(menu6);
        }else if(menu_num ==6){
            $("#menus").html(menu7);
        }
        $(".change .changes").eq(0).click();
        $("#menus").slideDown();
    });
})