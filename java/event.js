$(document).ready(function() {

    $(".but-1").click(function() {
        $('html,body').animate({
            scrollTop: $(".fifth-screen-e").offset().top},
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
          $('.photo-cloud1_1').addClass('blur');
          $('.photo-cloud2_1').addClass('blur');
          $('.second-screen-e').addClass('blur');
        });
      
        closeIcon.click(function() {
            form.css('display', 'none');
            $('body').removeClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob').removeClass('blur');
            $('.photo-cloud1_1').removeClass('blur');
            $('.photo-cloud2_1').removeClass('blur');
            $('.second-screen-e').removeClass('blur');
        });
      
        $(window).click(function(event) {
          if (event.target == form[0]) {
            form.css('display', 'none');
            $('body').removeClassClass('pop_open');
            $('.mainn-title-mob').removeClass('blur');
            $('.header-mob').removeClass('blur');
            $('.photo-cloud1_1').removeClass('blur');
            $('.photo-cloud2_1').removeClass('blur');
            $('.second-screen-e').removeClass('blur');
          }
        });
    });

});

//line-poster1

$(document).ready(function(){

    $(".poster1").click(function () {

        $('.color-bg, .functional-btn').fadeIn(200);
    
    });
    $(".poster1").mouseleave(function () {
    
        $('.color-bg, .functional-btn').fadeOut(200);
    
    });

    $(".poster1-2").click(function () {

        $('.color-bg2, .functional-btn2').fadeIn(200);
    
    });
    $(".poster1-2").mouseleave(function () {
    
        $('.color-bg2, .functional-btn2').fadeOut(200);
    
    });

    $(".poster1-3").click(function () {

        $('.color-bg3, .functional-btn3').fadeIn(200);
    
    });
    $(".poster1-3").mouseleave(function () {
    
        $('.color-bg3, .functional-btn3').fadeOut(200);
    
    });

    $(".poster1-4").click(function () {

        $('.color-bg4, .functional-btn4').fadeIn(200);
    
    });
    $(".poster1-4").mouseleave(function () {
    
        $('.color-bg4, .functional-btn4').fadeOut(200);
    
    });

    $(".poster1-5").click(function () {

        $('.color-bg5, .functional-btn5').fadeIn(200);
    
    });
    $(".poster1-5").mouseleave(function () {
    
        $('.color-bg5, .functional-btn5').fadeOut(200);
    
    });

    $(".poster1-6").click(function () {

        $('.color-bg6, .functional-btn6').fadeIn(200);
    
    });
    $(".poster1-6").mouseleave(function () {
    
        $('.color-bg6, .functional-btn6').fadeOut(200);
    
    });

    $(".poster1-7").click(function () {

        $('.color-bg7, .functional-btn7').fadeIn(200);
    
    });
    $(".poster1-7").mouseleave(function () {
    
        $('.color-bg7, .functional-btn7').fadeOut(200);
    
    });

    $(".poster1-8").click(function () {

        $('.color-bg8, .functional-btn8').fadeIn(200);
    
    });
    $(".poster1-8").mouseleave(function () {
    
        $('.color-bg8, .functional-btn8').fadeOut(200);
    
    });

    $(".poster1-9").click(function () {

        $('.color-bg9, .functional-btn9').fadeIn(200);
    
    });
    $(".poster1-9").mouseleave(function () {
    
        $('.color-bg9, .functional-btn9').fadeOut(200);
    
    });

    $(".poster1-10").click(function () {

        $('.color-bg10, .functional-btn10').fadeIn(200);
    
    });
    $(".poster1-10").mouseleave(function () {
    
        $('.color-bg10, .functional-btn10').fadeOut(200);
    
    });

    $(".poster1-11").click(function () {

        $('.color-bg11, .functional-btn11').fadeIn(200);
    
    });
    $(".poster1-11").mouseleave(function () {
    
        $('.color-bg11, .functional-btn11').fadeOut(200);
    
    });

    $(".poster1-12").click(function () {

        $('.color-bg12, .functional-btn12').fadeIn(200);
    
    });
    $(".poster1-12").mouseleave(function () {
    
        $('.color-bg12, .functional-btn12').fadeOut(200);
    
    });

    $(".poster1-13").click(function () {

        $('.color-bg13, .functional-btn13').fadeIn(200);
    
    });
    $(".poster1-13").mouseleave(function () {
    
        $('.color-bg13, .functional-btn13').fadeOut(200);
    
    });

    $(".poster1-14").click(function () {

        $('.color-bg14, .functional-btn14').fadeIn(200);
    
    });
    $(".poster1-14").mouseleave(function () {
    
        $('.color-bg14, .functional-btn14').fadeOut(200);
    
    });

    $(".poster1-15").click(function () {

        $('.color-bg15, .functional-btn15').fadeIn(200);
    
    });
    $(".poster1-15").mouseleave(function () {
    
        $('.color-bg15, .functional-btn15').fadeOut(200);
    
    });

    $(".poster1-16").click(function () {

        $('.color-bg16, .functional-btn16').fadeIn(200);
    
    });
    $(".poster1-16").mouseleave(function () {
    
        $('.color-bg16, .functional-btn16').fadeOut(200);
    
    });

    $(".poster1-17").click(function () {

        $('.color-bg17, .functional-btn17').fadeIn(200);
    
    });
    $(".poster1-17").mouseleave(function () {
    
        $('.color-bg17, .functional-btn17').fadeOut(200);
    
    });

    $(".poster1-18").click(function () {

        $('.color-bg18, .functional-btn18').fadeIn(200);
    
    });
    $(".poster1-18").mouseleave(function () {
    
        $('.color-bg18, .functional-btn18').fadeOut(200);
    
    });

    $(".poster1-19").click(function () {

        $('.color-bg19, .functional-btn19').fadeIn(200);
    
    });
    $(".poster1-19").mouseleave(function () {
    
        $('.color-bg19, .functional-btn19').fadeOut(200);
    
    });

    $(".poster1-20").click(function () {

        $('.color-bg20, .functional-btn20').fadeIn(200);
    
    });
    $(".poster1-20").mouseleave(function () {
    
        $('.color-bg20, .functional-btn20').fadeOut(200);
    
    });

    $(".poster1-21").click(function () {

        $('.color-bg21, .functional-btn21').fadeIn(200);
    
    });
    $(".poster1-21").mouseleave(function () {
    
        $('.color-bg21, .functional-btn21').fadeOut(200);
    
    });

    $(".poster1-22").click(function () {

        $('.color-bg22, .functional-btn22').fadeIn(200);
    
    });
    $(".poster1-22").mouseleave(function () {
    
        $('.color-bg22, .functional-btn22').fadeOut(200);
    
    });

    $(".poster1-23").click(function () {

        $('.color-bg23, .functional-btn23').fadeIn(200);
    
    });
    $(".poster1-23").mouseleave(function () {
    
        $('.color-bg23, .functional-btn23').fadeOut(200);
    
    });

    $(".poster1-24").click(function () {

        $('.color-bg24, .functional-btn24').fadeIn(200);
    
    });
    $(".poster1-24").mouseleave(function () {
    
        $('.color-bg24, .functional-btn24').fadeOut(200);
    
    });

    $(".poster1-25").click(function () {

        $('.color-bg25, .functional-btn25').fadeIn(200);
    
    });
    $(".poster1-25").mouseleave(function () {
    
        $('.color-bg25, .functional-btn25').fadeOut(200);
    
    });

    $(".poster1-26").click(function () {

        $('.color-bg26, .functional-btn26').fadeIn(200);
    
    });
    $(".poster1-26").mouseleave(function () {
    
        $('.color-bg26, .functional-btn26').fadeOut(200);
    
    });

    $(".poster1-27").click(function () {

        $('.color-bg27, .functional-btn27').fadeIn(200);
    
    });
    $(".poster1-27").mouseleave(function () {
    
        $('.color-bg27, .functional-btn27').fadeOut(200);
    
    });

    $(".poster1-28").click(function () {

        $('.color-bg28, .functional-btn28').fadeIn(200);
    
    });
    $(".poster1-28").mouseleave(function () {
    
        $('.color-bg28, .functional-btn28').fadeOut(200);
    
    });

    $(".poster1-29").click(function () {

        $('.color-bg29, .functional-btn29').fadeIn(200);
    
    });
    $(".poster1-29").mouseleave(function () {
    
        $('.color-bg29, .functional-btn29').fadeOut(200);
    
    });

    $(".poster1-30").click(function () {

        $('.color-bg30, .functional-btn30').fadeIn(200);
    
    });
    $(".poster1-30").mouseleave(function () {
    
        $('.color-bg30, .functional-btn30').fadeOut(200);
    
    });

    $(".poster1-31").click(function () {

        $('.color-bg31, .functional-btn31').fadeIn(200);
    
    });
    $(".poster1-31").mouseleave(function () {
    
        $('.color-bg31, .functional-btn31').fadeOut(200);
    
    });

    $(".poster1-32").click(function () {

        $('.color-bg32, .functional-btn32').fadeIn(200);
    
    });
    $(".poster1-32").mouseleave(function () {
    
        $('.color-bg32, .functional-btn32').fadeOut(200);
    
    });

    $(".poster1-33").click(function () {

        $('.color-bg33, .functional-btn33').fadeIn(200);
    
    });
    $(".poster1-33").mouseleave(function () {
    
        $('.color-bg33, .functional-btn33').fadeOut(200);
    
    });

    $(".poster1-34").click(function () {

        $('.color-bg34, .functional-btn34').fadeIn(200);
    
    });
    $(".poster1-34").mouseleave(function () {
    
        $('.color-bg34, .functional-btn34').fadeOut(200);
    
    });

    $(".poster1-35").click(function () {

        $('.color-bg35, .functional-btn35').fadeIn(200);
    
    });
    $(".poster1-35").mouseleave(function () {
    
        $('.color-bg35, .functional-btn35').fadeOut(200);
    
    });

    $(".poster1-36").click(function () {

        $('.color-bg36, .functional-btn36').fadeIn(200);
    
    });
    $(".poster1-36").mouseleave(function () {
    
        $('.color-bg36, .functional-btn36').fadeOut(200);
    
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
          $('.run-line').addClass('blur');
          $('.run-line1').addClass('blur');
          $('.first-screen-e').addClass('blur');
          $('.third-screen-e').addClass('blur');
          $('.fifth-screen-e').addClass('blur');
        });
      
        closeIcon.click(function() {
            form.css('display', 'none');
            $('body').removeClass('pop_open');
            $('.run-line').removeClass('blur');
            $('.run-line1').removeClass('blur');
            $('.first-screen-e').removeClass('blur');
            $('.third-screen-e').removeClass('blur');
            $('.fifth-screen-e').removeClass('blur');
        });
      
        $(window).click(function(event) {
          if (event.target == form[0]) {
            form.css('display', 'none');
            $('body').removeClassClass('pop_open');
            $('.run-line').removeClass('blur');
            $('.run-line1').removeClass('blur');
            $('.first-screen-e').removeClass('blur');
            $('.third-screen-e').removeClass('blur');
            $('.fifth-screen-e').removeClass('blur');
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
