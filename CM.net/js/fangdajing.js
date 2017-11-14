
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
				
