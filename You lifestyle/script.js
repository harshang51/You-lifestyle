$(document).ready(function(){
    $(".loader").fadeOut("slow");
});

$(window).on('load', function(){

    $('#menu__open').click(function(){
        $('.navbar__links').addClass('active');
        
    });
    $('#menu__close').click(function(){
        $('.navbar__links').removeClass('active');
    });
    
});

$('body').on('scroll', function(){
    if($("body").scrollTop()>=60 && !$('.navbar').hasClass('shadow')){
        $('.navbar').addClass('shadow');
    }else if($('body').scrollTop()<60 && $('.navbar').hasClass('shadow')){
        $('.navbar').removeClass('shadow');
    }
})