$(document).ready(function() {

    $(".but-1").click(function() {
        $('html,body').animate({
            scrollTop: $(".seven-screen").offset().top},
            'slow');
    });

});

//menu-mob

$(document).ready(function(){

    $(function() {
        var form = $('#pop-up-m');
        var btn = $('#open-pop');
        var closeIcon = $('.icon-close');
      
        btn.click(function() {
          form.css('display', 'block');
          $('body').addClass('pop_open');
          $('.mainn-title-mob').addClass('blur');
          $('.header-mob').addClass('blur');
          $('.photo-cloud1-1').addClass('blur');
          $('.photo-cloud2-1').addClass('blur');
          $('.photo-cloud31-1').addClass('blur');
          $('.second-screen-mob').addClass('blur');
        });
      
        closeIcon.click(function() {
            form.css('display', 'none');
            $('body').removeClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob').removeClass('blur');
            $('.photo-cloud1-1').removeClass('blur');
            $('.photo-cloud2-1').removeClass('blur');
            $('.photo-cloud31-1').removeClass('blur');
            $('.second-screen-mob').removeClass('blur');
        });
      
        $(window).click(function(event) {
          if (event.target == form[0]) {
            form.css('display', 'none');
            $('body').removeClassClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob').removeClass('blur');
            $('.photo-cloud1-1').removeClass('blur');
            $('.photo-cloud2-1').removeClass('blur');
            $('.photo-cloud31-1').removeClass('blur');
            $('.second-screen-mob').removeClass('blur');
          }
        });
    });

});

//form

$(document).ready(function(){

    $('.but-4').click(function(){
        $('.but-4').css("opacity", '0.3')
    })

});