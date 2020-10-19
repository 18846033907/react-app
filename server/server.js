let express = require("express"); //引入express模块
let Mock = require("mockjs"); //引入mock模块

let app = express(); //实例化express

/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */

 //设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
  
/*返回json字符串*/
app.all("/json.action", function (req, res) {
  /**
   * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
   */
  res.json(
    Mock.mock({
      "data|1-9": [
        {
          "name|5-8": /[a-zA-Z]/,
          "id|+1": 1,
          "value|0-500": 20,
        },
      ],
    })
  );
});

/**
 * 监听8090端口
 */
app.listen("8090");
