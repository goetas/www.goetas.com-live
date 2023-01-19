"use strict";
jQuery(document).ready(function ($) {

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

// slick slider active Home Page Tow
    $("#hello_slid").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });

//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $('ul.contact-list, a.cvlink, .navbar-socail ul.list-inline, .widget_newsletter ul.list-inline, .widget_ab_item_text a, .navbar-callus a').mousedown(function(event) {
        var value = event.target.outerHTML.trim();

        var found;
        if (found = value.match(/fa-([a-z]+)/)){
            value = found[1];
        } else if (found = value.match(/([a-z]+@[a-z\.]+)/)){
            value = 'envelope';
        } else if (found = value.match(/(linkedin|skype|email|twitter|github|envelope|cvlink)/)){
            value = found[1];
        } else if (value.match(/([0-9]{4,})/)){
            value = 'phone';
        }

        if(typeof (ga) !== 'undefined') ga('send', 'event', 'click', 'contact', value);
    });
    //End

});



