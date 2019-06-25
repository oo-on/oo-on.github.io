$(document).ready(function(){

	/*---------------intro 화면으로 이동--------------------*/
	$('h1').click(function(){
		$('.port_nav li').removeClass('nav_on');
		$('html, body').animate({
			scrollTop : $('#wrapper').offset().top
		}, 600)
	})


	/*------------------intro bg animate----------------------------*/
	$('.intro_bg').animate({
		top:'-3100px'
	},2500)


	/*-----------------titlecopy typing effect-------------------------*/
	var typingBool = false; 
	var typingTxt = $('.typing_txt').text(); 
		typingTxt = typingTxt.split("");
	var typingIdx = 0; 
	
	if(typingBool == false){  
		typingBool = true; 
		var tySt = setInterval(typing,200);  
	} 
     
	function typing(){ 
		typingIdx ++; 
		if(typingIdx < typingTxt.length){ 
			$('.typing').append(typingTxt[typingIdx]); 
		}else{ 
			clearInterval(tySt);
		} 
	}  

	
	/*------------------scroll animate---------------------*/
	$('.port_logo').hide();
	
	var worksTop = $('.worksWrap').offset().top;
	
	$(window).scroll(function(){
		if($(this).scrollTop() > worksTop - ($(window).height()/4)){
			$('.port_logo').fadeIn(600);
			$('.header_wrap').css({
				'height' : '50px',
				'background-color' : 'rgba(0,0,0,0.7)'
			}, 1000)
			
		}else{
			$('.port_logo').fadeOut(600);
			$('.header_wrap').css({
				'background-color' : 'rgba(0,0,0,0)'
			}, 1000)
			$('.port_nav li').removeClass('nav_on');
			
		}
	})
	


	

	/*---------------nav effects--------------------*/
	
	$('.port_nav li').on({
		click:function(){
			$('.port_nav li').removeClass('nav_on');
			$(this).addClass('nav_on');

			var navNum = $(this).index();
			if(navNum<2){
				var page = $('#container > div').eq(navNum+1);
			}else{
				var page = $('#container > div').eq(navNum);
			}
			var offset =  page.offset().top;
			$('html, body').animate({
				scrollTop : offset
			}, 800)
		}
	})
	
	
	
	/*--------------------works--------------------*/
	
	//드래그
	$('.demo').backgroundDraggable({axis:'y'});

	
	//반응형 미리보기
	$('.co_section .res_preview span').click(function(){
		var idx=$(this).index();
		$('.co_section .preview_img span').removeClass('previewOn');
		$('.co_section .preview_img span:eq('+idx+')').addClass('previewOn');
		if(idx>=2){
			$('.co_section .preview_btn').css({
				'left':0
			}, 500, 'linear')
			$('.co_section .preview_btn p').animate({
				'width':'200px'
			}, 800, 'linear')
		}else{
			$('.co_section .preview_btn').css({
				'right':'54.5%'
			}, 500, 'linear')
			$('.co_section .preview_btn p').animate({
				'width':'600px'
			}, 800, 'linear')
		}
	})


	/*---------------profile----------------------*/
	$('.profile_etc > li').click(function(){
		$(this).children('ul').slideToggle(600)
	})


})