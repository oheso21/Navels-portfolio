$(function(){
  
  const slidelinetop = $('.header-nav-list-item').height() * 1.8;
  const headerNavSpace = 15;
  var scrollCorrectionValue = $(window).height() / 1.5;
  // var scrolling = false;

  // PC画面用
  if($(window).outerWidth() > 767) {
    // ヘッダーナビのスライドラインを追従させる
    function navSlideLineMove() {
      $('.slide-line').css({
        // "width": $('.current').width() - headerNavSpace * 2,
        "width": $('.current').width(),
        // "left": $('.current').position().left + headerNavSpace
        "left": $('.current').position().left
      });
    }

    // スクロール時にヘッダーナビのスライドラインを追従させる
    $(window).on('scroll', function() {
      for(var i = 1; i <= 5; i++) {
        if($('.slide-pos:nth-child(' + i + ')').offset().top < $(window).scrollTop() + scrollCorrectionValue){
          $('.header-nav-list-item').removeClass('current');
          $('.header-nav-list-item:nth-child(' + i + ')').addClass('current');
          navSlideLineMove();
        }
      }
    });
  
    // ウィンドウリサイズ時にヘッダーナビのスライドラインを追従させる
    $(window).on('resize', function() {
      scrollCorrectionValue = $(window).height() / 1.5;
      navSlideLineMove();
    })

    // Webサイト読み込み時、スライドラインの初期位置を設定する
    $(function(){
      $('.slide-line').css("top", slidelinetop);
      navSlideLineMove();
    });

    // モーダルウィンドウ
    $('.works-image').on('click', function() {
      $('.modal-area-image').children().attr('src', $(this).children().attr('src'));
      $('.modal-area-figure').html($(this).next().html());
      $('.modal-area-text').html($(this).siblings('.works-text').html());
      $('.modal-area').fadeIn();
    });
    $('.modal-bg, .modal-close').on('click', function() {
      $('.modal-area').fadeOut();
    });
    
    // ふわっと表示させる
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
        }
      });
    });
        
    // 下から上へふわっと表示させる
    $(window).scroll(function (){
      $('.fadein-up').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    });
    
    // 右から左へふわっと表示させる
    $(window).scroll(function (){
      $('.fadein-left').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateX(0)');
        }
      });
    });
    
    // 左から右へふわっと表示させる
    $(window).scroll(function (){
      $('.fadein-right').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateX(0)');
        }
      });
    });
  }

  // タブレット・スマートフォン用
  if($(window).outerWidth() <= 767) {
    // ハンバーガーボタンオープン・クローズ
    $('.hamburger-btn').on('click', function() {
      $(this).toggleClass('active');
      $('.header-nav').toggleClass('panelactive');
    });

    $('.header-nav a').on('click', function() {
      $('.hamburger-btn').removeClass('active');
      $('.header-nav').removeClass('panelactive');
    });
  }
  
  // PC・タブレット・スマートフォン用
  // ヘッダーナビをクリックすると、スムーススクロールする
  $('.header-nav-list-item > a').on('click', function() {
    var target = 0;
    if(!($(this).attr('href') == '#top')) {
      if($(window).outerWidth() <= 767){
        target = $($(this).attr('href')).offset().top - $('.header').height() * 1.5;
      } else {
        target = $($(this).attr('href')).offset().top - $('.header').height() * 7;
      }
    }
    $('html, body').animate({scrollTop: target}, 400);
    return false;
  });

  $('.slider').slick({
    fade:true,
    autoplaySpeed: 3000,
    speed: 2000,
    autoplay: true,
    infinite: true,
    slidesTooShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
});
