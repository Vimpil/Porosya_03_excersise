$(document).ready(function() {

            $('#fullpage').fullpage({
              /*anchors:['header', 'counters', 'services', 'keys', 'whyus', 'portfolio', 'team1', 'maps'],*/
              fixedElements: '#menu-fixed',
              /*normalScrollElements: '#portfolio',*/
              /*paddingTop: '4em',*/
              responsiveWidth: 900,
              responsiveHeight: 400,
              touchSensitivity: 20,
              navigation: true,
              slideSelector: '.slide_new',
              afterLoad: function(anchorLink, index){
                  var loadedSection = $(this);
                  //using index
                  if(index == 2){
                     $('.counter').counterUp({
                      delay: 25,
                      time: 1000
                    });
                  }
              }

            });
          });


/* script for ... */
( function( $ ) {


//fixed menu scroll
$(window).scroll(function(){
	var offset = document.documentElement.scrollTop;
	
		if ((offset > 90) || $('body').scrollTop() > 90) {
			$('#menu-fixed,#menu-fixed-wrap').removeClass('close');

			} else {
			//$('#menu-fixed,#menu-fixed-wrap').addClass('close');
}
});
// button on head menubar
$('#button-menu,#button-menu-fix,#button-menu-wrap,#button-menu-fix-wrap').click(function(){
	$(this).toggleClass('active');
	return false;
});

// button on sorting
$('#button-menu-sorting').click(function(){
	$(this).toggleClass('active');
	return false;
});

//button carousel
$(document).ready(function(){
    // disable carousel cycling
    $('.carousel').carousel({ interval: false });
});

// button for callback
$(document).ready(function() {
        $(".fancybox").fancybox({'wrapCSS' : 'order-box'});
});
// button blind
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());
$(document).ready(function(){
	$('#indicators').BeforeAfterEffect({width:509, height:337});
  $('#model').BeforeAfterEffect({width:740, height:485});
});
// button blind

//button tab
$(document).ready(function(){ 
      $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
      });
    });

/* script for changing background */
$(document).ready(function(){
 $('li#fon-bg').click(function(){
  $('#tabs').addClass('on');
 });
 
 $('li.creation').click(function(){
  $('#tabs').removeClass('on');
 }); 
 
});
/* script for changing background */

/* doma */
// button on free-block active (li)
$('.free-block li.size').click(function(){
  $(this).toggleClass('active');

  var className = $(this).attr('id');

	$('input.free-active[data-dom="' + className + '"]').next('.checkbox img').toggleClass('open');
	
   if ( $('input.free-active[data-dom="' + className + '"]').next('.checkbox img').is('.open') ) {
   
	$('input.free-active[data-dom="' + className + '"]').prop('checked', true);
	
   } else {
   
	$('input.free-active[data-dom="' + className + '"]').prop('checked', false);   
	
   }
	
	//
	
	
  return false;
});

// button on checkbox active
$(document).ready(function(){
  $('input.free-active').click(function(){
   
   $(this).next('.checkbox img').toggleClass('open');

   var className = $(this).attr('data-dom');

   $(".free-block").find("#" + className).toggleClass('active');
   
   
   if ( $(".free-block").find("#" + className).is('.active') ) {
   
	$('input.free-active[data-dom="' + className + '"]').prop('checked', true);
	
   } else {
   
	$('input.free-active[data-dom="' + className + '"]').prop('checked', false);   
	
   }   
   
   
  });
});


/* select all */
$(document).ready(function(){
	$("#all").on("click", function () {

		var chk = document.getElementById('checkall').checked;

		if (chk) {
			var arr = document.getElementsByTagName("input");
			for (var i in arr) {
				if (arr[i].name == 'check') arr[i].checked = true;
			}
			$('.free-block li.size').addClass("active");
		} else {
			var arr = document.getElementsByTagName("input");
			for (var i in arr) {
				if (arr[i].name == 'check') arr[i].checked = false;
			}
			$('.free-block li.size').removeClass("active");
		}
		
			
	var countChecked = function() {
	  var n = $( "input[name=check]:checked" ).length;
	  $( "#counthome" ).text( "выбрано " + n + (n === 1 ? " " : " ") + " проектов из 30" );
	};
	countChecked();
	 
	$( "input[name=check]" ).on( "click", countChecked );		
		


		
	});
});


/* count checkboxes */

$(document).ready(function(){
	var countChecked = function() {
	  var n = $( "input[name=check]:checked" ).length;
	  $( "#counthome" ).text( "выбрано " + n + (n === 1 ? " " : " ") + " проектов из 30" );
	};
	countChecked();
	 
	$( "input[name=check]" ).on( "click", countChecked );
});

/* load more */

$(document).ready(function () {
    size_li = $(".free-home li").size();
    x=9;
    $('.free-home li:lt('+x+')').css( "display", "inline-block");
	
    $('#loadMore').click(function () {
        
		x= (x+3 <= size_li) ? x+3 : size_li;
        $('.free-home li:lt('+x+')').css( "display", "inline-block");
    });
    /*$('#showLess').click(function () {
        x=(x-3<0) ? 3 : x-3;
        $('.free-home li').not(':lt('+x+')').hide();
    });*/
});

/* dimpas team */
$(document).ready(function () {
  /* vars */
  var widthUl = 0;
  var positionUl =0;
  var widthScreen = $(window).width();
  var sliderX1 =0, sliderX2 = 0;
  /* delete select text */
  $('#slider1').onselectstart="return false"
  /* calculate end of blocks */
  $('#slider1 ul>li').each(function(){
    widthUl += $(this).width(); 
  });
  $('#slider1 ul').width(widthUl);
  $('#slider1').mousedown(function(e){
    sliderX1=e.clientX;
  });
  $('#slider1').mouseup(function(e){
    sliderX2=e.clientX;
    if((sliderX1-sliderX2)<0) {
      $('#slider1 ul').animate({'margin-left':'0'},500);
    } else {
      $('#slider1 ul').animate({'margin-left':'-'+(widthUl-widthScreen)+'px'},500);
    }
    
  });
  
});
/* / dimpa s team */

/* hover team */
$(document).ready(function () {
  $("#hov").hover(function(){
        $("#open").css('display', 'block');
        }, function(){
          $("#open").css('display', 'none');
        });
});


/* onclick maps  */
$(document).ready(function () {
        $('#map-scroll').addClass('scrolloff');
        $('#maps-scr').on('click', function () {
            $('#map-scroll').removeClass('scrolloff');
        });

        $("#map-scroll").mouseleave(function () {
            $('#map-scroll').addClass('scrolloff'); 
        });
    });

} )( jQuery );
/* END of script for ... */