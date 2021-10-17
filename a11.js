function getComtext() {
	$.ajax({
		method: 'get',
		url: 'zzj.json',
		success: function(res) {
			console.log(res);
			// if (res.status != 200) return console.log('获取失败');
			var rows = [];
			$.each(res, function(i, item) {
				var str =
					'<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' +
					item.time +
					'</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item
					.username + '</span>' + item.content + '</li>';

				rows.push(str);
			})
			$('#cmt-list').empty().append(rows.join(''))
		}
	})
}
getComtext()
$(function() {
	$("#formAddCmt").submit(function(e) {
		e.preventDefault();
		var aa = $("#namee").val()
		var bb = $("#textt").val();
		$.post('http://localhost:3031/a1', {name:aa,text:bb}, function(res) {
			if (res.readyState === 4) { //表明服务端返回所有结果
				if (res.status >= 200 && res.status < 300) {
					// return alert('发表评论')
					// console.log(res.response);
				}
				getComtext();
			}
			//$("#formAddCmt")[0] //jq对象转为原生对象
		});

		

	})

})

		// var datas = data.split('&');
		// $.each(datas,function (i) {
		// 	console.log(datas[i]);
		// 	arr[arr.length] = datas[i].split('=');
		// 	// $.each(arr,function (j) {
		// 	// 	console.log(arr[j][1]);
		// 	// })
		// })
		// console.log(arr);
		// var ddlist = new getD(arr[0][1],arr[1][1]);
		// // console.log(ddlist);
		// var lists = JSON.stringify(ddlist)
