
$(document).ready(function(){

    //первый 

    $(".but-about").mouseenter(function () {

        $('.image-color-about, .photo-cloud1, .photo-cloud2').fadeOut(400);

    });

    $(".but-about").mouseleave(function () {

        $('.image-color-about, .photo-cloud1, .photo-cloud2').fadeIn(400);

    });


    //второй
    $(".but-event").mouseenter(function () {

        $('.image-color-event, .photo-cloud3').fadeOut(400);
        $('.oe').css("color", '#1F598D');

    });

    $(".but-event").mouseleave(function () {

        $('.image-color-event, .photo-cloud3').fadeIn(400);
        $('.oe').css("color", '#FFFFFF');

    });


    //третий
    $(".but-shop").mouseenter(function () {

        $('.image-color-shop, .photo-cloud4, .photo-cloud5').fadeOut(400);
        $('.os').css("color", '#FFFFFF');

    });

    $(".but-shop").mouseleave(function () {

        $('.image-color-shop, .photo-cloud4, .photo-cloud5').fadeIn(400);
        $('.os').css("color", '#1F598D');

    });
    

});
