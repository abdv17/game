$(document).ready(function(){
    
        
        $('div').draggable();
		
		
        $('div').click(function(){
			
			$('div').animate({left:'210px'});
			$('div').animate({top:'210px'});
			$('div').css("border-radius","10px");
			
			
			for (var i = 0;i < 5;i++){
				$(".first,.fifth,.third,.seventh").animate({top:'+=200px'});
				$(".first,.fifth,.third,.seventh").animate({top:'-=200px'});
				$(".first,.fifth,.third,.seventh").css("background-color", "red");
				$(".second,.fourth,.sixth,.eighth").animate({top:'-=200px'});
				$(".second,.fourth,.sixth,.eighth").animate({top:'+=200px'});
				$(".second,.fourth,.sixth,.eighth").css("background-color", "blue");
				}
		});
       $('p').dblclick(function(){
			
			$('p').css("background-color","pink");
		});
    
    $('p').click(function(){
			
			$('p').css("background-color","red");
		});
		$(".first").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
	});
	$(".second").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "green");
	});
	$(".third").hover(function(){
    $(this).css("background-color", "black");
    }, function(){
    $(this).css("background-color", "magenta");
	});
	$(".fourth").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "brown");
	});
	$(".fifth").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
	});
	$(".sixth").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "green");
	});
	$(".seventh").hover(function(){
    $(this).css("background-color", "black");
    }, function(){
    $(this).css("background-color", "magenta");
	});
	$(".eighth").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "brown");
	});
    });