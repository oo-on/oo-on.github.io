$(function(){
	/*value 삭제 */
	/*검색창 */
	$('#search').focus(function(){			
		if($(this).val() == "검색어를 입력하세요" ){
			$('#search').val(' ') ;
		}
	})
	$('.searchbtn').click(function(e){
		e.preventDefault() ;
		if($('#search').val() == "검색어를 입력하세요" || $('#search').val() == ' '){
			alert('검색어를 입력해주세요') ;
			$('#search').focus() ;
			$('#search').val(' ') ;
		}
	})

	/*sub2 이메일 */
	$('#userEmail_address').focus(function(e){
		e.preventDefault() ;
		if($(this).val() == '직접입력'){
			$(this).val(' ')
		}
	})

	$('#emailChoice').click(function(e){
		e.preventDefault() ;
		var emailAdd = $('option:checked', this).text() ;
		$(this).parents().find('#userEmail_address').val(emailAdd)
	})

	/*sub2 주소입력 */
	$('.addressTxt').focus(function(e){
		e.preventDefault() ;
		if($(this).val() == '나머지 주소를 입력하세요'){
			$(this).val(' ')
		}
	})


	/*gnb*/
	$('.gnb1depth > li').on({
		mouseenter:function(e){
			e.preventDefault() ;
			$(this).children('.gnb2depth').show();
		},
		mouseleave:function(e){
			e.preventDefault() ;
			$(this).children('.gnb2depth').hide();
		}						
	})				
		
	$('.gnb2depth').mouseleave(function(e){
		e.preventDefault() ;
		$(this).hide()
	})				

	/*하단배너 롤링*/
	var st = setInterval(auto, 3000) ;
	function auto(){
		$('.bannerImg').animate({
			left : '-215px'
		},2000, function(){
			$('.bannerImg').append($('.bannerImg li:first')) ;
			$('.bannerImg').css('left', '0px')
		})
	}

	$('.ub_next').click(function(e){
		e.preventDefault() ;
		clearInterval(st) ;
		auto() ;
	})

	$('.ub_prev').click(function(e){
		e.preventDefault() ;
		clearInterval(st) ;
		$('.bannerImg').prepend($('.bannerImg li:last')) ;
		$('.bannerImg').css('left', '-215px')
		$('.bannerImg').animate({
			left : 0
		},2000)		
	})

	/*메인배너 롤링*/
	cycleMenu() ;
	
})

/*메인배너 롤링*/
var st ;
st = setInterval(auto, 6000);

function auto(){
	var idx = $('.visual_onoff li a.on').parent().index() +1 ;
	if(idx > $('.visual_onoff li').length-1){
		idx = 0
	}
	changeItem(idx)
}

function cycleMenu(){
	$('.main1_banner a:gt(0)').hide() ;

	$('.visual_onoff li').click(function(e){
		e.preventDefault() ;
		if($(this).children('a').hasClass('on') == false){
			if($('.banner_btn_stop').hasClass('pause') == true){
				clearInterval(st) ;
				st = setInterval(auto, 6000)
			}
		}
		changeItem($(this).index()) ;
	})

	$('.banner_btn_stop').click(function(e){
		e.preventDefault() ;
		if($(this).hasClass('pause') == true){
			clearInterval(st) ;
			$(this).removeClass('pause') ;
			$(this).addClass('play') ;
		}else{
			st = setInterval(auto, 6000)
			$(this).removeClass('play') ;
			$(this).addClass('pause') ;
		}
	})
}

function changeItem(indexNum){
	if($('.main1_banner a.on').is(':animated') == false){
		$('.visual_onoff a.on').removeClass('on') ;
		$('.visual_onoff a:eq('+indexNum+')').addClass('on') ;

		var bannerWidth = 785 ;	
		
		$('.main1_banner a:eq('+indexNum+')').css({
			left : bannerWidth + 'px',  display : 'block'
		})

		$('.main1_banner a.on').animate({	
			left : - bannerWidth + 'px'
		}, 5000, function(){
			$(this).removeClass('on') ;
			$(this).hide() ;
		})

		$('.main1_banner a:eq('+indexNum+')').animate({	
			left : 0 + 'px'
		}, 5000, function(){
			$(this).addClass('on') ;
		})
	}
}


