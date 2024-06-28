$(document).ready(function() {

    $(".but-1").click(function() {
        $('html,body').animate({
            scrollTop: $(".third-screen-t").offset().top},
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
          $('.header-mob1').addClass('blur');
          $('.photo-cloud32-1').addClass('blur');
          $('.photo-cloud-1').addClass('blur');
          $('.photo-cloud-2').addClass('blur');
          $('.second-screen-t-mob').addClass('blur');
        });
      
        closeIcon.click(function() {
            form.css('display', 'none');
            $('body').removeClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob1').removeClass('blur');
            $('.photo-cloud32-1').removeClass('blur');
            $('.photo-cloud-1').removeClass('blur');
            $('.photo-cloud-2').removeClass('blur');
            $('.second-screen-t-mob').removeClass('blur');
        });
      
        $(window).click(function(event) {
          if (event.target == form[0]) {
            form.css('display', 'none');
            $('body').removeClassClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob1').removeClass('blur');
            $('.photo-cloud32-1').removeClass('blur');
            $('.photo-cloud-1').removeClass('blur');
            $('.photo-cloud-2').removeClass('blur');
            $('.second-screen-t-mob').removeClass('blur');
          }
        });
    });

});

//catalog

$(document).ready(function(){

    $(".product1").click(function () {

        $('.color-bg1, .functional-but3-1_1').fadeIn(200);
    
    });
    
    $(".product1").mouseleave(function () {
    
        $('.color-bg1, .functional-but3-1_1').fadeOut(200);
    
    });


    $(".product3").click(function () {

        $('.color-bg2, .functional-but3-1_2').fadeIn(200);
    
    });
    
    $(".product3").mouseleave(function () {
    
        $('.color-bg2, .functional-but3-1_2').fadeOut(200);
    
    });


    $(".product5").click(function () {

        $('.color-bg3, .functional-but3-1_3').fadeIn(200);
    
    });
    
    $(".product5").mouseleave(function () {
    
        $('.color-bg3, .functional-but3-1_3').fadeOut(200);
    
    });


    $(".product2").click(function () {

        $('.color-bg4, .functional-but3-1_5').fadeIn(200);
    
    });
    
    $(".product2").mouseleave(function () {
    
        $('.color-bg4, .functional-but3-1_5').fadeOut(200);
    
    });



    $(".product4").click(function () {

        $('.color-bg5, .functional-but3-1_4').fadeIn(200);
    
    });
    
    $(".product4").mouseleave(function () {
    
        $('.color-bg5, .functional-but3-1_4').fadeOut(200);
    
    });

});

//pop-up

$(document).ready(function(){

    $(function() {
        var form = $('#pop-up, #pop-up1');
        var btn = $('.open-pop');
        var closeIcon = $('.icon-close');
      
        btn.click(function() {
          form.css('display', 'block');
          $('body').addClass('pop_open');
          $('.left-side').addClass('blur');
          $('.right-side').addClass('blur');
          $('.photo-3').addClass('blur');
          $('.photo-1').addClass('blur');
          $('.photo-2').addClass('blur');
          $('.first-screen').addClass('blur');
          $('.third-screen-t').addClass('blur');
          $('.photo00-2').addClass('blur');
        });
      
        closeIcon.click(function() {
            form.css('display', 'none');
            $('body').removeClass('pop_open');
            $('.left-side').removeClass('blur');
            $('.right-side').removeClass('blur');
            $('.photo-3').removeClass('blur');
            $('.photo-1').removeClass('blur');
            $('.photo-2').removeClass('blur');
            $('.first-screen').removeClass('blur');
            $('.third-screen-t').removeClass('blur');
            $('.photo00-2').removeClass('blur');
        });
      
        $(window).click(function(event) {
          if (event.target == form[0]) {
            form.css('display', 'none');
            $('body').removeClassClass('pop_open');
            $('.left-side').removeClassClass('blur');
            $('.right-side').removeClassClass('blur');
            $('.photo-3').removeClassClass('blur');
            $('.photo-1').removeClassClass('blur');
            $('.photo-2').removeClassClass('blur');
            $('.first-screen').removeClassClass('blur');
            $('.third-screen-t').removeClass('blur');
            $('.photo00-2').removeClass('blur');
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


    
  

