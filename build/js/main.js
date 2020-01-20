$(function() {



  var siteToggle = $('.navbar-toggler'),
      layer=$('.site__layer'),
      siteMenu= $('.header__right');


  siteToggle.on('click', function(){
    layer.toggleClass('active');
    $(this).toggleClass("collapsed");
      siteMenu.toggleClass("show");
    $('body').toggleClass('overflow-hidden');
  });


  $('.site__layer').on('click', function(){
    layer.removeClass('active');
    siteToggle.removeClass('collapsed');
    siteMenu.removeClass('show');
    $('body').removeClass('overflow-hidden');

  });
  

  $(".toggle-submenu").on('click', function(){
    $(this).parent().toggleClass("open-submenu");
  });




  function equalHeight(elem) {

    var highestBox = 0;
    var heightAuto = 'auto'
    $(elem).height(heightAuto);
    $(elem).each(function(){

      if($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
      
    });  
    $(elem).height(highestBox);
  }
  equalHeight('.featured-icons .featured__icon');


  equalHeight('.compare__row_1');
  equalHeight('.compare__row_2');
  equalHeight('.compare__row_3');
  equalHeight('.compare__row_4');
  equalHeight('.compare__row_5');
// $(window).on('load', function(event) {

//   $('.compare-col').jQueryEqualHeight('.compare__row');
//   // $('.compare-col').jQueryEqualHeight();
//   // $('.compare-col').jQueryEqualHeight();
//   // $('.compare-col').jQueryEqualHeight();
//   // $('.compare-col').jQueryEqualHeight();
// });

   // $('.container').each(function(){  
      
   //    // Cache the highest
   //    var highestBox = 0;
      
   //    // Select and loop the elements you want to equalise
   //    $('.column', this).each(function(){
        
   //      // If this box is higher than the cached highest then store it
   //      if($(this).height() > highestBox) {
   //        highestBox = $(this).height(); 
   //      }
      
   //    });  
            
   //    // Set the height of all those children to whichever was highest 
   //    $('.column',this).height(highestBox);
                    
   //  }); 



  $('.carousel-products').each(function(){
     var title = $(this);
     setTimeout(function() {
      equalHeight(title.find('.product-box__title'));
    }, 500)
  });


  var headerHeight = 0;

  $(window).resize(function() {

      setTimeout(function() {
        headerHeight = $('.header').innerHeight();
      }, 3000) 


       
      
      $('.main-menu').css({'margin-top': $('.header').css('height'), 'height' : 'calc(100% - ' + headerHeight + 'px)'});

   })

  .resize();



  $(".owl-carousel").each(function(){
      $(this).owlCarousel($(this).data())
  });


    $('.tabs .tabs-nav li a').on('click', function (t) { 
    var tabs_parent = $(this).parents('.tabs'), 
      tabs = tabs_parent.find('.tabs-content'), 
      index = $(this).parents('li').index();

      tabs_parent.find('.tabs-nav > .current_tab').removeClass('current_tab');

      $(this).parents('li').addClass('current_tab');
      
      
      tabs.find('.tabs-content-tab').not(':eq(' + index + ')').removeClass('active_tab');
      tabs.find('.tabs-content-tab:eq(' + index + ')').addClass('active_tab');
      t.preventDefault();
    
  } );



  $('.hero-search__input input').on('focus', function() {
    $(this).parent('.hero-search__input').addClass('hero-search_focus');
  }).on('blur', function() {
    $(this).parent('.hero-search__input').removeClass('hero-search_focus');
  })


  $(window).scroll(function () {
     var distanceY = $(this).scrollTop(),
         shrinkOn  = 160,
         header    = $(".header");

    if (distanceY > shrinkOn) {
      header.addClass("smaller");
    } else {
      if (header.hasClass("smaller")) {
        header.removeClass("smaller");
      }
    }
  }); 



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



$(".input__field").focus(function() {
  $(this).parent().addClass("edit")
});

$(".input__field").blur(function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass("edit")
  }
});


$('.select-styler, input:radio, input:checkbox').styler();










// function rb_carousel(){
jQuery( '.carousel_wrapper' ).each( function() {

  var this_is = jQuery(this);

  if( this_is.find('.carousel > *').length <= this_is.data('columns') ){
    return true;
  }

  /* -----> Getting carousel attributes <-----*/  

  var slidesToShow = this_is.data('columns');

  var slidesToScroll = jQuery.isNumeric(this_is.data('slides-to-scroll')) ? this_is.data('slides-to-scroll') : 1;
  var infinite = this_is.data('infinite') == 'on';
  var pagination = this_is.data('pagination') == 'on';
  var navigation = this_is.data('navigation') == 'on';
  var autoHeight = this_is.data('auto-height') == 'on';
  var draggable = this_is.data('draggable') == 'on';
  var autoplay = this_is.data('autoplay') == 'on';
  var autoplaySpeed = this_is.data('autoplay-speed');
  var pauseOnHover = this_is.data('pause-on-hover') == 'on';
  var vertical = this_is.data('vertical') == 'on';
  var verticalSwipe = this_is.data('vertical-swipe') == 'on';
  var tabletLandscape = this_is.data('tablet-landscape');
  var tabletPortrait = this_is.data('tablet-portrait');
  var mobile = this_is.data('mobile');
  var carousel = this_is.children('.carousel');
  var rtl = jQuery('body').hasClass('rtl');


  var responsive = { responsive: [] }

  /* -----> Collect attributes in aruments object <-----*/  
  var args = {
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    infinite: infinite,
    dots: pagination,
    arrows: navigation,
    adaptiveHeight: autoHeight,
    draggable: draggable,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 10,
    autoplay: autoplay, 
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover, 
    vertical: vertical,
    verticalSwiping: verticalSwipe,
    rtl: rtl,
    margin: 20,
  }

  /* -----> Responsive rules <----- */
  if( typeof tabletLandscape !== 'undefined' )
    responsive.responsive.push( rb_carousel_responsive_array(1200, tabletLandscape) );
  
  if( typeof tabletPortrait !== 'undefined' )
    responsive.responsive.push( rb_carousel_responsive_array(992, tabletPortrait) );

  if( typeof mobile !== 'undefined' ){
    responsive.responsive.push( rb_carousel_responsive_array(768, mobile) );
  } else {
    if( this_is.parent().hasClass('layout_carousel') ){
      responsive.responsive.push( rb_carousel_responsive_array(768, 3) );
      responsive.responsive.push( rb_carousel_responsive_array(480, 1) );
    } else {
      responsive.responsive.push( rb_carousel_responsive_array(768, 1) );
    }
  }

  
  args = jQuery.extend({}, args, responsive);

  /* -----> Carousel init <-----*/  
  var carousel_obj = carousel.slick(args);
  console.log('sfsdf');
});
// }



function rb_carousel_responsive_array( res, cols ){
  var out = {
    breakpoint: res,
    settings: {
      slidesToShow: cols,
      slidesToScroll: 1,
    }
  };

  if( res == 768 ){
    out.settings['dots'] = true;
    out.settings['arrows'] = false;
    out.settings['adaptiveHeight'] = true;
  }

  return out;
}



// function rb_custom_carousel(){
//   jQuery( '.rb_custom_carousel' ).each( function(i, el){
//     var this_is = jQuery(this);
//     var columns = '3';
//     var custom_columns = this_is.attr('class');
//     var rtl = jQuery('body').hasClass('rtl');

//     custom_columns = custom_columns.match(/columns-(.*[0-9])/);

//     if( custom_columns.length ){
//       columns = custom_columns[1];
//     }


//     this_is.slick({
//       slidesToShow: columns,
//       slidesToScroll: 1,
//       draggable: true,
//       dots: true,
//       arrows: false,
//       rtl: rtl,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//           }
//         }
//       ]
//     });
//   });
// }





});