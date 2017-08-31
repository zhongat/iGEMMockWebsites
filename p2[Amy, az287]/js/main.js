$(document).ready(function () {
    $('#cc_img1').click(function () {
       $('#cc_p1').fadeToggle('slow'); 
    });
    
    $('#cc_img2').click(function () {
       $('#cc_p2').fadeToggle('slow'); 
    });
    
    $('.mod1 img').hover(function () {
        $('.mod1 img').stop().animate({opacity: 0.7}, function () {
            $('.mod_caption1 p').css("display", "block");
        });
    }, function () {
        $('.mod1 img').stop().animate({opacity: 1.0}, function () {
            $('.mod_caption1 p').css("display", "none");
        });
    });
    
    $('.mod_2 img').hover(function () {
        $('.mod_2 img').stop().animate({opacity: 0.7}, function () {
            $('.mod_caption2 p').css("display", "block");
        });
    }, function () {
        $('.mod_2 img').stop().animate({opacity: 1.0}, function () {
            $('.mod_caption2 p').css("display", "none");
        });
    });
    
    $('.mod3 img').hover(function () {
        $('.mod3 img').stop().animate({opacity: 0.7}, function () {
            $('.mod_caption3 p').css("display", "block");
        });
    }, function () {
        $('.mod3 img').stop().animate({opacity: 1.0}, function () {
            $('.mod_caption3 p').css("display", "none");
        });
    });
});