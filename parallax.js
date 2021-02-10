(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1500, "easeInOutExpo");
                return false;
            }
        }
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 50
    });


})(jQuery);

$(document).ready(function () {
    $('.fa-chevron-down').click(function () {

        var win = $(window).scrollTop() + $(window).innerHeight();
        var ph = $(window).scrollTop() + document.getElementById('flow').clientHeight;
        $('body,html').animate({
            scrollTop: ph
        }, 1500);
        return false;
    });
    $('.fa-chevron-up').click(function () {

        var win = $(window).scrollTop() - $(window).innerHeight();
        var ph = $(window).scrollTop() - document.getElementById('flow').clientHeight;
        $('body,html').animate({
            scrollTop: ph
        }, 1500);
        return false;
    });

})
