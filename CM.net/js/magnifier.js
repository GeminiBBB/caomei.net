$(function(){
				var $smallImg = $("#magnifier_left_top"); //小图
				var $bigImg = $("#bigImg"); //大图
				var $smallCursor = $("#smallCursor"); //小可视区域
				var $bigCursor = $("#bigCursor"); //大可视区域
				//根据比例重新计算小可视区的大小
				//公式 ： 小可视区宽度 / 大可视宽度 = 小图宽度 / 大图宽度
				$smallCursor.width($smallImg.outerWidth() * $bigCursor.outerWidth() / 1500);
				$smallCursor.height($smallImg.outerWidth() * $bigCursor.outerWidth() /1500);
				//由于小可视区域隐藏，因此不能使用offsetWidth属性来计算宽度。
				//smallCursor的边长
				diameter = $smallCursor.outerWidth();
				//大小可视区比例
				var scale = $bigCursor.outerWidth() / (diameter*2);
				$smallImg.mousemove(function(evt){
//					$bigCursor.style.display="block";
					//鼠标坐标值
					var disX = evt.clientX - $smallImg.offset().left - diameter / 2;
					var disY = evt.clientY - $smallImg.offset().top - diameter / 2;
					//设置边界
					var leftSide = $smallImg.offset().left + diameter / 2;
					var topSide = $smallImg.offset().top + diameter / 2;
					var rightSide = $smallImg.offset().left + $smallImg.outerWidth() - diameter / 2;
					var downSide = $smallImg.offset().top + $smallImg.outerHeight() - diameter / 2;
					if(evt.pageX >= leftSide && evt.pageX <= rightSide && evt.pageY >= topSide && evt.pageY <= downSide){
						$smallCursor.css("display","block");
						//小图的位置
						$smallCursor.css("left",disX);
						$smallCursor.css("top",disY);
						//大图的位置
						$bigImg.css("left",-disX * scale);
						$bigImg.css("top",-disY * scale);
					}else{
						$smallCursor.css("display","none");
					}
				})
			})