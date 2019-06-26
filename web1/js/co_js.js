$(function(){

	$('a').on('click mouseenter focus', function(e){
		e.preventDefault();
	})

	/*******gnb********/
	//mouseenter/leave
	$('.gnb_1depth li').on('click mouseenter focus', function(){
		$(this).children('.gnb_2depth').show();
	})
	
	$('.gnb_1depth li').on({
		mouseleave:function(){
			$(this).children('.gnb_2depth').hide();
		}						
	})				
		
	$('.gnb_2depth').on({
		mouseenter:function(){
			$(this).show();
		},
		mouseleave:function(){
			$(this).hide();
		}						
	})

	//640px 이하 햄버거
	$('.gnbBtn').click(function(){
		$(this).children('a').toggleClass('boxOn');
		
		if($(this).children('a').hasClass('boxOn')){
			$('#gnbWrap').css({
				'display' : 'block'
			})
			$('.gnb_2depth').hide();
			$('.gnb_1depth').click(function(){
				$(this).children('.gnb_2depth').toggle();
			})
		}else{
			$('#gnbWrap').css({
				'display' : 'none'
			})
		}
	})


	/*******banner*******/
	
	//탭메뉴
	var currentNum = 0;
	var koTxt = ['정수기', '공기청정기', '비데/클린워셔', '매트리스', '주방/리빙'];
	var enTxt = ['Water Care', 'Air Care', 'Body Care', 'Sleep Care', 'Living Care'];
	
	$('.co_tabmenu a:eq('+currentNum+')').text(koTxt[currentNum]);
	$('.co_tabmenu a').on('click focus', function(e){
		e.preventDefault();
		$('#shadow').remove();
		$('.popUp').hide();

		selected($(this).index());
	})
	
	function selected(onNum){
		if(currentNum != onNum){
			$('.co_banner > ul > li').removeClass('tabOn');
			$('.co_banner > ul > li:eq('+onNum+')').addClass('tabOn');
			$('.co_tabmenu a').removeClass('tabOn');
			$('.co_tabmenu a:eq('+onNum+')').addClass('tabOn');
		
			$('.co_tabmenu a:eq('+onNum+')').text(koTxt[onNum]);
			$('.co_tabmenu a:eq('+currentNum+')').text(enTxt[currentNum]);
			currentNum = onNum
		}
	}
	
	//팝업
	$('.banner_popup').on('click', function(e){
		e.preventDefault();
		$('#shadow').remove();
		$('.banner_popup').parent().next('.popUp').hide();
		$(this).parent('a').parent('.banner_zone').append('<div id="shadow"></div>');
		$('#shadow').css({
			width:'100%',
			height:'100%',
			position:'absolute',
			top:0,
			left:0,
			'background-color':'rgba(0,0,0,0.7)'
		})
		$(this).parent().next('.popUp').fadeIn(600);
		$(this).parent().next('.popUp').children('a').click(function(e){
			e.preventDefault();
			$('#shadow').remove();
			$(this).parent().hide();
		})
	})


	/**********resize & scroll************/
	
	var cont = $('#container').offset().top;
		cont_left = $('#container').offset().left;

	function gnbposition(){
		cont_left = $('#container').offset().left;
		$('.gnb_wrap').css({
			'position' : 'fixed',
			top : 0,
			left : cont_left
		})
	}

	//resize event
	$(window).resize(function(){
		cont = $('#container').offset().top;
		var tabBannerHeight = $('.co_banner > ul > li').height();
		var mainBannerHeight = $('.tabOn .banner_img img').height();
		var iocareBgHeight = $('.iocare_bg img').height();
		
		$('.iocare_wrap').css({
			'height' : iocareBgHeight
		})

		//탭메뉴 위치잡기
		if(cont>0 && $(this).width()>1024 || cont<0 && $(this).width()>1024){
			$('.co_main').css({
				'height' : tabBannerHeight
			})
			$('.co_tabmenu').css({
				top : '600px'
			})
		}else if(cont>0 && 640<$(this).width() && $(this).width()<=1024 || cont<0 && 640<$(this).width() && $(this).width()<=1024){
			$('.co_main').css({
				'height' : tabBannerHeight+60
			})
			$('.co_tabmenu').css({
				top : mainBannerHeight+60
			})
		}else if(cont>0 && $(this).width()<=640 || cont<0 && $(this).width()<=640){
			$('.co_main').css({
				'height' : tabBannerHeight*5
			})
		}
		else{
			$('.gnb_wrap').css({
				'position' : 'absolute',
				top : 0,
				left : 0
			})
		}

		//gnb fixed 위치잡기
		if(cont<0){
			gnbposition();
		}else{
			$('.gnb_wrap').css({
				'position' : 'absolute',
				top : 0,
				left : 0
			})
		}
		
		//모바일용 gnb
		if($(this).width()>640){
			$('#gnbWrap').css({
				'display' : 'block'
			})
		}else{
			$('.gnbBtn a').removeClass('boxOn');
			$('#gnbWrap').css({
				'display' : 'none'
			})
		}
	})
	$(window).resize().resize();
	
	//scroll event
	$('html, body').scroll(function(){
		cont = $('#container').offset().top;
		//gnb fixed
		if(cont<0){
			if($(this).width()>=1024){
				gnbposition();
			}else if(1024>$(this).width() && $(this).width()>=640){
				$('.gnb_wrap').css({
					'position' : 'fixed',
					top : 0,
					left : 0
				})
			}else{
				$('.gnb_wrap').css({
					'position' : 'absolute',
					top : 0,
					left : 0
				})
			}
		}else{
			$('.gnb_wrap').css({
				'position' : 'absolute',
				top : 0,
				left : 0
			})
		}

	//ioCare animate
		var ioCare = $('.co_iocare').offset().top;
		if($(this).scrollTop() > ioCare - ($(window).height()/3)){
			$('.iocare_txt').animate({
				'opacity' : '1'
			}, 1000)
			$('.iocare_step').animate({
				right:0
			}, 1300)
		}

	//story animate
		var story = $('.co_story').offset().top;
		if($(this).scrollTop() > story - ($(window).height()/3)){
			$('.co_story_list li').css({
				'transform':'translateY(0)',
				'opacity':'1'
			}, 1000)
		}
	})
})