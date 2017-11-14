window.onload = function (){
	let oBox      = $('banner');
	let oList     = $('banner_ul');
	let oLi       = oList.children;
	let iperWidth = oLi[0].offsetWidth;
	let oCircle   = $('lunbodian');
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
	
}