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


var h = document.documentElement.clientHeight;
//var ph = document.getElementsByClassName("page1").clientHeight;
var ph = document.getElementById('flow').clientHeight;

console.log(ph);
var p = window.pageYOffset;
var scrolled;
var two = ph;
var three = 2 * ph;
var four = 4 * ph;
var five = 5 * ph;
var six = 6 * ph;
var seven = 7 * ph;
var eight = 8 * ph + 0.5 * h;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > (ph / 2)) {
        $('.fa-chevron-up').css({
            display: 'flex'
        });
    }
    if (scrolled > ph) {
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
    if (ph > scrolled) {
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
    if (scrolled > ph) {
        $('.fix_cow').addClass('fix_cow_p3')
    }
    if (scrolled < three) {
        $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10')
    }

    if (scrolled > four) {
       
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),
            $('.fix_cow').addClass('fix_cow_p6')
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
        $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),
            $('.fix_cow').addClass('fix_cow_p7')
    }
    if (scrolled > six) {
        $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').removeClass('fix_cow_p10'),
            $('.fix_cow').addClass('fix_cow_p8')
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
        $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p10'),
            $('.fix_cow').addClass('fix_cow_p9')
    }
    if (scrolled > eight) {
        $(".menu").css({
            display: "none"
        });
        $('.fix_cow').removeClass('fix_cow_p3'),
            $('.fix_cow').removeClass('fix_cow_p6'),
            $('.fix_cow').removeClass('fix_cow_p7'),
            $('.fix_cow').removeClass('fix_cow_p8'),
            $('.fix_cow').removeClass('fix_cow_p9'),
            $('.fix_cow').addClass('fix_cow_p10')
    }

}
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
