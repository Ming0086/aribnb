var n=0;
$('.main-maodian li').click(function(){
	var index=$(this).index()
	$(this).css('color','black')
	$(this).siblings().css('color','#008489')
	if(index==0){
		var top=$('.main-title').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 5},1000)
		
	}
	if(index==1){
		var top=$('#rated-search').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 150},1000)
							
	}
	if(index==2){
		var top=$('.day').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 100},1000)
							
	}
	if(index==3){
		var top=$('section').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 100},1000)
							
	}
	if(index==4){
		var top=$('.must').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 100},1000)
							
	}
	if(index==5){
		var top=$('.landlord-ms').offset().top;
		$('html,body').stop().animate({'scrollTop':top - 100},1000)
							
	}
})
$(window).scroll(function(){
 var s=$(window).scrollTop()
 var b=$('.right-con').offset().top
	if(s>675){
		$('.list').css({'position':'fixed','top':0,'background':'white','z-index':2,'width':'100%','border-bottom':'1px solid #ebebeb'})
		$('.main-bottom').slideDown(1000)
//		$('.main-right').addClass('main-right-flex')
	}
	if(s<675){
		$('.list').css({'position':'relative','border-bottom':'none'})
		$('.main-bottom').slideUp(1000)
//		$('.main-right').removeClass('main-right-flex')
	}
})	
$('.main-maodian li').hover(function(){
	
	$(this).css({'text-decoration':'underline','cursor':'pointer'})
	
},function(){
	
	$(this).css('text-decoration','none')
	})
	
var mySchedule = new Schedule({
el: '#schedule-box',
//date: '2018-9-20',
clickCb: function (y,m,d) {
	document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
},
nextMonthCb: function (y,m,d) {
	document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
},
nextYeayCb: function (y,m,d) {
	document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
},
prevMonthCb: function (y,m,d) {
	document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
},
prevYearCb: function (y,m,d) {
	document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
	}
});

$('.love').click(function(){	
	$('.love svg').toggleClass('red')	
})
$('.all-pic').click(function(){
   $('.all-box').css('display','flex')
   $('html body').css('overflow','hidden')
})
$('.exit').click(function(){
	$('.all-box').css('display','none')
	$('html body').css('overflow','')
})
$('.all-right').click(function(){
	n++;
	if(n>7){
		n=0;
		$('.bottom-list').css('left','0')
	}
	if(n==5){
		$('.bottom-list').css('left','-330px')
	}
	$('.all-pic-box ul').css('left','-600'*n +'px')
	$('.bottom-list li').eq(n).addClass('list-light').siblings().removeClass()
	$('.all-pic-bottom p').html(n+1 + '/8：【谜游】田子坊 4/9号线 近地铁 解谜发烧友的雅致一居')
})
$('.all-left').click(function(){
	n--;
	if(n<0){
		n=7;
		$('.bottom-list').css('left','-330px')
	}
	if(n==4){
		$('.bottom-list').css('left','0')
	}
	$('.all-pic-box ul').css('left','-600'*n +'px')
	$('.bottom-list li').eq(n).addClass('list-light').siblings().removeClass()
	$('.all-pic-bottom p').html(n+1 + '/8：【谜游】田子坊 4/9号线 近地铁 解谜发烧友的雅致一居')
	
})
