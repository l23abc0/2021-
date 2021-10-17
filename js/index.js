$(function() {
	var a = 1;

	$(".d1>img").mouseenter(function() {
		if (a == 1) {
			$(this).css('display', 'none').siblings('.d1_1').css('display', 'block').animate({
				'width': '82%'
			}, 2);
			a = 0;
		}
	})
	$(".text").focus(function() {
		$(this).css({
			'height': '70px',
			'fontSize': '28px',
			'border-bottom': '2px solid #000'
		}).parent().css({
			'fontSize': '20px',
			'color': '#aaa'
		});
		$(".d2_2").css('display', 'none');
	})
	$(".zc").click(function() {

		$(".d0").css({
			'display': 'block'
		});
		$(".d1_1").css('display', 'none').siblings('.d1_2').css('display', 'block').animate({
			'width': '82%'
		}, 20);
		$(".d2_1,.d2_2,.d2_3").css('display', 'none')
		$(".zhuce").focus();
	})
	$(".btn2").click(function() {
		var local = getDate();
		var val1 = $(this).val(); //获取，赋值输入框的值
		// var patt1 = new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9] /); //创建正则表达式为输入框输入的值
		if ($(".zhuce").val() === '') {
			alert('请输入！！');
			return;
		};
		for (var i = 0; i < local.length; i++) {
			if ($('.zhuce').val() === local[i].name) {
				$(".d2_4").css('display', 'block');
				return;
			}
		}
		local.push({
			name: $(".zhuce").val(),
		});
		$(".d0").css({
			'display': 'block'
		});
		$(".d1_2").css('display', 'none').siblings('.d1_1').css('display', 'block').animate({
			'width': '82%'
		}, 2);
		$(".zhuce").val('');
		$(".d2_4").css('display', 'none');
		saveDate(local);

	});

	$(".d1_12").on('click', '.btn1', function() {
		var datalist = getDate();
		if ($('.tty').val() === '') {
			$(".d2_2").css('display', 'block').siblings().css('display', 'none');
			return;
		} else {
			var text = $('.tty').val();
			//遍历判断数据
			if (datalist.length < 1) {
				$(".d2_1").css('display', 'block').siblings().css('display', 'none');
				return;
			} else {
				$.each(datalist, function(i) {
					if (text != datalist[i].name) {
						$(".d2_1").css('display', 'block');
						// alert('in;on');
						return;
					} else {
						if (!$(".che").prop('checked')) {
							$(".d2_3").css('display', 'block').siblings().css('display', 'none');
							return;
						}else{
							$(".d2").css('display', 'none');
							$(location).attr('href','ye1.html');
							$('.tty').val('')
							// alert('ubli')
						}
					}
				})
			}

		}
	})

	$(".zhuce").keydown(function(e) {
		$(".d0").css('display', 'none');
		if (e.keyCode === 13) {
			var local = getDate();
			if ($(this).val() === '') {
				alert('请输入！！');
				return;
			};
			for (var i = 0; i < local.length; i++) {
				if ($('.zhuce').val() === local[i].name) {
					$(".d2_4").css('display', 'block')
					return
				}
			}
			local.push({
				name: $(this).val(),
			});
			$(".d1_2").css('display', 'none').siblings('.d1_1').css('display', 'block').animate({
				'width': '82%'
			}, 2);
			$(this).val('');
			$(".d2_4").css('display', 'none');
			saveDate(local);
		}
	})
	$(".nm").click(function() {
		var datalist = getDate();
		for (var i = 0; i < datalist.length; i++) {
			if ('朋友' == datalist[i].name) {
				return
			}
		}
		var local = getDate();
		local.push({
			name: '朋友'
		});
		saveDate(local);
	})
	//保存数据
	function saveDate(data) {
		localStorage.setItem("todolist", JSON.stringify(data));
	};
	// 读取本地存储的数据
	function getDate() {
		var data = localStorage.getItem("todolist");
		if (data !== null) {
			return JSON.parse(data);
		} else {
			return [];
		}
	};


	setInterval(function() {
		var dval = $(".d0").css('display');
		if (dval == 'block') {
			$(".d0").css('display', 'none');
		};
	}, 5000)






})
