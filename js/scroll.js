// debounce/throttle plugin
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

//elements you want to scroll to go here
divs = [$("#header"),$("#counters"),$("#services"),$("#keys")];

var lastScrollTop = 0; //we'll update this on every scroll and compare it to the last scroll to determine the scroll direction
var run = true;

$(window).scroll($.debounce(250, true, function () { //debounce so it only runs once per scroll
  var st = $(window).scrollTop();
  if (st > lastScrollTop) { // if the scrollTop when the scroll event fires is larger than the last scroll, we can assume the scroll was in a downward direction
    $.each(divs, function (i, v) {
      ((v.offset().top - $(window).scrollTop()) < 0) && (next = i + 1); //compare each elements offset to the windows offset to determine which element we're currently scrolling through
    });      
    run = (next != divs.length) ? true : false; //dont run if we are at the last div
  } else {
    $.each(divs, function (i, v) {
      ((v.offset().top - $(window).scrollTop()) < 0) && (next = i);
    }); 
    run = true;
  }
  if (run) {
    $('html, body').animate({
      scrollTop: divs[next].offset().top
    }, 700,'linear', function() {
      lastScrollTop = $(window).scrollTop();
    });
  } else { lastScrollTop = $(window).scrollTop(); }
}));