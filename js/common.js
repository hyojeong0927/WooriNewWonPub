$(document).ready(function(){	
	/* mobile check */
	var checkM = navigator.userAgent.toLowerCase();		
	if( checkM.indexOf('android') > -1 ){
		// console.log('android')
	} else if ( checkM.indexOf('iphone') > -1 || checkM.indexOf('ipad') > -1){
		// console.log('iphone')
		
		$('.btn-box-fixed').addClass('ios');
	} else {
		// console.log('more')
	}
	
	/* toggle slide */	
	if( $('.btn-sel, .btn-camera, .btn-search, .btn-calendar').attr('data-view') ){
		$('.btn-sel, .btn-camera, .btn-search, .btn-calendar').click(function(){		
			var toggleId = $(this).attr('data-view');			
			$('.' + toggleId).slideToggle(300);
		});
		
		$('.toggle-box .btn-close, .btn-close2').click(function(){
			//$('.toggle-box').slideUp(300);
			$(this).closest('.toggle-box').slideToggle(300);
		});
	}
	
	/* drop down 아코디언 */
	function dropBtn(){
		$(this).toggleClass('on').css({transition: 'all 0.2s ease'});
		$('.chk-list-box').slideToggle('fast');
	};	
	$(document).on('click', '.agree-open', dropBtn);

    function dropBtn02(){
		$(this).toggleClass('on').css({transition: 'all 0.2s ease'});
		$('.chk-list-box02').slideToggle('fast');
	};	
	$(document).on('click', '.agree-open02', dropBtn02);
	
	function dropList(){
		$(this).toggleClass('on').css({transition: 'all 0.2s ease'});
		$(this).closest('.view-box').siblings('.list-view').slideToggle('fast');		
	};	
	$(document).on('click', '.btn-list', dropList);
	
	function dropList02(){
		$(this).toggleClass('on').css({transition: 'all 0.2s ease'}).next('.view-box').slideToggle(300);
		$(this).closest('.list-box').siblings('.list-box').find('.btn-list02').removeClass('on').next('.view-box').slideUp(300);	
	};	
	$(document).on('click', '.btn-list02', dropList02);
	
	if( $('.ag-box .btn-view') ){
		$('.ag-box .btn-view').click(function(){		
			$(this).toggleClass('on').css({transition: 'all 0.2s ease'});
			$(this).next('.ag-info').slideToggle('fast');
		});
		
		$('.ag-box .inp-chk02 input').click(function(){
			$(this).closest('.inp-chk02').siblings('.btn-view').toggleClass('on').css({transition: 'all 0.2s ease'});
			$(this).closest('.inp-chk02').siblings('.ag-info').slideToggle('fast');
		});
	}
	
	/* 한도조회결과 > 대출신청금액 toggle */
	function sumView(){
		$(this).closest('.prod-info').next('.tbl-input').slideToggle(300);
	};	
	$(document).on('click', '.prod-info .btn-box', sumView);
	
	/* input + 취소 버튼 (한도조회결과 > 대출신청금액, 주소 검색) */
	if( $('.b-view').length ){		
		$('.b-view .btn-cancel').hide();
		
		/* 취소 버튼 show,hide */
		$('.b-view input').focus(function(){
			$(this).next('.btn-cancel').show();
		});
		
		$('.b-view input').blur(function(){
			$(this).next('.btn-cancel').hide();
			
			if( !$(this).val()=='' ){
				$(this).next('.btn-cancel').show();
			}
		});	
		
		/* 취소 버튼 클릭 시 값 reset */ 
		$('.b-view .btn-cancel').click(function(){
			$(this).prev('input').val('');
		});
	}
	
	if( $('.inp-cancel').length ){
		$('.inp-cancel .btn-cancel').click(function(){
			$(this).prev('input').val('');
		});
	}
	
	/* 주소 검증 */
	function addrView(){
		$(this).next('.addr-list').slideToggle(300);
	};	
	$(document).on('click', '.addr-box .btn-box', addrView);
	
	/* Tab */
	function tabMenu(){
		var tabId = $(this).attr('data-tab');

		$(this).addClass('on').siblings('li').removeClass('on');
		$('.' + tabId).addClass('on').siblings('div').removeClass('on');
	};	
	$(document).on('click', '.btn-tab', tabMenu);
	
	/* lnb */
	function lnbOpen(){
		$('div.lnb-box').addClass('open');
		//$('div.ft-btns').hide();
		//$('html, body').scrollTop(0);
		//$('body').css('overflow','hidden');
	}
	$(document).on('click', '.ft-btns .btn-menu', lnbOpen);

	function lnbClose(){
		$("div.lnb-box").removeClass("open");
		//$('div.ft-btns').show();
		//$('body').css('overflow','visible');
	}
	$(document).on('click', '.lnb-box .btn-close', lnbClose);

	function mnMove(e){
		e.preventDefault();
		var menuId = $(this).attr('data-menu');
		var menuBox = $('.' + menuId).offset();
		var offsetTop = menuBox.top - $('.user-box').height();

		$(this).addClass('on').siblings('li').removeClass('on');
		$('html, body').animate({scrollTop: offsetTop}, 500);
	}
	$(document).on('click', '.mn-btns .btn', mnMove);

	/* 키패드 */
	function kpView(){
		$('.kp-wrap').hide();
	};	
	$(document).on('click', '.kp-wrap .btn-close', kpView);
	
	/* switch button */	
	if( $('.switch-box').length ){
		$('.switch input').click(function(){
			$('.switch-box .txt-chk').removeClass('on').text('Off');
			
			if($('.switch input').is(':checked') == true){				
				$('.switch-box .txt-chk').addClass('on').text('On');
			}
		});
	}
	
	/* 마케팅 정보 수신 동의 */
	if( $('.mkt-chk').length ){
		$('.mkt-chk .rdo-box input:first').attr("checked", true);
		
		$('.mkt-chk .switch input').click(function(){			
			$('.mkt-chk .rdo-box').slideToggle(100);			
			$('.mkt-chk .rdo-box input:first').attr("checked", true);
			
			if($('.mkt-chk .switch input').is(':checked') == false ){				
				$('.mkt-chk .rdo-box input').attr("checked", false)
			}
		});
	}
	
	/* toast Message */
	function tMsg(e){
		e.preventDefault();
		$('.toast-msg').fadeIn(400).delay(1300).fadeOut(400);			
	}
	$(document).on('click', '.btn-msg', tMsg);	
	
	/* 상품 소개 > 상환 방법 */
	if( $('.way-box').length ){			
		var wayOffset = $('.way-box').offset();
		
		$(window).scroll(function(){
			if ( $(document).scrollTop() > wayOffset.top - 500 ) {				
				for (var i=0; i<=5; i++) {
					if( $('.way-box .type01').length ){
						$('.way-box .type01 .day').eq(i).delay(i*600).addClass('on', {duration:900});
						$('.way-box .type01 .day span').eq(i).delay(i*500).addClass('on', {duration:800});
					}
					
					if( $('.way-box .type02').length ){
						$('.way-box .type02 .day').eq(i).delay(i*600).addClass('on', {duration:900});
						$('.way-box .type02 .day .num').eq(i).delay(i*600).addClass('on', {duration:900});
						$('.way-box .type02 .day .num span').eq(i).delay(i*900).addClass('on', {duration:1000});
					}
					
					$('.way-box .way').eq(i).delay(i*600).animate({'opacity':'1'},1400);
				}
			} else if ( $(document).scrollTop() == 0 ){
				$('.way-box .type01 .day, .way-box .type01 .day span').finish().removeClass('on');
				$('.way-box .way').finish().animate({'opacity':'0'},550);
			}
		});
	}
	
	/* 휴대폰 인증 */
	function auView(){		
		if( $('.all-chk-box input').is(':checked') ){
			$(this).next('ul').slideUp(300);			
		} else {
			$(this).next('ul').slideDown(300);
		}
	};	
	
	/* input focus 시 하단 버튼 숨기기 */
	if( $('.btn-box-fixed').length ){
		$('input[type="text"]').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
		
		$('input[type="number"]').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
		
		$('input[type="password"]').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
		
		$('input[type="tel"]').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
		
		$('input[type="email"]').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
		
		$('select').on({
			focus : function(){
				$('.btn-box-fixed .btn-box').hide();
			},
			blur : function(){
				$('.btn-box-fixed .btn-box').show();
			}
		});
	}
	
	/* (web) 하단 고정 버튼이 있을 경우 */
	if( $('.content .btn-box-fixed').length ){
		$('footer.footer').addClass('fix-btn')
	}
	
	/* date picker */
	$( "#datepicker" ).datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월'],
		monthNamesShort: ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		showButtonPanel: true,
		changeYear:true,
		changeMonth:true,
		showOtherMonths:true,
		selectOtherMonths:true,
		showAnim: 'slideDown',
		showOn:'button',
		yearRange:'-100:+4',
		minDate: 0,
		yearSuffix: "년"
	});
});

/* popup */
var LayerPopup = {		
	open:function(obj){	
		var layerObj = $('.'+obj);
		
		layerObj.fadeIn(500);
		layerObj.attr('tabindex',1);
		layerObj.css('z-index','10000');
	},	
	close:function(){			
		$('div.layer-popup').fadeOut(300);
		$('div.layer-popup').removeAttr('tabindex');
	},
};

/* input focus 시에 스타일 변경 */
$(document).ready(function() {
    // input 텍스트 상자에 포커스가 들어갈 때
    $('.inp-box input[type="text"], .inp-line input[type="text"]').focus(function() {
        // 해당 input 상자의 부모 요소에 focus 클래스 추가
        $(this).closest('.inp-box, .inp-line').addClass('focus');
    });

    // input 텍스트 상자에서 포커스가 나갈 때
    $('.inp-box input[type="text"], .inp-line input[type="text"]').blur(function() {
        // 해당 input 상자의 부모 요소에서 focus 클래스 제거
        $(this).closest('.inp-box, .inp-line').removeClass('focus');
    });
});

/* 즐겨찾기 클릭 및 토스트 */
$(document).ready(function() {
	$('.btn-star').click(function(){
		$(this).toggleClass('on');		

		if ($(this).hasClass('on')) {
			$('.toast-msg.success').fadeIn(400).delay(1300).fadeOut(400);	
		} else {
			$('.toast-msg.cancel').fadeIn(400).delay(1300).fadeOut(400);
		};
	});

	$('.btn-box button').click(function() {
		$('.toast-msg.success').fadeIn(400).delay(1300).fadeOut(400);	
	})
});

/* 스위치 버튼 */
var btnSwitch = $(".btn-switch input[type='checkbox']");
btnSwitch.click(function(){
	$("p").toggle();
});

/* 주민등록번호 앞글자 6자리 제한 */
$(document).ready(function() {
	$('.residentNumber').on('input', function() {
		var value = $(this).val();
		// 숫자 이외의 문자를 제거
		value = value.replace(/[^0-9]/g, '');
		// 최대 6자리로 제한
		if (value.length > 6) {
			value = value.substring(0, 6);
		}
		$(this).val(value);
	});
});