var n=0;
$('.right-box').click(function(){
	n++;
	if(n>8){
		$('.right-box').css('display','none')
	}
	$('.left-box').css('display','block')
	$('.pic-con-box ul').stop().css('transform',`translateX(${-660*n}px)`)
	$('ol li').eq(n).addClass('current')
	$('ol li').eq(n).siblings().removeClass()
})
$('.left-box').click(function(){
	n--;
	if(n<1){
		$('.left-box').css('display','none')
		
	}
	$('.right-box').css('display','block')
	$('.pic-con-box ul').stop().css('transform',`translateX(${-660*n}px)`)
	$('ol li').eq(n).addClass('current')
	$('ol li').eq(n).siblings().removeClass()
})
$(window).scroll(function(){
	var s=$(window).scrollTop()
	if(s<150){
		$('.background-color').stop().animate({'opacity':'0.45'},100)
	}
	if(s>150){
		$('.background-color').stop().animate({'opacity':'0.65'},100)
	}
	if(s>250){
		$('.background-color').stop().animate({'opacity':'0.85'},100)	
	}
})