$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close5").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header").addClass("fixshow");
            $(".about").addClass("spacetop");
        } else {
            $(".header").removeClass("fixshow");
            $(".about").removeClass("spacetop");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});


// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});

// modal
$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});
$('.modal-toggle2').on('click', function(e) {
    e.preventDefault();
    $('.modal2').toggleClass('is-visible2');
});


(function($) {
    var customSelect = $('select.custom-select');
    customSelect.each(function() {
        var that = $(this);
        var listID = that.attr('id'),
            groups = that.children('optgroup'),
            theOptions = "",
            startingOption = "",
            customSelect = "";
        if (groups.length) {
            groups.each(function() {
                var curGroup = $(this);
                var curName = curGroup.attr('label');
                theOptions += '<li class="optgroup">' + curName + '</li>';
                curGroup.children('option').each(function() {
                    var curOpt = $(this);
                    var curVal = curOpt.attr('value'),
                        curHtml = curOpt.html(),
                        isSelected = curOpt.attr('selected');
                    if (isSelected === 'selected') {
                        startingOption = curHtml;
                        theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                    } else {
                        theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                    }
                });
            });
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                } else {
                    theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                }
            });
        } else {
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                } else {
                    theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                }
            });
        }
        customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->';
        $(customSelect).insertAfter(that);
    });

    var selectdd = $('.dropdown-select'),
        selectul = $('.dropdown-select-ul'),
        selectli = $('.dropdown-select-ul li');

    selectdd.on('click', function() {
        $(this).parent('.dropdown-container').toggleClass('active');
    });
    selectul.on('mouseleave', function() {
        $(this).parent('.dropdown-container').removeClass('active');
    });
    selectli.on('click', function() {
        var that = $(this);
        if (!that.hasClass('optgroup')) {
            var parentUl = that.parent('ul'),
                thisdd = parentUl.siblings('.dropdown-select'),
                lihtml = that.html(),
                livalue = that.attr('data-value'),
                originalSelect = '#' + parentUl.attr('data-role');
            parentUl.parent('.dropdown-container').toggleClass('active');
            that.siblings('li').removeClass('selected');
            that.addClass('selected');
            $(originalSelect).val(livalue);
            thisdd.children('span').html(lihtml);
        }
    });
})(jQuery);

// pagination
jQuery(function($) {
    var items = $("#content div.card");
    var numItems = items.length;
    var perPage = 6;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
jQuery(function($) {
    var items = $("#content1 div.card1");
    var numItems = items.length;
    var perPage = 18;
    items.slice(perPage).hide();

    $(".pagination-vip1").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
// 
jQuery(function($) {
    var items = $("#contentt div.cardd");
    var numItems = items.length;
    var perPage = 12;
    items.slice(perPage).hide();

    $(".pagination-vipp").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
jQuery(function($) {
    var $items = $(".sectiont3__wrap .sectiont3__item");
    var $btns = $(".sectiont3__filter button").on("click", function() {
        var active = $btns.
        removeClass("current").
        filter(this).
        addClass("current").
        data("filter");
        $items.
        hide().
        filter("." + active).
        fadeIn(450);
    });
});
var $swiper = $(".slide3");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide3", {
    slidesPerView: 2.8,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    // loop: true,
    loopAdditionalSlides: 10,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        500: {
            slidesPerView: 1.1,
        },
        640: {
            slidesPerView: 2.8,
        },
        860: {
            slidesPerView: 1.5,
        },
        900: {
            slidesPerView: 1.7,
        },
        1024: {
            slidesPerView: 2.8,
        },
        1366: {
            slidesPerView: 2.5,
        },
        1600: {
            slidesPerView: 2.8,
        },
        1920: {
            slidesPerView: 3.5,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var $swiper = $(".slide2");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide2", {
    slidesPerView: 1,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 10,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// magnify pop up
jQuery(document).ready(function($) {
    var popup = {
        init: function() {
            popup.popupVideo();
        },
        popupVideo: function() {

            $('.video_model').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            });
        }
    };

    popup.init($);
});