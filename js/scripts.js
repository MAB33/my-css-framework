$( document ).ready(function() {
   // DISMISS ALERTS BY CLICKING
	$(".dismissAlert").on('click',function(){
		$(this).closest(".alert").slideUp(800);
	});
	// AUTO FADES OUT NOTICES
	$(".demo").on('click',function(){
		$("#alert-green").delay(1300).slideUp(800);
	});

	$(".reset").on('click',function(){
		$(".alert").slideDown(800);
	});


	//*****LINK HOVER EFFECTS************
	$('.navLink').hover(function(){
	    $(this).addClass('navLink2', 500);
	}, function(){
	    $(this).removeClass('navLink2', 500);
	});

	$('.button3-standard').hover(function(){
	    $(this).addClass('button3-standard-hover', 500);
	}, function(){
	    $(this).removeClass('button3-standard-hover', 500);
	});

	$('.button3-green').hover(function(){
	    $(this).addClass('button3-green-hover', 500);
	}, function(){
	    $(this).removeClass('button3-green-hover', 500);
	});

	$('.button3-red').hover(function(){
	    $(this).addClass('button3-red-hover', 500);
	}, function(){
	    $(this).removeClass('button3-red-hover', 500);
	});
	
	
});

