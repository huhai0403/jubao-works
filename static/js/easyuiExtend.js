$.extend($.fn.validatebox.defaults.rules, {
    username: {
       
  // 验证用户名 
    validator: function(value) {
        if (value == '') return true;
        return /^[0-9a-zA-Z\u4e00-\u9fa5]*$/i.test(value);
    },
message: "不能使用非法字符！"
    },
    idcard: {
// 验证身份证 
        validator: function(value) {
            if (value == '') return true;
            return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
        },
        message: "身份证号码格式不正确"
    },
    mobile: {
// 验证手机号码
        validator: function(value) {
            if (value == '') return true;
            return /^1\d{10}$/.test(value);
        },
        message: "手机号码格式不正确"
    },
    number: {
        validator: function(value) {
            if (value == '') return true;
            return /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|[1-9]\d*|\d$/.test(value);
        },
        message:"请输入正确的数字"
    },
    qq: {
// 验证QQ,从10000开始
        validator: function(value) {
            if (value == '') return true;
            return /^[1-9]{1}[0-9]{4,}$/i.test(value);
        },
        message: "QQ号码格式不正确"
    },
    mobile_phone: {
        validator: function(value) {
            if (value == '') return true;
            return /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/.test(value);
        },
        message: "输入的手机号或电话号码格式不正确"
    },
    url: {
        validator: function (value) {
            if (value=='') {
                return true;
            }
            return /^(https?|ftp|mms):\/\/([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?$/.test(value);
        },
        message:"输入的url不正确"
    },
    lt: {
        validator: function(value, param) {
            return new Date(value.replace(/-/g, " / ")).getTime() > new Date($(param[0]).datetimebox("getValue").replace(/-/g, " / ")).getTime();
        },
        message: '时间必须大于开始时间'
    },
    now: {
        validator: function(value) {
            return new Date(value.replace(/-/g, " / ")).getTime() > new Date().getTime();
        },
        message: '时间必须大于当前时间'
    },
    equals: {
        validator: function(value, param) {
            return value == $(param[0]).val();
        },
        message: '两次密码输入不一致.'
    },
    ip: {//ip
        validator: function (value) {
            if (value=="") {
                return true;
            }
            return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value);
        },
        message: '输入的ip格式不正确'
    },
    minLength: {    
        validator: function (value, param) {
            
            if (value == '') {
                return true;
            }
        return value.length >= param[0];    
    },    
    message: '请输入6~20的位密码'   
    }   , 
    strLength: {    
    validator: function (value, param) {
        
        if (value == '') {
            return true;
        }
        return value.length >= param[0];    
    },    
    message: '请输入6~20的位字符'   
    }    

});
