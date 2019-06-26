$(document).ready(function(){

	/*---------------intro 화면으로 이동--------------------*/
	$('h1').click(function(){
		$('.port_nav li').removeClass('nav_on');
		$('html, body').animate({
			scrollTop : $('#wrapper').offset().top
		}, 600)
	})


	/*---------------intro bg animate--------------------*/
	$('.intro_bg').animate({
		top:'-3100px'
	},3800)


	/*------------titlecopy typing effect---------------*/
	var typingBool=false; 
	var typingTxt=$('.typing_txt').text(); 
		typingTxt=typingTxt.split("");
	var typingIdx=0; 
	
	if(typingBool==false){  
		typingBool=true; 
		var tySt=setInterval(typing,200);  
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
	
	$('html, body').scroll(function(){
		if($(this).scrollTop() > worksTop - ($(window).height()/4)){
			$('.intro_bg').css({
				position:'fixed'
			});
			$('.port_logo').fadeIn(600);
			$('.header_wrap').css({
				'height' : '40px',
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
	
	var worksTop = $('.worksWrap').offset().top;
	var profileTop = $('.profileWrap').offset().top;
	$('.port_nav li').on({
		click:function(){
			$('.port_nav li').removeClass('nav_on');
			$(this).addClass('nav_on');

			var navNum=$(this).index();
			if(navNum == 0){
				$('html, body').animate({
					scrollTop : worksTop
				}, 1000)
			}else{
				$('html, body').animate({
					scrollTop : profileTop
				}, 1000)
			}
			
		}
	})
	
	
	
	/*--------------------works--------------------*/
	
	//drag
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
				'width':'40%'
			}, 800, 'linear')
		}else{
			$('.co_section .preview_btn').css({
				'right':'54.5%'
			}, 500, 'linear')
			$('.co_section .preview_btn p').animate({
				'width':'100%'
			}, 800, 'linear')
		}
	})


	//original page 보기
	$('.original').click(function(){
		$(this).next('.original_img').toggle(600);
	})




})