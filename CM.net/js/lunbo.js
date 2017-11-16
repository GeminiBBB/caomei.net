
function $id(id){
	return document.getElementById(id);
}

function getStyle(obj,sAttr){
	if(obj.currentStyle){
		return obj.currentStyle[sAttr];
	}else{
		return getComputedStyle(obj,false)[sAttr];
	}
}

function bufferMove(obj,oTarget,fn,ratio = 8){
	clearInterval(obj.iTimer);
	obj.iTimer = setInterval(function(){
		var flag = true;
		for(var sAttr in oTarget){
			if(sAttr === 'opacity'){
				var iCur = parseInt(getStyle(obj,sAttr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,sAttr));
			}
			
			var iSpeed = (oTarget[sAttr] - iCur) / ratio;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			var iNext = iCur + iSpeed;
			if(sAttr === 'opacity'){
				obj.style.opacity = iNext / 100;
				obj.style.filter = 'alpha(opacity = '+ iNext+')';
			}else{
				obj.style[sAttr] = iNext + 'px';
			}
			
			if(iNext !== oTarget[sAttr]){
				flag = false;
			}	
		}
		if(flag){
			clearInterval(obj.iTimer);
			if(fn){
				fn();
			}
		}
	},40);
}




