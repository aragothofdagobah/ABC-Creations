$(document).ready(function() {
  var height = $(window).height() * .98;
  $('lines').css("width",$("#image").width());
  $('.arrow').on('click', function(){
    $(document).scrollTo($('#stop'), 1000);
  });
  $('.arrow').mouseover(function(){
    $(".arrow").effect( "bounce", {times:1}, 1000);
  });
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > height) {
      $('#nav_bar').addClass('navbar-fixed');
      $('#image').show("blind", 800);
    }
    if ($(window).scrollTop() < height) {
      $('#nav_bar').removeClass('navbar-fixed');
      $('#image').hide ("blind", 800);
    }
  });
});
