$(document).ready(() => {

	//Toggle burger menu
	$('.burgermenu').on('click', () => {
		$('body').toggleClass('lock-scroll');
		$('nav div:first').toggleClass('preheadermobile');
		$('nav div:first').toggleClass('preheader');
		$('nav div:last').toggleClass('navigationmobile');
		$('nav div:last').toggleClass('navigation');
		
	});

	var $menu = $('nav');

	//Close burger menu by clicking outside the menu, but not inside 
	$(document).mouseup(function (e) {
		if (!$('nav').is(e.target) && $('nav').has(e.target).length === 0) {
		    $('nav div:first').removeClass('preheadermobile');
			$('nav div:last').removeClass('navigationmobile');
			$('nav div:first').addClass('preheader');
			$('nav div:last').addClass('navigation');
			$('body').removeClass('lock-scroll');
		}
	});

	//Close burger menu when the window is wider than 899px
	var width = $(window).width()

	$(window).on('resize', function(){
    	var win = $(this);
    	if (win.width() > 899) {
    		$('nav div:first').removeClass('preheadermobile');
			$('nav div:last').removeClass('navigationmobile');
			$('nav div:first').addClass('preheader');
			$('nav div:last').addClass('navigation');
			$('body').removeClass('lock-scroll');
    	}
	});

	//In the file input button, change button name to the file you chose
	$("[type=file]").on("change", function(){

		var file = this.files[0].name;
  		
  		var dflt = $(this).attr("placeholder");
  
  		if($(this).val()!=""){

  			$(this).next().text(file);
 		} else {
    		$(this).next().text(dflt);
  		}		
	});

	//Hide upload and send and show successful entry when clicking send
	$('#sendbutton').on('click', () => {
		$('#sendbutton, #label').hide(0);
		$('.hidden-button').show(0);
		
	});

	//Scroll up when clicking the arrow up


	$('#scroll-up').on('click', () => {
			$('html, body').animate({scrollTop:0},300);
	});
	    
	$(document).on('scroll', (event) => {
	    
	    var position = $('html, body').scrollTop();
	        
	    if (position === 0) {

	      $('#scroll-up').hide();

	    } else {

	      $('#scroll-up').fadeIn();

	    };

	});
}); 
