$(function(){
	$("#a_1").click(function(){
		$("#box_1").css("display","block");
		$("#box_2").css("display","none");
		$("#box_3").css("display","none");
	});
	$("#a_2").click(function(){
		$("#box_1").css("display","none");
		$("#box_2").css("display","block");
		$("#box_3").css("display","none");
	});
	$("#a_3").click(function(){
		$("#box_1").css("display","none");
		$("#box_2").css("display","none");
		$("#box_3").css("display","block");
	});
});