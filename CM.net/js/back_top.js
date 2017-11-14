$(function(){


		
		
		
		
		
		
		
		//存入cookie
		$("#cookie_1").click(function(){
			$img=$("#bigCursor").html();
			$.cookie("img",$img,{expires:7,path:"/"});
			$name=$("#cookie_2").text();
			$.cookie("name",$name,{expires:7,path:"/"});
			$price=$("#cookie_3").text();
			$.cookie("price",$price,{expires:7,path:"/"});
			$num=$("#cookie_4").children("option:selected").val();
			$.cookie("num",$num,{expires:7,path:"/"});
			$("#zero").text($num);
		})
		
		$("#btn1").click(function(){
			$mark=$("#txt1").text();
			$.cookie("mark",$mark,{expires:7,path:"/"});
			console.log(1234)
		})
		
		
		//取出cookie
//		if($.cookie("img")&&$.cookie("num")&&$.cookie("name")&&$.cookie("price")){
//			$("#product_shop").append("<div id="word_product"> <li>商品</li> <li>金额</li> <li>数量</li> <li>金额</li> </div> < div id = "tu_left" > <div id="tu_left_left"> <a href="#" id="cookie_5"><img src="img/17499499939.jpg"/></a> </div> < div id = "tu_left_right"> <p id="cookie_7"></p><p>皇家护理直发洗发露 <br/> Farouk Royal Treatment Real Straight Shampoo(For Any Hair Type)</p><p> 355 ml/12oz </p><a href = "#" > 清除商品 < /a> < /div> < /div> < div id = "tu_right" > <b id="cookie_8"></b><b><select id="cookie_6"> <option>0</option> <option>1</option> <option>2</option> <option>3</option> </select> </b> <b id = "cookie_9"> </b> < /div>")
//		}
//		
//		
//		$("cookie_5").html($.cookie("img"));
//		$("cookie_6").text($.cookie("num"));
//		$("cookie_7").text($.cookie("name"));
//		$("cookie_8").text($.cookie("price"));
//		$zong=$.cookie("num")*$.cookie("price");
//		$("cookie_9").text($zong);
//		$("cookie_10").text($zong);
//	$("cookie_11").text($zong);
//	$("cookie_12").text($zong);
		
})
var num = 0;
		window.onscroll = function(){
			var up = document.getElementById("top");
			//当前页面滚动的距离？？
			var _top = document.body.scrollTop || document.documentElement.scrollTop;
			if(_top >= 150){
				up.style.display = "block";
			} else {
				up.style.display = "none";
			}
		}
		function goTop(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}