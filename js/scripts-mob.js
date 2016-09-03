

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [''],  /*'Вступление', 'Ключевые показатели', 'О нас', Кейсы', 'Почему выбирают нас', 'Портфолио', 'Команда', 'Контакты'*/
        showActiveTooltip: false,

        paddingTop: "60px",
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            if(index == 2){
              $('.counter').counterUp({
                delay: 10,
                time: 999
              });
            }
        }
    });

    $(".team-mob a").click(function(e){
      $(this).toggleClass("active-click");
      $(".team-mob a").not(this).removeClass("active-click");
    });


    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true
    });

    var reviewsSwiper = new Swiper ('.reviews-swiper-mob', {
      // Optional parameters
      pagination: '.pagination-mob',
      paginationClickable: true,
      loop: true,
      nextButton: ".reviews-swiper-button-next",
      prevButton: ".reviews-swiper-button-prev"
    });

    var reviewsSwiper = new Swiper ('.reviews-swiper-desktop', {
      // Optional parameters
      pagination: '.pagination-desktop',
      paginationClickable: true,
      loop: true
     
    });
    
    var casesSwiper = new Swiper ('.cases-mob', {
      // Optional parameters
       // Navigation arrows
      nextButton: '.cases-swiper-button-next',
      prevButton: '.cases-swiper-button-prev',
slidesPerView: 1,
      loop: true
    });

    var portfSwiper = new Swiper ('.portfolio-swiper-container', {
      // Optional parameters
      pagination: '.portfolio-swiper-pagination',
      paginationClickable: true,
      loop: true,
      nextButton: ".portfolio-swiper-button-next",
      prevButton: ".portfolio-swiper-button-prev"
    });

    var teamfSwiper = new Swiper ('.team-swiper-container', {
      // Optional parameters
      pagination: '.team-swiper-pagination',
      paginationClickable: true,
      loop: true,
      nextButton: ".team-swiper-button-next",
      prevButton: ".team-swiper-button-prev"
    });   
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
	
    }