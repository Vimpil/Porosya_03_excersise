$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: [''],
		/*'Вступление', 'Ключевые показатели', 'О нас', Кейсы', 'Почему выбирают нас', 'Портфолио', 'Команда', 'Контакты'*/
		showActiveTooltip: false,

		paddingTop: "60px",
		afterLoad: function(anchorLink, index) {
			var loadedSection = $(this);

			//using index
			if (index == 2) {
				$('.counter').counterUp({
					delay: 10,
					time: 999
				});
			}
		}


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

		$(".dropdown-menu li").click(function() {
			console.log("pressed");
			$(this).parents(".btn-group").find('#current_time').html($(this).text() + ' <span class="caret"></span>');
			$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
		});


		//Time select dropdown
	});

	$(".team-mob a").click(function(e) {
		$(this).toggleClass("active-click");
		$(".team-mob a").not(this).removeClass("active-click");
	});


	//initialize swiper when document ready  
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: true
	});

	var reviewsSwiper = new Swiper('.reviews-swiper-mob', {
		// Optional parameters
		pagination: '.pagination-mob',
		paginationClickable: true,
		loop: true,
		nextButton: ".reviews-swiper-button-next",
		prevButton: ".reviews-swiper-button-prev"
	});

	var reviewsSwiper = new Swiper('.reviews-swiper-desktop', {
		// Optional parameters
		pagination: '.pagination-desktop',
		paginationClickable: true,
		loop: true

	});

	var casesSwiper = new Swiper('.cases-mob', {
		// Optional parameters
		// Navigation arrows
		nextButton: '.cases-swiper-button-next',
		prevButton: '.cases-swiper-button-prev',
		slidesPerView: 1,
		loop: true
	});

	var portfSwiper = new Swiper('.portfolio-swiper-container', {
		// Optional parameters
		pagination: '.portfolio-swiper-pagination',
		paginationClickable: true,
		loop: true,
		nextButton: ".portfolio-swiper-button-next",
		prevButton: ".portfolio-swiper-button-prev"
	});

	var teamfSwiper = new Swiper('.team-swiper-container', {
		// Optional parameters
		pagination: '.team-swiper-pagination',
		paginationClickable: true,
		loop: true,
		nextButton: ".team-swiper-button-next",
		prevButton: ".team-swiper-button-prev"
	});
	$("#showMap, #closeMapButton").click(function(e) {
		e.preventDefault();
		$(".map-col").toggleClass("hidden");
		$(".contact-col").toggleClass("hidden");
		initMap();
	});

	// slider projects 
	$('.owl-carousel').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ["<", ">"]
	});
});

function initMap() {
	var mapDiv = document.getElementById('map_canvas');
	var officeLatLng = {
		lat: 58.524741,
		lng: 31.242181
	};
	var markerImage = 'img/marker_kuratov.png';
	var map = new google.maps.Map(mapDiv, {
		center: officeLatLng,
		zoom: 12
	});

	var marker = new google.maps.Marker({
		position: officeLatLng,
		map: map,
		title: 'Куратов',
		icon: markerImage
	});
}