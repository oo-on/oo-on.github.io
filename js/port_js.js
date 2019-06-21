$(document).ready(function(){

	/*---------------intro 화면으로 이동--------------------*/
	$('h1').click(function(){
		$('.port_nav li').removeClass('nav_on');
		$('html, body').animate({
			scrollTop : $('#wrapper').offset().top
		}, 600)
	})


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
		} else{ 
			clearInterval(tySt);
		} 
	}  

	
	/*------------------scroll animate---------------------*/
	$('.port_logo').hide();
	
	var introTop = $('.introWrap').offset().top;
	var worksTop = $('.worksWrap').offset().top;
	var profileTop = $('.profileWrap').offset().top;
	

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
		click:function(e){
			e.preventDefault();
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
	//타이틀 한영 toggle
	function koTxt(thisTitle){
		var idx = thisTitle.parent().index();
		var koText = ['웅진코웨이 리뉴얼', '넥슨컴퓨터박물관 리뉴얼', 'LH토지주택공사 리뉴얼'];
		thisTitle.text(koText[idx]).css('color', '#ff3')
	}
	
	function enTxt(thisTitle){
		var idx = thisTitle.parent().index();
		var egText = ['woongjin coway;', 'nexon computer museum;', 'korea land & housing corp.(LH)'];
		thisTitle.text(egText[idx]).css('color', '#fff')
	}

	$('.web_list .title')
	.mouseenter(function(e){
		e.preventDefault();
		koTxt($(this));		
	})

	.mouseleave(function(e){
		e.preventDefault();
		enTxt($(this));	
	})
	
	.click(function(e){
		e.preventDefault();
		
		$(this).next('.list_wrap').slideToggle(600);
		$(this).toggleClass('titleOn');

		for(var i=0; i<$('.web_list .list_title').length; i++){
			//넥슨컴퓨터박물관
			if(i == 1){
				$(this).next('.list_wrap').find('.ncm_preview > span').stop().animate({
					'background-position-y' : '-1670px'
				}, 8000, function(){
					$(this).stop().animate({
						'background-position-y' : '0'
					}, 6000)
				})
			}
			//LH
			else if(i == 2){
				$('.lh_preview > span').stop().animate({
					'background-position-y' : '-680px'
				}, 8000, function(){
					$(this).stop().animate({
						'background-position-y' : '0'
					}, 6000)
				})
			}
		}
	})

	function mkoTxt(thisTitle){
		var idx = thisTitle.parent().index();
		var koText = ['이천세계도자축제 리뉴얼'];
		thisTitle.text(koText[idx]).css('color', '#ff3')
	}
	function menTxt(thisTitle){
		var idx = thisTitle.parent().index();
		var egText = ['icheon ceramic fastival'];
		thisTitle.text(egText[idx]).css('color', '#fff')
	}
	
	$('.mobile_list .title')
	.mouseenter(function(e){
		e.preventDefault();
		mkoTxt($(this));		
	})

	.mouseleave(function(e){
		e.preventDefault();
		menTxt($(this));
	})

	.click(function(e){
		e.preventDefault();
		
		$(this).next('.list_wrap').slideToggle(600);
		$(this).toggleClass('titleOn');

		for(var i=0; i<$('.mobile_list .list_title').length; i++){
			//이천세계도자축제
			if(i == 0){
				$(this).next('.list_wrap').find('.ich_preview > span').stop().animate({
					'background-position-y' : '-1650px'
				}, 8000, function(){
					$(this).stop().animate({
						'background-position-y' : '0'
					}, 6000)
				})
			}
		}
	})

	//드래그
	$('.demo').backgroundDraggable({axis:'y'});

	//original here closed
	$('.original').click(function () {
		var txt = $(this).text();
		$(this).text(txt == 'original page is here.' ? 'original page closed.' : 'original page is here.');

		if(txt == 'original page is here.'){
			$(this).next('.original_img').fadeIn(600);
		}else{
			$(this).next('.original_img').fadeOut(600);
		}
	})

	//반응형 미리보기
	$('.co_list .res_preview').click(function(e){
		e.preventDefault();
		var idx=$(this).index();
		$('.co_preview span').removeClass('previewOn');
		$('.co_preview span:eq('+idx+')').addClass('previewOn');
	})


	/*---------------profile----------------------*/
	$('.profile_etc > li').click(function(){
		$(this).children('ul').slideToggle(600)
	})


})