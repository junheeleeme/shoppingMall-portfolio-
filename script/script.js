var Top = 0;

$(window).scroll(function(){
	Top = parseInt($(this).scrollTop());
    console.log(Top);
 	if(Top > 160){ // <= 효과를 주기위한 조건
          $("#pc_under_header").addClass('on'); //css로 효과를 주거나
          $("#pc_header").removeClass('on'); //css로 효과를 주거나
    }
    else{ // <= 효과를 주기위한 조건
        $("#pc_under_header").removeClass('on'); //css로 효과를 주거나
        $("#pc_header").addClass('on'); //css로 효과를 주거나
  }
	if(Top >300){
		$("#intro_1").css({'top' : '70px',
						  			'opacity' : '1'});
	}
	if(Top >330){
		$("#intro_2").css({'top' : '150px',
						  			'opacity' : '1'});
	}
	if(Top >750){
	$("#topRank").css({'padding-top' : '0',
						 				'opacity' : '1'});
	}
});





$("#downBtn").click(function(){
	var introCopy = $("#introCopy").offset().top;
    window.scrollTo({top : introCopy, behavior: 'smooth'});
    
})
setInterval(spanUpDown, 2000);

function spanUpDown(){
$("#downBtn").animate({ 'bottom' : '30%'}, 1500, function(){
    $(this).css({'bottom' : '2%'});
});
}


/* 메인 슬라이드쇼 */

var msIdx_lgth = $("#mainSlide>li").length;
var start = 1;

function AutoRun(){
    if(start == msIdx_lgth){
            start = 0;    
    }
    $("#mainSlide>li").eq(start).addClass('on').siblings().removeClass('on');
    start++;  
}
var mainslideAuto = setInterval(AutoRun, 5000);


/* 메인 슬라이드쇼 */

/*  Special Something 슬라이드쇼   */
$("#left_arrow").click(function(){
	AutoSlider2_left();
})
    
$("#right_arrow").click(function(){
	AutoSlider2_right();
})

let ssSlide_Auto = setInterval(AutoSlider2_left, 4000);

function AutoSlider2_left(){
	
		if(slider2_toggle == true){
		slider2_toggle = false;
		$("#subSlideMove").animate({'margin-left' : '-645px'}, 1000, 'swing', function(){
		$("#subSlideMove>li:first").insertAfter("#subSlideMove>li:last");
			slider2_toggle = true;	
        $(this).css({'margin-left' : 0});
	});	
 		}
}
    
let slider2_toggle = true;

function AutoSlider2_right(){
	if(slider2_toggle == true){
		slider2_toggle = false;
	$("#subSlideMove").css({'left' : '-645px'});
	$("#subSlideMove>li:last").insertBefore($("#subSlideMove>li:first"));
		
	$("#subSlideMove").animate({'left' : '0'}, 1000, 'swing', function(){
			slider2_toggle = true;	
	   });
	}	
}
    
    
$("#subSlideFrame").mouseenter(function(){
	clearInterval(ssSlide_Auto);
})
    
$("#subSlideFrame").mouseleave(function(){
	ssSlide_Auto = setInterval(AutoSlider2_left, 4000);
})
/* detail.html */

$(".product_detail").click(function(){
    const pro_de = $("#detail").offset().top;
    window.scrollTo({top : pro_de - 130, behavior: 'smooth'});
})

$(".shopping_guide").click(function(){
    const guide = $("#guide").offset().top;
    window.scrollTo({top : guide - 130, behavior: 'smooth'});
})

$(".review").click(function(){
    const review = $("#review").offset().top;
    window.scrollTo({top : review - 130, behavior: 'smooth'});
})

$(".qna").click(function(){
    const qna = $("#qna").offset().top;
    window.scrollTo({top : qna - 130, behavior: 'smooth'});
})

/* detail.html */

