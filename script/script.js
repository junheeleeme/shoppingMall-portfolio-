var Top = 0;

$(window).scroll(function(){
	Top = parseInt($(this).scrollTop());
	console.log(Top);
 	if(Top > 200){ // <= 효과를 주기위한 조건
          $("#pc_under_header").addClass('on'); //css로 효과를 주거나
          $("#pc_header").removeClass('on'); //css로 효과를 주거나
    }
    else{ // <= 효과를 주기위한 조건
        $("#pc_under_header").removeClass('on'); //css로 효과를 주거나
        $("#pc_header").addClass('on'); //css로 효과를 주거나
  }
	if(Top >300){
		$("#intro_1").css({'top' : '100px',
						  			'opacity' : '1'});
	}
	if(Top >330){
		$("#intro_2").css({'top' : '180px',
						  			'opacity' : '1'});
	}
	if(Top >750){
	$("#topRank").css({'padding-top' : '0',
						 				'opacity' : '1'});
	}
});



$("#left_arrow").click(function(){
	AutoSlider2_left();
})
$("#right_arrow").click(function(){
	AutoSlider2_right();
})

let AutoSlide = setInterval(AutoSlider2_left, 5000);


function AutoSlider2_left(){
	
		if(slider2_toggle == true){
		slider2_toggle = false;
		$("#subSlideMove").animate({'margin-left' : '-645px'}, 1000, 'swing', function(){
		$("#subSlideMove>li:first").insertAfter("#subSlideMove>li:last");
        $(this).css({'margin-left' : 0});
			slider2_toggle = true;	
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
	clearInterval(AutoSlide);
	
})
$("#subSlideFrame").mouseleave(function(){
	AutoSlide = setInterval(AutoSlider2_left, 5000);
})

