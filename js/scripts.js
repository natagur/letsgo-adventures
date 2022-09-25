$(document).on('click', '.header-burger', function(event){
    $('.header-nav').addClass('active');
    $('.header-cross').addClass('active');
    $('.header-burger').css('display', 'none');
  
    event.preventDefault();
  });
$(document).on('click', '.header-cross', function(event){
    $('.header-nav').removeClass('active');
    $('.header-cross').removeClass('active');
    $('.header-burger').css('display', 'block');
  
    event.preventDefault();
  });
$(document).on('click', '.header-nav-link', function(event){
    $(this).parents('.header-nav-item').toggleClass('active');
  
    event.preventDefault();
  });
$(document).on('click', '.link-inside', function(event){
    $('.back-menu').removeClass('active');
    $(this).parents('.header-nav-item').find('.back-menu').toggleClass('active');
    $(this).parents('.item-inside').toggleClass('active');
  
    event.preventDefault();
  });
$(document).on('click', '.back-menu.active', function(event){
    $('.back-menu').removeClass('active');
    $(this).parents('.header-nav-item').find('.item-inside').removeClass('active');
  
    event.preventDefault();
  });