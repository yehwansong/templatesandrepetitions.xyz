$( document ).ready(function() {


var h = window.innerHeight
var zooming=false
var timeout;
$('.white_button').click(function() { 
                $('.insta').addClass('insta_move')
                setTimeout(function(){
                $('.insta').addClass('transition0')
                $('.insta').removeClass('insta_move')
			  	},600);
                setTimeout(function(){
                $('.insta').removeClass('transition0')
			  	},610);
            }); 
$('.youtube_1').hover(function(){
	  $('.youtube_1').addClass("opacity_1");
	  $('.insta_1').addClass("opacity_0");
	  $('.insta_2').addClass("opacity_0");
	  $('.insta_3').addClass("opacity_0");
	  }, function(){
	  $('.youtube_1').removeClass("opacity_1");
	  $('.insta_1').removeClass("opacity_0");
	  $('.insta_2').removeClass("opacity_0");
	  $('.insta_3').removeClass("opacity_0");
});
	  $('.hovered_button_1').removeClass("opacity_0");
$(".hovered_button_1").hover(function(){
	  $('.hovered_button_1').removeClass("opacity_0");
	  }, function(){
});
$(".hovered_button_2").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_2').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_2').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_3").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_3').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_3').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_4").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_4').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_4').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_5").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_5').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_5').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_6").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_6').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_6').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_7").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_7').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_7').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_8").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_8').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_8').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_9").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_9').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_9').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_10").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_10').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_10').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_11").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_11').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_11').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
$(".hovered_button_12").hover(function(){
	  $('.hovered_button_1').addClass("opacity_0");
	  $('.hovered_button_12').removeClass("opacity_0");
	  }, function(){
	  $('.hovered_button_12').addClass("opacity_0");
	  $('.hovered_button_1').removeClass("opacity_0");
});
if(!zooming){
 timeout = setTimeout(function(){
  		screensaver()
  		zooming = true
  	},1000);
	}else{
		$('body').addClass('stop_zooming')
		$('body').removeClass('zooming_1');
		$('body').removeClass('zooming_2');
		$('body').removeClass('zooming_3');
		$('body').removeClass('zooming_1_or');
		$('body').removeClass('zooming_2_or');
		$('body').removeClass('zooming_3_or');
		$('.insta_4 img').removeClass('opacity')
		$('.insta_3 img').removeClass('opacity')
		$('.insta_post_2 img').removeClass('opacity')
		$('.insta_post_3 img').removeClass('opacity')
		setTimeout(function(){$('body').removeClass('stop_zooming');},10);
		zooming=false
	}
document.onmousemove = function(e){

clearTimeout(timeout);
if(!zooming){
 timeout = setTimeout(function(){
  		screensaver()
  		zooming = true
  	},1000);
	}else{
		$('body').addClass('stop_zooming')
		$('body').removeClass('zooming_1');
		$('body').removeClass('zooming_2');
		$('body').removeClass('zooming_3');
		$('body').removeClass('zooming_1_or');
		$('body').removeClass('zooming_2_or');
		$('body').removeClass('zooming_3_or');
		$('.insta_4 img').removeClass('opacity')
		$('.insta_3 img').removeClass('opacity')
		$('.insta_post_2 img').removeClass('opacity')
		$('.insta_post_3 img').removeClass('opacity')
		setTimeout(function(){$('body').removeClass('stop_zooming');},10);
		zooming=false
	}
}
// if(w/h<(1680/948) || w/h>(1680/900)){}else{
// }

function screensaver(){
	zooming=true
	$('.insta_4 img').addClass('opacity')
	$('.insta_3 img').addClass('opacity')
	$('body').addClass('zooming_1')
	$('body').addClass('zooming_1_or')
	setTimeout(function(){
		$('body').removeClass('zooming_1');
		setTimeout(function(){
			$('.insta_4 img').removeClass('opacity')
			$('.insta_3 img').removeClass('opacity')
			$('.insta_post_2 img').addClass('opacity')
			$('body').addClass('zooming_2');
			$('body').removeClass('zooming_1_or')
			$('body').addClass('zooming_2_or')
			setTimeout(function(){
				$('body').removeClass('zooming_2');
				setTimeout(function(){
					$('.insta_post_2 img').removeClass('opacity')
					$('.insta_post_3 img').addClass('opacity')
					$('body').addClass('zooming_3');
					$('body').removeClass('zooming_2_or')
					$('body').addClass('zooming_3_or')
					setTimeout(function(){
						$('body').removeClass('zooming_3');
						setTimeout(function(){
								$('.insta_post_3 img').removeClass('opacity')
								$('body').removeClass('zooming_3_or')
								zooming=false
						}, 21000)
					}, 21000)
				}, 21000)
			}, 21000)
		}, 21000)
	}, 21000)
}

	var w = window.innerWidth
	var h = window.innerHeight
    $(document).on('mousemove', function (e) {
    	if(e.pageX>0.2*w){
    		console.log('hey')
    		$('.hovered_button_1').removeClass('opacity_0')
    	}
		for (var i = jQuery('.insta_post_1>img').length; i >= 1; i--) {
			jQuery('.insta_post_1>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_1>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_post_2>img').length; i >= 1; i--) {
			jQuery('.insta_post_2>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_2>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_post_3>img').length; i >= 1; i--) {
			jQuery('.insta_post_3>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_3>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_post_4>img').length; i >= 1; i--) {
			jQuery('.insta_post_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_4>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_post_5>img').length; i >= 1; i--) {
			jQuery('.insta_post_5>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_5>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_post_6>img').length; i >= 1; i--) {
			jQuery('.insta_post_6>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_post_6>img').length * i))/w)})
		}


		for (var i = jQuery('.insta_1>img').length; i >= 1; i--) {
			jQuery('.insta_1>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_1>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_2>img').length; i >= 1; i--) {
			jQuery('.insta_2>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_2>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_3>img').length; i >= 1; i--) {
			jQuery('.insta_3>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_3>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_4>img').length; i >= 1; i--) {
			jQuery('.insta_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_4>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_5>img').length; i >= 1; i--) {
			jQuery('.insta_5>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_5>img').length * i))/w)})
		}
		for (var i = jQuery('.insta_6>img').length; i >= 1; i--) {
			jQuery('.insta_5>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.insta_5>img').length * i))/w)})
		}


		for (var i = jQuery('.youtube_4>img').length; i >= 1; i--) {
			jQuery('.youtube_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.youtube_4>img').length * i))/w)})
		}


		for (var i = jQuery('.insta_post_1>img').length; i >= 1; i--) {
			if(e.pageY>h/4){
			jQuery('.insta_post_1>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageY/2+400) - (h/jQuery('.insta_post_1>img').length * i))/h)})
			}
		}
		for (var i = jQuery('.youtube_4>img').length; i >= 1; i--) {
			jQuery('.youtube_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.pageX + 300) - (w/jQuery('.youtube_4>img').length * i))/w)})
		}

		// if(e.pageY > 0.2*h){
		// 	$('.hovered_button_1').addClass("opacity_0");
		// }else{
		// 	$('.hovered_button_1').removeClass("opacity_0");
		// }
			jQuery('.left').css({'opacity':(Math.abs(e.pageX - (w/2)))/(w/2)})
			jQuery('.top').css({'opacity':(Math.abs(e.pageX - (w/2)))/(w/2)})
    })
// jQuery('.temp_1').addClass('opacity')

$("body").mousemove(function(e){
      $('.cursor').css({'top': e.clientY, 'left': e.clientX});
});

$('.insta_1').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta_top1_o')
	$('body').addClass('click_insta_top')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta_top')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta_top1_o')
				},8000);
})
$('.insta_2').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta_top2_o')
	$('body').addClass('click_insta_top')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta_top')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta_top2_o')
				},8000);
})
$('.insta_3').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta_top3_o')
	$('body').addClass('click_insta_top')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta_top')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta_top3_o')
				},8000);
})
$('.insta_4').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta_top4_o')
	$('body').addClass('click_insta_top')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta_top')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta_top4_o')
				},8000);
})
$('.insta_5').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta_top5_o')
	$('body').addClass('click_insta_top')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta_top')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta_top5_o')
				},8000);
})




$('.insta_post_1').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta1_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta1_o')
				},8000);
})
$('.insta_post_2').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta2_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta2_o')
				},8000);
})
$('.insta_post_3').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta3_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta3_o')
				},8000);
})
$('.insta_post_4').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta4_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta4_o')
				},8000);
})
$('.insta_post_5').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta5_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta5_o')
				},8000);
})
$('.insta_post_6').click(function(){
	$('body').addClass('fast_tran')
	$('body').addClass('click_insta6_o')
	$('body').addClass('click_insta')
                setTimeout(function(){
	$('body').removeClass('fast_tran')
	$('body').removeClass('click_insta')
			  	},1300);
                setTimeout(function(){
	$('body').removeClass('click_insta6_o')
				},8000);
})
// if(w/h<(1680/950) || w/h>(1680/900)){
// 	$('#black').show()
// }else{
// 	$('#black').hide()
// }
// window.onresize = function(event) {
// if(w/h<(1680/950) || w/h>(1680/900)){
// 	$('#black').show()
// }else{
// 	$('#black').hide()
// }
// };
	$(".insta_1").hover(function(){
		  $('.insta_white_1').removeClass("opacity_0");
		  }, function(){
		  $('.insta_white_1').addClass("opacity_0");
	});
	$(".insta_2").hover(function(){
		  $('.insta_white_2').removeClass("opacity_0");
		  }, function(){
		  $('.insta_white_2').addClass("opacity_0");
	});
	$(".insta_3").hover(function(){
		  $('.insta_white_3').removeClass("opacity_0");
		  }, function(){
		  $('.insta_white_3').addClass("opacity_0");
	});
	$(".insta_4").hover(function(){
		  $('.insta_white_4').removeClass("opacity_0");
		  }, function(){
		  $('.insta_white_4').addClass("opacity_0");
	});
	$(".insta_5").hover(function(){
		  $('.insta_white_5').removeClass("opacity_0");
		  }, function(){
		  $('.insta_white_5').addClass("opacity_0");
	});
})