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
                }, 1000, "easeInOutExpo");
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


var h = document.documentElement.clientHeight;
var p = window.pageYOffset;
var scrolled;
var five = 5 * h;
var seven = 7 * h;
var eight = 8 * h + 0.5 * h;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > (h/2)) {
        $('.fa-chevron-up').css({
            display: 'flex'
        });
    }
    if (scrolled > h) {
        $(".share_box").css({
            color: "#A7A9AC"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_gray@2x.png)',
            border: '2px solid #A7A9AC'
        });
        $('.fa-chevron-up').css({
            display: 'flex'
        });
    }
    if (h > scrolled) {
        $(".share_box").css({
            color: "white"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_img@2x.png)',
            border: '2px solid white'
        });
        $('.fa-chevron-up').css({
            display: 'none'
        });

    }
    if (scrolled > five) {
        $(".share_box").css({
            color: "white"
        });
        $(".menu").css({
            display: "flex"
        });
        $(".f").css({
            'background-image': 'url(img/f_img@2x.png)',
            border: '2px solid white'
        });
    }
    if (scrolled > seven) {
        $(".menu").css({
            display: "flex"
        });
        $(".share_box").css({
            color: "#A7A9AC"
        });
        $(".f").css({
            'background-image': 'url(img/f_gray@2x.png)',
            border: '2px solid #A7A9AC'
        });
    }
    if (scrolled > eight) {
        $(".menu").css({
            display: "none"
        })
    }

}
$(document).ready(function () {
    $('.fa-chevron-down').click(function () {

        var win = $(window).scrollTop() + $(window).innerHeight();
        $('body,html').animate({
            scrollTop: win
        }, 1000);
        return false;
    });
    $('.fa-chevron-up').click(function () {

        var win = $(window).scrollTop() - $(window).innerHeight();
        $('body,html').animate({
            scrollTop: win
        }, 1000);
        return false;
    });

})
