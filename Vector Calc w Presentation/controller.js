var slide_count = 0;
var current_slide = 0;
function init() {
	console.log("init!!!");
	$("#slideshow").animate({
		top: "0%",
	}, 5);
	//"slide_count = "+
	slide_count = document.getElementsByClassName('slide').length;
	$( "div.slide" ).wrapInner( "<div class='slide-content'></div>");
	$( "div.title" ).after( "<hr class='title-ruler'>"); 
	$( "div.body" ).each(function( index ) {
		$( this ).after( "<div class='counter'>"+(index+1)+"/"+slide_count+"</div>");
	});
	console.log("slide_count = "+slide_count);
}
function nextSlide() {
	if(current_slide < slide_count-1) {
		current_slide++;
		moveToCurrentSlide();
	}
}
function prevSlide() {
	if(current_slide > 0) {
		current_slide--;
		moveToCurrentSlide();
	}
}
function moveToCurrentSlide() {
	console.log("happening :: "+"-"+(current_slide*100)+"%");
	$("#slideshow").animate({
		top: "-"+(current_slide*100)+"%",
	}, 500);
}
window.onkeyup=function(e){
    e = e || window.event;
    console.log("keyup: " + e.keyCode);
    if(e.keyCode ==  38) { //up
    	prevSlide();
    } 
    if(e.keyCode == 37) { //left

    } 
    if(e.keyCode == 40) { // down
    	nextSlide();
    } 
    if(e.keyCode == 39) { // right

    } 
};
init();