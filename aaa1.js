const http = require("http");//导入http模块
const url = require("url"); //导入处理url参数的木块
const querystring = require('querystring');
var fs = require('fs');
//我这里使用的是箭头函数 这里是给app 绑定了 request 响应事件，函数的参数分别是 request 请求参数，和respond 相应参数
http.createServer(function(req, res) {
    res.setHeader('access-control-allow-origin', '*');
    var pathname = url.parse(req.url).pathname;  //获取路径名称
    var query = url.parse(req.url).query;
    if (pathname == '/a1') {
        var postData = "";
        req.on("data", function(postDataChunk) {
            postData += postDataChunk;
        });
        req.on("end", function() {
            var params = querystring.parse(postData);
            var s = params.name;
			var h = params.text;
			var d=new Date();
			fs.readFile('zzj.json', 'utf-8', function(err, data) {
				var arr = JSON.parse(data);
				var str = {id:arr.length+1,username:s,content:h,time:d.toLocaleString()}
				arr.push(str);
				var str_json = JSON.stringify(arr);
				console.log(str_json);
				fs.writeFile('zzj.json', str_json, function(err) {
					if (!err) {
						console.log('添加数据成功！');
					}
				})
			});
            res.end();//响应回的页面内容
        })
    }
}).listen(3031);
