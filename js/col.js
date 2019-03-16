var n=0;
var maindex;
var index;
var a;
$('.content-box').hover(function(){
	
	index = $(this).index('.content-box')

	console.log(index)
	
})

$('.content-left').click(function(){
	
	n--;
	if(n<1){
		n=9;
	}
	$('.content-pic ul').eq(index).css('transform',`translateX(${-10*n}%)`)
	console.log(index)
})

$('.content-right').click(function(){
	
	n++;
	if(n>9){
		n=0;
	}
	$('.content-pic ul').eq(index).css('transform',`translateX(${-10*n}%)`)
	
})