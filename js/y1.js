/*
* @Author: apple
* @Date:   2017-10-08 17:31:39
* @Last Modified by:   apple
* @Last Modified time: 2017-10-09 23:13:48
*/
$(function(){
     $('#fullpage').fullpage({
    	// 显示项目符号
    	// navigation: true,
    	// 循环滚动
    	loopBottom: true, 
		keyboardScrolling: true,
		 css3:true, 
		fixedElements: '.bj',
		anchors:["page1","page2","page3","page4","page5","page6","page7"], 
		menu:".gding,.bj,.xiaye",
		// menu:"",
		paddingTop: '0px',
		
    	onLeave: function(index, nextIndex, direction) {
			if(nextIndex == 1){
				$(".nav2").css('display','none');
				$(".navl").css('display','block');
				$(".bj").css({
					'width':'0%',
					'height':'0%'
				});
			}else{
				$(".navl").css('display','none');
				$(".nav2").css('display','block');
				$(".bj").css({
					'width':'100%',
					'height':'100%'
				});
			}
			if(nextIndex == 2){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
				$(".f2").css({'transform': 'translate(-50%,0) translateZ(0px) rotateX(0deg)  rotateY(0deg)'});
			}else{
				$(".f2").css({'transform': 'translate(1000%,-200%) translateZ(9999px) rotateZ(-180deg)  rotateY(-180deg)'});
			}
			if(nextIndex == 3){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
				$('.f31_1>p').each( function (i) {
					$('.f31_1>p:eq('+i+')>span>i').addClass('i'+(i+1));
				});
				$(".f3").css({'transform': 'translate(-5%,-44%) translateZ(0px) rotateX(0deg)  rotateY(0deg)'});
				$(".bj").css({'transform': ' rotateZ(-180deg)'});
			}else{
				$(".bj").css({'transform': ' rotateZ(0deg)'});
				$(".f3").css({'transform': 'translate(-500%,-404%) translateZ(2000px) rotateX(-150deg)  rotateY(-80deg)'});
				$('.f31_1>p').each( function (i) {
					$('.f31_1>p:eq('+i+')>span>i').removeClass('i'+(i+1));
				})
			}
			if(nextIndex == 4){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
				$(".f4").css('transform', 'translateX(-50%) translateZ(0px)')
			}else{
				$(".f4").css('transform', 'translateX(-50%) translateZ(5000px)')
			}
			if(nextIndex == 5){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
			}else{
			}
			if(nextIndex == 6){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
				$(".f6").css('transform',' translateX(-50%) rotateX(0deg)');
			}else{
				$(".xiaye").css('display','block');
				$(".f6").css('transform',' translateX(-50%) rotateX(270deg)');
			}
			if(nextIndex == 7){
				$(".qxz>li").removeClass('active').eq(nextIndex-1).addClass('active');
				$(".xiaye").css('display','none');
			}else{
				$(".xiaye").css('display','block');
			}	
		}
});
//打字机
		var txt  =["你好，欢迎来到我的空间!"]; 
		var index=0;
		var i = 0;
		setInterval(function(){
			if(true){      
				$(".dzjh1").html(txt[i].slice(0,index++))
			}
		},200);
		
		//手风琴效应
		$(".f4_1>li").click(function () {
			$(this).children('ul').addClass('yc').parent().siblings('li').children('ul').removeClass('yc');
			if(($(".f4_1>li:eq(1)").children('ul').css('display')) == 'block'){
				$(".f4_2_2").css('display','block').siblings().css('display','none');
			}else{
				$(".f4_2_2").css('display','none').siblings().css('display','block');
			}
			// console.log(($(".f4_1>li:eq(1)").children('ul').css('display')));
		})
		
});