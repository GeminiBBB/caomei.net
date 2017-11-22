window.onload = function (){
	let oBox      = $id('banner');
	let oList     = $id('banner_ul');
	let oLi       = oList.children;
	let iperWidth = oLi[0].offsetWidth;
	let oCircle   = $id('lunbodian');
	let lis       =oCircle.children;
	let l        = lis.length;
	let now = 0;
	lis[now].className = "selected";
	
	//复制一个li放到ul里面，为无缝做准备
	oList.innerHTML += oLi[0].outerHTML;
	oList.style.width = oLi.length * iperWidth + 'px';
	
	for( var i = 0; i<l; i++){
		var li = lis[i];
		li.index = i;
		li.onclick = function(){
			now = this.index;
			tab();
		}
	}
	function tab(){
		// 按钮样式
		for( var i=0; i<l; i++ ){
			lis[i].className = "";
		}	
	
		// 显示图片
		if( now == l ){
			now = 0;
			lis[now].className = "selected";	
			bufferMove(oList, {left:l*-iperWidth}, function(){
				oList.style.left = "0px";
			});		
		}else{
			lis[now].className = "selected";	
			bufferMove(oList, {left:now*-iperWidth});
		}
	}
	function next(){
		now++;	
		tab();
	}
	
	var timer = setInterval(next, 5000);
	
	
	oBox.onmouseenter = function(){
//		oBtn.style.display = 'block';
		clearInterval(timer);
	}
	oBox.onmouseleave = function(){
//		oBtn.style.display = 'none';
		timer = setInterval(next,5000);
	}
	

//	
//	let iIndex = 0;

		
		
		
		
//	$('#dianji').mouseover(function(){
//	$('#twoJi_menu').css('display','block');
//});
//$('#dianji').mouseout(function(){
//	$('#twoJi_menu').css('display','none');
//});

	
	$("#LoutiNav li:not(.last)").click(function() {
		$(this).find("span")
			.addClass("active")
			.end()
			.siblings()
			.find("span")
			.removeClass("active");
		//获取某个楼层的top值    根据这个top值 确定滚动条的位置
		var _top = $(".Louti").eq($(this).index()).offset().top;

		$("body,html").animate({ "scrollTop": _top }, 1000);
	})
	//2 点击top  回到顶部
	$(".last").click(function() {
		$("body,html").animate({ "scrollTop": 0 }, 1000);
	})
	//3 滚动条操作  控制楼层号的改变 (根据楼层的下标 找楼层号) 	
	$(window).scroll(function() {

		//获取页面滚走的距离
		var sTop = $(document).scrollTop();
		//过滤每一个楼层 找到满足条件的楼层  并获取该楼层的下标  根据这个下标就可以控制楼层号
		$floor = $(".Louti").filter(function() {
			return Math.abs($(this).offset().top - sTop) < $(this).outerHeight() / 2;
		})
		var index = $floor.index(); //某个楼层的下标

//		$("#LoutiNav li").eq(index)
//			.find("span")
//			.addClass("active")
//			.end()
//			.siblings()
//			.find("span")
//			.removeClass("active");
	})
	
}