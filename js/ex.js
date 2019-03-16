
$('.stop').click(function(){
	$('video').trigger('pause')
	$('.play').toggle()
	$('.stop').hide()
})
$('.play').click(function(){
	$('video').trigger('play')
	$('.stop').toggle()
	$('.play').hide()
})
$(function(){
	$(window).scroll(function(){
		 var s=$(window).scrollTop()
		 var b=$('.content-one').offset().top
		 if(s<b){	 	
		 	$('.nav-fix').fadeOut()	 		
		 }
		 if(s>b){	 	
		 	$('.nav-fix').fadeIn()	 		 	
		 }		
	})
})	