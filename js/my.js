
var n=0;
var l=0;
var nl=0
var cn=0;
 setInterval(function(){
 	l=l+1;
 	if(l>55){
 		
 		l=0;
 		$('ol li div').css('width',0)
		$('ol li div').removeClass('list-white')
		n++;
	 	if(n>2){
	 		
	 		n=0;
	 	}
	 	$('.header-pic li').eq(n).addClass('op');
	 	$('.header-pic li').eq(n).siblings().removeClass('op');
			
 	}
 	
	$('ol li div').eq(n).addClass('list-white');
	$('.list-white').css('width',l)	
	
 },100)
 $('.left').click(function(){
 	n--;
 	l=0;
	$('ol li div').css('width',0)
 	if(n<0){
 		n=2
 	}
 	$('ol li div').removeClass('list-white')
 	$('.header-pic li').eq(n).addClass('op');
 	$('.header-pic li').eq(n).siblings().removeClass('op');
 	$('ol li div').eq(n).addClass('list-white');
 	
 })
  $('.right').click(function(){
 	n++;
 	l=0;
	$('ol li div').css('width',0)
 	if(n>2){
 		n=0
 	}
 	$('ol li div').removeClass('list-white');
 	$('ol li div').eq(n).addClass('list-white');
 	$('.header-pic li').eq(n).addClass('op');
 	$('.header-pic li').eq(n).siblings().removeClass('op');
 })
  
$('#sign').click(function(){
	
	$('.login').toggle()
	$('body').css('overflow','hidden')
})
$('.login-del').click(function(){
	$('.login').toggle()
	$('body').css('overflow','')
})
$('#register').click(function(){
	
	$('.register-box').toggle()
	$('body').css('overflow','hidden')
})
$('.register-del').click(function(){
	$('.register-box').toggle()
	$('body').css('overflow','')
})

$('.city li').click(function(){
	var index=$(this).index();
	console.log(index)
	$(this).addClass('citycolor')
	$(this).siblings().removeClass('citycolor')
	$('.main-pic').eq(index).addClass('current')
	$('.main-pic').eq(index).siblings().removeClass('current')
	
})

$('.place-right').click(function(){
	nl++;
	if(nl>3){
		$('.place-right').hide()
	}
	$('.middle-place').css('transform',`translateX(${-260*nl}px)`)
	$('.place-left').show()
})
$('.place-left').click(function(){
	nl--;
	if(nl<1){
		$('.place-left').hide()
		$('.place-right').show()
	}
	$('.middle-place').css('transform',`translateX(${-260*nl}px)`)
})
$('.search').click(function(){
	 event.stopPropagation();/*阻止父级事件*/

	$('.nav_search').css('width',510)
})

$('#place-search').focus(function(){
	$('.header-list').show();
})
$('#place-search').blur(function(){
	$('.header-list').hide();
})
$(document).click(function(){
	$('.nav_search').css('width',410)
 	$('.place-box-left').css('width','60%')
	$('.place-box-center').css('width','30%')
	$('.day-meun').css('width','30%').hide()
})
$('body').click(function(){

	$('.header-lsit').hide();
 	
})
$('#money').click(function(){
	
	$('.list-money').toggle();
	
})
$('#city-left').click(function(){
	
	$('#city-one').css('transform',`translateX(${0}px)`)
	$('#city-left').toggle()
	$('#city-right').toggle()
})
$('#city-right').click(function(){
	
	$('#city-one').css('transform',`translateX(${-138}px)`)
	$('#city-left').toggle()
	$('#city-right').toggle()
})
$('.place-box-center').click(function(){
	event.stopPropagation();
	$('.place-box-left').css('width','50%')
	$('.place-box-center').css('width','40%')	
	$('.day-meun').fadeIn(100)
	$('.day-meun').show().css('width','40%')
})
$('.bpspan span').click(function(){
	
	$(this).addClass('header-bp')
	$(this).removeClass('header-white')
	$(this).siblings().removeClass('header-bp')
	$(this).siblings().addClass('header-white')
	
})
$('#help').click(function(){
	
	$('.help').toggle()
})

$('.help-box span').click(function(){
	
	$('.help').toggle()
	
})
$('.money-style').click(function(){
	var money;
	var money = $(this).html();
	console.log(money)
	$('#money p').html(money)
})
