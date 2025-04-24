"use strict";

jQuery(document).ready(function($){

  /*-------------------------------------------------------------------------
   * 1. Plugins Init
  -------------------------------------------------------------------------*/

  // ToolTip
  function toolTipInit() {
    $('.menu li a').tooltip({
      placement: 'right'
    });
  }
  toolTipInit();

  // MixItUp Plugin
  $('#Grid').mixitup({
    effects: ['fade','grayscale'],
    easing: 'snap',
    transitionSpeed: 800
  });

  // Nice Scroll Plugin
  $("html").niceScroll({
    cursorcolor : '#a71e2b',
    cursorborder : 0,
    zindex : 99999,
  });

  // LightBox
  $(function(){
    $('[data-rel="lightbox"]').lightbox();
  });


  /*-------------------------------------------------------------------------
   * 2. Site Specific Functions
  -------------------------------------------------------------------------*/

  // Responsive Navigation: منع السلوك الافتراضي لمنع إعادة تحميل الصفحة
  $('.menu-toggle-btn').click(function(e){
    e.preventDefault();
    $('.responsive_menu').stop(true, true).slideToggle();
  });

  $(".responsive_menu a").click(function(){
    $('.responsive_menu').hide();
  });

  // Open Filters on gallery page
  $(".toggle-filter").click(function(){
    $(".filter-controls").slideToggle();
    return false;
  });

  // Open Different Pages
  $(".main_menu a").click(function(){
    var id = $(this).attr('class');
    id = id.split('-');
    $("#menu-container .content").hide();
    $("#menu-container #menu-" + id[1]).slideDown(600);
    $("#menu-container .homepage").hide();
    return false;
  });

  $(".main_menu a.homebutton").click(function(){
    $("#menu-container .homepage").show();
    return false;
  });

  $(".main_menu .show-1").click(function(){
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(public/images/gp3.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-2").click(function(){
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424484/my_project/qq3raqcen0myc1tdcs05.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-3").click(function(){
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424483/my_project/k41jc2esxkveobkxk7vn.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-4").click(function(){
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424473/my_project/luxz4as1cwfgeuummxx9.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-5").click(function(){
    loadScript();
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424474/my_project/yikfirbx7tf653fq17gf.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-6").click(function(){
    loadScript();
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424472/my_project/pxrlmsdr7gjw5gzp7job.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  $(".main_menu .show-7").click(function(){
    loadScript();
    $(".bg-image").fadeOut('slow', function(){
      $(this).css({
        'background-image': 'url(https://res.cloudinary.com/dadtybpaw/image/upload/v1745424480/my_project/rqjxxxbx0njgsnuhkqcb.jpg)'
      }).fadeIn('slow');
    });
    return false;
  });

  // Services Offer Effect
  $('.services .header .service-header').hover(function () {
    var t = $(this);
    t.find('h4').hide();
    $(this).parent().find('.header-bg').stop(true, true).animate({
      width: '100%'
    }, 'fast', function () {
      t.find('h4').addClass('active').fadeIn('fast');
    });
  }, function () {
    var t = $(this);
    t.find('h4').hide();
    t.parent().find('.header-bg').stop(true, true).animate({
      width: 60
    }, 'fast', function () {
      t.find('h4').removeClass('active').fadeIn('fast');
    });
  });

});
