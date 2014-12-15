/**
 * Created by yaokuo on 2014/12/14.
 */
define(function(require,exports,module){
    var $ = require('jquery');

    var DataHandler = function(addToPage){
        this.addToPage = addToPage;
    };

    module.exports = DataHandler;

    DataHandler.prototype = {
        InstanceBaseInfoHandler : function(data){
          /*将ajax获取的data格式化,并用回调函数添加到页面*/
            var ret = {};
            this.addToPage(ret);
        },

        InstanceRunStatusHandler : function(data){
            /*将ajax获取的data格式化,并返回*/
            var ret = {};
           this.addToPage(ret);
        }
    }
});