/**
 * Created by yaokuo on 2014/12/12.
 */
define(function(require,exports,module){
    var $ = require('jquery');
    require('bootstrap')($);
    var Common = function (){
    };
    module.exports = Common;

    Common.prototype = {
        Tooltip : function (id){
            $(id).hover(function() {
                $(this).tooltip('show');
            }, function() {
                $(this).tooltip('hide');
            });
        },

        Sidebar : function(id,index){
            var sidebar = $(id);
            index--;
            $(id).find(".active").removeClass("active");
            $(id).find("li:eq("+index+")").addClass("active");
        },

        GetDataHandler : function(url,handler){  //异步获取数据,将数据交给handler处理
            $.ajax({
                url:url,
                type:"get",
                dataType:'json',
                success:function(data){
                    handler(data);
                }
            });
        },

        PostDataHandler : function (url,data,handler){ //异步提交数据,将返回数据交给handler处理
            $.ajax({
                url:url,
                type:"post",
                dataType:'json',
                data:data,
                success:function(data){
                    /*添加当handler为空是的异常处理*/
                    handler(data);
                }
            });
        }

        /*add new common function*/
    }
});