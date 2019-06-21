$(function(){
	/*gnb*/
	$('.menubox').click(function(){
		$(this).toggleClass('boxOn');
		if($(this).hasClass('boxOn')){
			$('.nav_menu').animate({
				right : 0
			}, 600)
		}else{
			$('.nav_menu').animate({
				right : '-999px'
			}, 600)
		}
	})

	/*gellary*/
	$('.ich_gallery_img').bxSlider({
		auto: true,
		pager: true,
		speed: 400
	})

	/*notice*/
	$('.ich_tabmenu_wrap h2').click(function(){
		$('.ich_tabmenu_wrap h2').addClass('off');
		$(this).removeClass('off');
		
		$('.ich_tabmenu_wrap h2').next().css('display', 'none');
		$(this).next().css('display', 'block');
	})

	/*banner*/
	var st = setInterval(auto, 4000) ;
	
	function auto(){
		$('.ich_banner_wrap ul').animate({
			left : '-156px'
		},2000, function(){
			$('.ich_banner_wrap ul').append($('.ich_banner_wrap li:first')) ;
			$('.ich_banner_wrap ul').css('left', '0px')
		})
	}

	



	

})