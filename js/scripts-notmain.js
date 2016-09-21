$(document).ready(function() {


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


  // Small gallary

  /*$(".min_gal_small_img").click(function(event) {
  		var img_data = $(this).data("big-image");
  		console.log(img_data);
  		$(".min_gal_big_img").animate({opacity: "0"},"400");
  		$(".min_gal_big_img img").attr({"src": img_data});
  		$(".min_gal_big_img").animate({opacity: "1"},"400");
      return false;
  	});*/

  $(".big_img").click(function(){
    var href_a=$(this).attr("src"); //save image src
    console.log($(this).attr("src"));
    $(this).parent().find('a[href*="'+href_a+'"]')[0].click(); // look in parent's childs for src hrefs

  });

  $(".min_gal_small_img").click(function(event) {

    var img_data = $(this).data("big-image");

    $.when($(".min_gal_big_img").animate({
      opacity: "0"
      }, "400")).done(function(x) {
      
      $(".min_gal_big_img img").attr({
        "src": img_data,
        opacity: "0"
      }, "0");
      
      $(".min_gal_big_img").animate({
        opacity: "1"
      }, "400");

    });



  });

  // Small gallary

  //Time select dropdown

  $(".dropdown-menu li").click(function() {
    $(this).parents(".btn-group").find('#current_time').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });


  //Time select dropdown

  //*Masked-input

  $("#phone_form").mask("+7 (999) 999-9999");

  //*Masked-input

  //--------------Fancybox options-----------------------------

  var fancybox_elements_gal_options_array = {
    "wrapCSS": "call",
    "padding": 0,
    "maxWidth": "970px",
    helpers: {
      overlay: {
        locked: false,
        opacity: 0.1,
        css: {
          'background': 'rgba(90, 92, 94, 0.8)'
        }
      }
    }
  };

  $("a.present_window").click(function(event) {
    $("a.present_window").fancybox(fancybox_present_options_array)
  })
  $("a.fancyboxGal").click(function(event) {

    /* Act on the event */
    $("a.fancyboxGal").fancybox(fancybox_elements_gal_options_array);
  });

  //--------------END Fancybox options-----------------------



});

// Small gallery functions
function fadeOut_img(img_data) {
  $(".min_gal_big_img").animate({
    opacity: "0"
  }, "400");
  $(".min_gal_big_img img").attr({
    "src": img_data,
    opacity: "0"
  });

}

function fadeIn_img() {
  $(".min_gal_big_img").animate({
    opacity: "1"
  }, "400");
}
// End small gallery functions


// Grid item gallery
  // external js: masonry.pkgd.js, imagesloaded.pkgd.js

  // init Isotope
  var grid = document.querySelector('.grid');

  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });


    $("figure.cap-left").mouseover(function(event){
      
      $(this).children("figcaption.b-work_title").toggleClass('mouseout');
      $(this).children("div.overlay_layer").toggleClass('overlay');
      $(this).children(".over_category,.over_title").css({'opacity':"1"});
    });
    $("figure.cap-left").mouseout(function(event) {
      
      $(this).children("figcaption.b-work_title").toggleClass('mouseout');
      $(this).children("div.overlay_layer").toggleClass('overlay');
      $(this).children(".over_category,.over_title").css({'opacity':"0"});
    });
// END Grid item gallery

// FAQ questions icons
// END FAQ questions icons