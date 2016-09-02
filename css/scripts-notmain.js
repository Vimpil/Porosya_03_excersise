

$(document).ready(function() {


  $("#showMap, #closeMapButton").click(function(e){
    e.preventDefault();
    $(".map-col").toggleClass("hidden");
    $(".contact-col").toggleClass("hidden");
    initMap();
  });
  
  // slider projects 
  $('.owl-carousel').owlCarousel({
    margin:0,
    loop:true,
   nav:true,
    items:1,
	autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
navText: ["<",">"]
	});
	
	
	// Small gallary

  	$(".min_gal_small_img").click(function(event) {
  		var img_data = $(this).data("big-image");
  		console.log(img_data);
  		$(".min_gal_big_img").animate({
  			opacity: "0"
  		});
  		$(".min_gal_big_img img").attr({
  			"src": img_data
  		});
  		$(".min_gal_big_img").animate({
  			opacity: "1"
  		});
  	});

// Small gallary

//Time select dropdown

$(".dropdown-menu li").click(function(){
	console.log("pressed");
  $(this).parents(".btn-group").find('#current_time').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


//Time select dropdown
});
