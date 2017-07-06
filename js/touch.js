// @charset "utf-8";
// 当文档加载完之后执行
$(document).ready(function(){
	var mus=$("#music_bg")
	var musbtn=true;
	$(".music_btn").click(function(){
		if(musbtn == true){
			mus.pause();
			musbtn=false;
		}else(musbtn == false){
			mus.play();
			musbtn=true;
		}
	})
	
})