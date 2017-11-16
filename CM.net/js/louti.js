window.onload = function() {
	console.log($("#LoutiNav li:not(.last)").length)
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