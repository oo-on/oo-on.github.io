$(function(){

	/*페이지 스크롤*/
	var scrollEvent = false;
	var count = 0;
	
	$('html, body').on('mousewheel DOMMouseScroll', function(e){
		//window.addEventListener("mousewheel", {passive: true});
		//document.addEventListener('mousewheel', {passive: true});
		//e.preventDefault();
		var m = e.originalEvent.wheelDelta;
		var pageH = $('#container > section').height();
		
		if(m<0 && scrollEvent==false){
			if(count==0){
				scrollEvent=true;
				count=1;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;
			}
			else if(count==1){
				scrollEvent=true;
				count=2;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;

			}else if(count==2){
				scrollEvent=true;
				count=3;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;
			}else{
				count=3
			}
		}else if(m>0 && scrollEvent==false){
			if(count==3){
				scrollEvent=true;
				count=2;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;
			}
			else if(count==2){
				scrollEvent=true;
				count=1;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;

			}else if(count==1){
				scrollEvent=true;
				count=0;
				$('html, body').stop().animate({
					scrollTop : pageH*count
				},500)
				scrollEvent=false;
				return false;
			}else{
				count=0
			}
		}
	})

	/*페이지 네비게이션바*/
	var nav = $('.pageNum span') ;
	var cont = $('#container > section') ;
	var wscroll ;
	var pageNum ;
	var section ;
	var offset ;

	$(window).scroll(function(){
		wscroll = $(this).scrollTop() ;
		for(var i=0; i<cont.length; i++){
			if(wscroll >= cont.eq(i).offset().top  - $(window).height()/4){
				nav.removeClass('on') ;
				nav.eq(i).addClass('on') ;
			}
		}
	})

	$('.pageNum span').on({
		click:function(e){
			e.preventDefault() ;
			pageNum = $(this).index() ;
			section = $('#container > section').eq(pageNum) ;
			offset = section.offset().top ;
			
			$('html, body').animate({
				scrollTop:offset
			}, 500)
		}
	})


	/*scroll arrow*/
	function scrollPage(targetPage){
		var target = $(targetPage.attr('href')) ;
			if(target.length){										
				$('html, body').animate({
					scrollTop : target.offset().top
				}, 600)
			}
	}
	$('a.scroll_arrow[href^="#"]').on({
		click:function(e){
			e.preventDefault() ;
			scrollPage($(this));
		}
	})

	$('a.scrolltop_arrow[href^="#"]').on({
		click:function(e){
			e.preventDefault() ;
			scrollPage($(this));
		}
	})

	$('.header h1').click(function(){
		$('html, body').animate({
			scrollTop : $('#mainWrap').offset().top
		}, 600)
		count=0
	})


	/*gnb*/
	$('.gnb_menu').click(function(e){
		e.preventDefault() ;
		
		if($(this).children('span').hasClass('off') == true){
			$('#gnbWrap').animate({
				top : 0
			},800) ;
			$(this).children('span').removeClass('off') ;
			$(this).children('span').addClass('on') ;
		}else{
			$('#gnbWrap').animate({
				top : '-2000px'
			},800) ;

			$(this).children('span').removeClass('on') ;
			$(this).children('span').addClass('off') ;
		}
	})



/**********************1p*****************************/

	/*이용안내 & 오시는길*/
	$('.main_intro h3').on({
		click:function(e){
			e.preventDefault() ;

			$('.main_intro h3').css('background-color', 'rgba(0,0,0,0)') ;
			$(this).css('background-color', '#00f') ;
			$('.main_xline').animate({
				right : 0
			}, 1000)

			if($(this).index() == 1){
				$('.main_map').css('left', '-2000px')
				$('.main_info').animate({
					left : 0
				}, 1000)
			}else if($(this).index() == 2){
				$('.main_info').css('left', '-2000px')
				$('.main_map').animate({
					left : 0
				}, 1000)
			}
		}
	})

	$('.main_xline').click(function(){
		$(this).animate({
			right:'-1000px'
		}, 1000)
		$('.main_info').animate({
			left : '-2000px'
		}, 1000)
		$('.main_map').animate({
			left : '-2000px'
		}, 1000)
		$('.main_intro h3').css('background-color', 'rgba(0,0,0,0)') ;
	})



/**********************2p*****************************/

	/*페이지 열고닫기*/
	$('.wind_1996').click(function(){
		$('.apple_1976').css('display', 'none') ;
		$('.apple_close').css('z-index', '0') ;
		$(this).animate({
			left : '67%'
		}, 500)
		$('.wind_close').animate({
			right : '-1%'
		}, 1000)
		$('.wind_wrap').animate({
			left : '-21%'
		}, 1000)
	})
	
	$('.apple_1976').click(function(){
		$('.wind_1996').css('display', 'none') ;
		$('.apple_close').css('z-index', '2') ;
		$('.wind_close').css('z-index', '0') ;
		$(this).animate({
			right : '67%'
		}, 500)
		$('.apple_close').animate({
			left : '-1%'
		}, 1000)
		$('.apple_wrap').animate({
			right : '-21%'
		}, 1000)
	})

	$('.wind_xbtn').click(function(){
		$('.wind_1996').animate({
			left : '25%'
		}, 500)
		$('.wind_close').animate({
			right : '49%'
		}, 1000)
		$('.wind_wrap').animate({
			left : '-3000px'
		}, 1000)
		$('.apple_1976').css('display', 'block') ;
	})

	$('.apple_xbtn').click(function(){
		$('.apple_1976').animate({
			right : '25%'
		}, 500)
		$('.apple_close').animate({
			left : '49%'
		}, 1000)
		$('.apple_wrap').animate({
			right : '-3000px'
		}, 1000)
		$('.wind_close').css('z-index', '2') ;
		$('.wind_1996').css('display', 'block') ;
	})



/**********************3p*****************************/

	$('.opencall_mainYear a:lt(3)').click(function(e){
		e.preventDefault() ;
		$('.opencall_main > h2').fadeOut(600) ;
		var num = $(this).index() ;
		$('.opencall_wrap article').fadeOut(600)
		$('.opencall_wrap article:eq('+num+')').fadeIn(600)
	})
	$('.opencall_mainYear a:eq(3)').click(function(e){
		e.preventDefault() ;
		$('.opencall_wrap article').fadeOut(600) ;
		$('.opencall_main > h2').fadeIn(600)
	})



/**********************4p*****************************/

	$('.program_title').click(function(){
		$('.newsWrap').fadeOut(600) ;
		$('.news_title > img').attr('src', $('.news_title > img').attr('src').replace('_on.png', '_off.png')) ;
		$('.news_title a img').attr('src', $('.news_title a img').attr('src').replace('_on.png', '_off.png')) ;
		$('.program_title img').attr('src', $('.program_title img').attr('src').replace('_off.png', '_on.png')) ;
		$('.programWrap').fadeIn(600) ;
	})
	$('.news_title').click(function(){
		$('.programWrap').fadeOut(600) ;
		$('.program_title img').attr('src', $('.program_title img').attr('src').replace('_on.png', '_off.png')) ;
		$('.news_title > img').attr('src', $('.news_title > img').attr('src').replace('_off.png', '_on.png')) ;
		$('.news_title a img').attr('src', $('.news_title a img').attr('src').replace('_off.png', '_on.png')) ;
		$('.newsWrap').fadeIn(600) ;
	})

	})


/*구글지도*/
	function initialize(){
		var Y_point = 33.471858;
		var X_point = 126.484924;

		var zoomLevel = 15;

		var markerTitle = "넥슨컴퓨터박물관";
		var markerMaxWidth = 300;

		// 말풍선 내용
		var contentString = '<div>' + '<h2>넥슨컴퓨터박물관</h2>'+ '</div>' ;

		var myLatlng = new google.maps.LatLng(Y_point, X_point);
		var mapOptions = {
			zoom: zoomLevel,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: markerTitle
		});

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: markerMaxWidth
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}











