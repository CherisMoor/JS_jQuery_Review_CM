$(document).ready(function(){

$("div.box").mouseover(function(){
	$(this).find(".inBox").text("over");
});
$("div.box").mouseout(function(){
	$(this).find(".inBox").text("out");
});
});