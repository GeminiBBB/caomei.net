window.onload = function () {
	let oBox 			= $('#box'),
	 oDirectionBtn 	= $('#direction-btn');
		oLeftBtn 		= $('#left-btn'),
		oRightBtn 		= $('#right-btn'),
		oList			= $('#box #list'),
		aListLi			= $("#box ul li"),
		iPerWidth		= aListLi[0].offsetWidth,
		oBtnList		= $('#btn-list'),
		aBtnListA		= Array.from(oBtnList.children);
		console.log(typeof(oList))
	// 标识图片的下标
	let iIndex = 0;
	// 表示按钮的下标
	let iBtnIndex = 0;

	// 记录定时器的返回值
	let iTimer = null;

	// 鼠标移入，显示按钮
//	oBox.onmouseenter = function () {
//		clearInterval(iTimer);
//		oDirectionBtn.style.display = 'block';
//	}
//
//	// 鼠标移出，隐藏按钮
//	oBox.onmouseleave = function () {
//		oDirectionBtn.style.display = 'none';
//		// 自动运行
//		autoMove();
//	}


	// 复制第一个LI放到最后的位置
	oList.innerHTML += aListLi[0].outerHTML;

	// 改变ul的宽度
	oList.style.width = 1100+"px";


	// 点击左侧按钮
	oLeftBtn.onclick = function () {
		iIndex--;
		iBtnIndex--;

		// 针对图片做的左侧临界点的判断
		if(iIndex < 0) {
			iIndex = aListLi.length - 2;
			oList.style.left = - (aListLi.length - 1) * iPerWidth + 'px';
		}

		// 针对按钮做左侧临界点的判断
		if(iBtnIndex < 0){
			iBtnIndex = aBtnListA.length - 1;
		}
		bufferMove(oList, {left: - iIndex * iPerWidth});

		// 给对应的按钮添加className
		aBtnListA.forEach(function (m) {
			m.className = '';
		});
		aBtnListA[iBtnIndex].className = 'active';
	}

	// 点击右侧按钮
	oRightBtn.onclick = function () {
		iIndex++;
		iBtnIndex++;

		// 针对图片做的右侧临界点的判断
		if(iIndex >= aListLi.length) {
			iIndex = 1;
			oList.style.left = 0;
		}

		// 针对按钮做右侧临界点的判断
		if(iBtnIndex >= aBtnListA.length){
			iBtnIndex = 0;
		}

		bufferMove(oList, {left: - iIndex * iPerWidth});

		// 给对应的按钮添加className
		aBtnListA.forEach(function (m) {
			m.className = '';
		});
		aBtnListA[iBtnIndex].className = 'active';
	}


	// 给按钮列表添加鼠标移入事件
	aBtnListA.forEach(function (v, k) {
		v.index = k;
		v.onclick = function () {
			iIndex = this.index;
			iBtnIndex = this.index;

			bufferMove(oList, {left: - this.index * iPerWidth});

			// 给对应的按钮添加className
			aBtnListA.forEach(function (m) {
				m.className = '';
			});
			this.className = 'active';
		}
	});


	// 自动运行
//	autoMove();

	function autoMove() {
		iTimer = setInterval(function () {
			iIndex++;
			iBtnIndex++;

			// 针对图片做的右侧临界点的判断
			if(iIndex >= aListLi.length) {
				iIndex = 1;
				oList.style.left = 0;
			}

			// 针对按钮做右侧临界点的判断
			if(iBtnIndex >= aBtnListA.length){
				iBtnIndex = 0;
			}

			bufferMove(oList, {left: - iIndex * iPerWidth});

			// 给对应的按钮添加className
			aBtnListA.forEach(function (m) {
				m.className = '';
			});
			aBtnListA[iBtnIndex].className = 'active';
		}, 3000);
	}
	
	
	
	//放大镜
	var smallImg = document.getElementById("magnifier_left_top");//小图
				var bigImg = document.getElementById("bigImg"); //大图
				var smallCursor = document.getElementById("smallCursor");//小可视区域
				var bigCursor = document.getElementById("bigCursor");//大可视区域
				smallImg.onmouseover=function(evt){
						var e = evt || window.event;
						bigCursor.style.visibility="visible";
						smallImg.style.opacity="0.7";
					}
				smallImg.onmouseout=function(evt){
					var e = evt || window.event;
						bigCursor.style.display="none";
						smallImg.style.opacity="1";
				}
				//根据比例重新计算小可视区的大小
				//公式：小放大镜宽度/大放大镜宽度 = 小图宽度/大图宽度
				smallCursor.style.width = smallCursor.style.height = smallImg.offsetWidth * bigCursor.offsetWidth / 1500 + "px";
				//由于小放大镜域会隐藏，因此不能使用offsetWidth属性来计算宽度。
				//smallCursor的边长
				diameter = parseInt(smallCursor.style.width);
				//大小可视区比例
				var scale = bigCursor.offsetWidth / (diameter*2);
				smallImg.onmousemove = function(evt){
					var e = evt || window.event;
					var disX = e.pageX - smallImg.offsetLeft - diameter / 2;
					var disY = e.pageY - smallImg.offsetTop - diameter / 2;
					//设置边界 
					 //左边界
					var leftSide = smallImg.offsetLeft + diameter / 2; 
					 //上边界 
					var topSide = smallImg.offsetTop + diameter / 2;    
					// 右边界
					var rightSide = smallImg.offsetLeft + smallImg.offsetWidth - diameter / 2;
					//下边界 
					var downSide = smallImg.offsetTop + smallImg.offsetHeight - diameter / 2;
					if(e.pageX >= leftSide && e.pageX <= rightSide && e.pageY >= topSide && e.pageY <= downSide){
						smallCursor.style.display = "block";
						bigCursor.style.display = "block";
						//小图位置
						smallCursor.style.left = disX + "px";
						smallCursor.style.top = disY + "px";
						//大图位置
						bigImg.style.left = -disX * scale + "px";
						bigImg.style.top = -disY * scale + "px";
					}else{
						smallCursor.style.display = "none";
					}
					
				}
				
				
//				var navlist=document.getElementById("purple_ul").getElementsByTagName("a");
//		var boxlist = document.getElementById("box_1");
//		for(var i=0; i<navlist.length; i++) {
//		
//			navlist[i].index = i;
//			navlist[i].onclick = function(){
////				//先把所有的都去掉，
////				//再把自己的加上
////				for(var k=0; k<navlist.length; k++) {
////					navlist[k].className = "";
////				}
////				//将当前被单击的这个li，添加一个class ， 叫active
////				//同时，其他的li，要把这个active去掉
////				this.className = "active"; 
//				
//				//将被单击的Li对应的DIV显示，其他的隐藏
//				for(var j=0; j<boxlist.length; j++) {
//					boxlist[j].style.display = "none";
//				}
//				
//				boxlist[this.index].style.display = "block";
//				
//			}
//		}
//var  odiv1=document.getElementById("div_1");
//var  odiv2=document.getElementById("div_2");
//var  odiv3=document.getElementById("div_3");
//var  oa1=document.getElementById("a_1");
//var  oa2=document.getElementById("a_2");
//var  oa3=document.getElementById("a_3");
//oa1.onclick=function(){
//	document.getElementById("div_1").style.display="block";
//	document.getElementById("div_2").style.display="none";
//	document.getElementById("div_3").style.display="none";
//}
//oa2.onclick=function(){
//	document.getElementById("div_1").style.display="none";
//	document.getElementById("div_2")="block";
//	odiv3.style.display="none";
//}
//oa3.onclick=function(){
//	odiv1.style.display="none";
//	odiv2.style.display="none";
//	odiv3.style.display="block";
//}

}