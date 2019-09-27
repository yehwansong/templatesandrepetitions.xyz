$( document ).ready(function() {

$("body").bind('touchmove mousemove', function(e){


        // moving_amaount_x = e.originalEvent.touches[e.originalEvent.touches.length-1].pageX - start_e_x
        // moving_amaount_y = e.originalEvent.touches[e.originalEvent.touches.length-1].pageY - start_e_y
	var w = window.innerWidth
	var h = window.innerHeight
		for (var i = jQuery('.insta_post_3>img').length; i >= 1; i--) {
			jQuery('.insta_post_3>img:nth-child('+i+')').css({'opacity':Math.abs(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageY + 150) - (w/jQuery('.insta_post_3>img').length * i))/(w*1.1))})
		}
    })
})