$(document).ready(function(){

	$('body *').each(function(){
		
		let x = $(this);
		
		x.css({
			"position" : "absolute",
			"top" : Math.random() * 500,
			"left" : Math.random() * 500,
			"border-color" :"red",
			"border-style" : "dotted",
			"background-color" : "yellow",
			"color" : "green"	});
	});
});
