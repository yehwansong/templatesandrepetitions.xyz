$( document ).ready(function() {

$("body").bind('touchmove mousemove', function(e){


        // moving_amaount_x = e.originalEvent.touches[e.originalEvent.touches.length-1].pageX - start_e_x
        // moving_amaount_y = e.originalEvent.touches[e.originalEvent.touches.length-1].pageY - start_e_y
	var w = window.innerWidth
	var h = window.innerHeight
		for (var i = jQuery('.insta_4>img').length; i >= 1; i--) {
			console.log('h')
			jQuery('.insta_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageX + 100) - (w/jQuery('.insta_4>img').length * i))/w)})
			jQuery('.insta_3>img:nth-child('+i+')').css({'opacity':Math.abs(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageX + 100) - (w/jQuery('.insta_3>img').length * i))/w)})
			// jQuery('.insta_4>img:nth-child('+i+')').css({'opacity':Math.abs(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageY) - (h/jQuery('.insta_4>img').length * i))/(1.5*w))})
			// jQuery('.insta_3>img:nth-child('+i+')').css({'opacity':Math.abs(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageY) - (h/jQuery('.insta_3>img').length * i))/(1.5*w))})
				console.log(((e.originalEvent.touches[e.originalEvent.touches.length-1].pageY) - (h/jQuery('.insta_3>img').length * i))/h)
				jQuery('.overlaycircle').css({'opacity':(Math.abs(e.originalEvent.touches[e.originalEvent.touches.length-1].pageX - (w/2)))/(w/2)})
		}
    })
})