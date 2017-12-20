// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() 
	{
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
	});
	$(".second").on("click",function(){
		var tg = $(this),
			cloneNode = tg.clone(),
			close = $("<div></div>").css({"position":"absolute","top":"30px","right":"30px","background":"url(images/close.png)","background-size":"100% 100%","width":"20px","height":"20px"}).appendTo(cloneNode.children().first().css({"position":"relative"})),
			shade = $("<div></div>").css({"position":"fixed","left":"0","top":"0","width":"100%","background":"#000000","opacity":"0","filter":"alpha(opacity=0)","height":"100%","z-index":"100"}).appendTo("body"),
			css = {"position":"fixed","top":(tg.position().top-$("body").scrollTop())+"px","left":tg.position().left+"px",width:tg.width()+30+"px",height:tg.height()+"px"};
		close.click(function(){
			$(shade).remove();
			$(cloneNode).remove();
		});
		shade.click(function(){
			$(shade).remove();
			$(cloneNode).remove();
		});
		cloneNode.find(".ellipsis").remove();
		cloneNode.css(css).appendTo("body");
		window.setTimeout(function(){
			shade.css({
				"-webkit-transition":"all 0.5s ease",
				"-ms-transition":"all 0.5s ease",
				"-moz-transition":"all 0.5s ease",
				"transition":"all 0.5s ease",
				"opacity":"0.5",
				"filter":"alpha(opacity=50)"
			});
			if($("body").width()>990){
				cloneNode.css({
					"-webkit-transition":"all 0.5s ease",
					"-ms-transition":"all 0.5s ease",
					"-moz-transition":"all 0.5s ease",
					"transition":"all 0.5s ease",
					"z-index":"9999",
					"width":"70%",
					"height":"80%",
					"top":"10%",
					"left":"15%"
				});
			}else{
				cloneNode.css({
					"-webkit-transition":"all 0.5s ease",
					"-ms-transition":"all 0.5s ease",
					"-moz-transition":"all 0.5s ease",
					"transition":"all 0.5s ease",
					"z-index":"9999",
					"width":"96%",
					"height":"80%",
					"top":"10%",
					"left":"2%"
				});
			}
			cloneNode.children().first().css({
				"overflow-y":"scroll"
			});
		},1);
	});
})