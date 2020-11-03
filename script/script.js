var Top = 0;

$(window).scroll(function(){
	Top = parseInt($(this).scrollTop());
 	if(Top > 200){ // <= 효과를 주기위한 조건
          $("#pc_under_header").addClass('on'); //css로 효과를 주거나
          $("#pc_header").removeClass('on'); //css로 효과를 주거나
    }
    else{ // <= 효과를 주기위한 조건
        $("#pc_under_header").removeClass('on'); //css로 효과를 주거나
        $("#pc_header").addClass('on'); //css로 효과를 주거나
  }
});



function AutoSlider2_left(){
	
	$("#subSlideMove").animate({'margin-left' : '-645px'}, 2500, 'swing', function(){
		
		$("#subSlideMove>li:first").insertAfter("#subSlideMove>li:last");
        $(this).css({'margin-left' : 0});
	});
	$(this).clearQueue();
}
setInterval(AutoSlider2_left, 5000);

function AutoSlider2_right(){
	
	$("#subSlideMove").css({'left' : '-645px'});
	$("#subSlideMove>li:last").insertBefore($("#subSlideMove>li:first"));
	$("#subSlideMove").animate({'left' : '0'}, 2500, 'swing', function(){
		
	});
	$(this).clearQueue();
}