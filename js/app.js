//引入express框架
const express = require('express');
//创建web服务器
const app = express();
// 请求方式与请求目标 all表示post与get都能接收
app.all('/index',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	//下面的用于.html页面需要自定义响应头时设置的，为了应对浏览器的安全机制，针对自定义非预定义
	res.setHeader('Access-Control-Allow-Headers','*');
	//创建数组
	var data = [

	];
	
	// res.send(JSON.stringify(data));  //要发送的对象，需先把对象转换为字符串，还要再html的$.post()方法里需写“json""形参
});
//请求端口
app.listen(6000,() => {
	console.log('服务器启动成功！6000端口正在监听...');
})