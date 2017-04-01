// Cache
var body = $('body');
var imageCarousel = $('.img-carousel');
var partnersCarousel = $('#partners');
var testimonialsCarousel = $('#testimonials');
var testimonialsCarouselAlt = $('#testimonials-alt');
var carCarousel = $('.car-carousel');
var topProductsCarousel = $('#top-products-carousel');
var featuredProductsCarousel = $('#featured-products-carousel');
var sidebarProductsCarousel = $('#sidebar-products-carousel');
var hotDealsCarousel = $('#hot-deals-carousel');
var owlCarouselSelector = $('.owl-carousel');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var hover = $('.thumbnail');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');

// Slide in/out with fade animation function
jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
//
jQuery.fn.slideFadeIn = function(speed, easing, callback) {
    return this.animate({opacity: 'show', height: 'show'}, speed, easing, callback);
};
jQuery.fn.slideFadeOut = function(speed, easing, callback) {
    return this.animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
};

jQuery(document).ready(function () {
    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header.fixed').sticky({topSpacing:0});
        //$('.header.fixed').on('sticky-start', function() { console.log("Started"); });
        //$('.header.fixed').on('sticky-end', function() { console.log("Ended"); });
    }
    // SuperFish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').on('click', function(){
        body.scrollspy('refresh');
    });
    // Fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    //
    if ($('.content-area.scroll').length) {
        $('.open-close-area').on('click', function () {
            if ($('.wrapper').hasClass('opened')) {
                $('.wrapper').removeClass('opened').addClass('closed');
            } else {
                $('.wrapper').removeClass('closed').addClass('opened');
            }
        });
    }
    // Smooth scrolling
    // ----------------------------------------------------------------------------------------

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    if ($().prettyPhoto) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }
    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({bottom: '15px'});
        } else {
            toTop.css({bottom: '-100px'});
        }
    });
    toTop.on('click', function(){
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
    // Add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    /*hover.on('hover',
     function () {
     $(this).addClass('hover');
     },
     function () {
     $(this).removeClass('hover');
     }
     );*/
    // Ajax / load external content in tabs
    // ---------------------------------------------------------------------------------------

    // Sliders
    // ---------------------------------------------------------------------------------------
    if ($().owlCarousel) {
        var owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', function(e) {
            // update prettyPhoto
            if ($().prettyPhoto) {
                $("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: 'dark_square'
                });
            }
        });
        // Sidebar products carousel

        // Partners carousel

        // Testimonials carousel

        // Testimonials carousel alt version

        // Images carousel
        if (imageCarousel.length) {
            imageCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
        // Car carousel
        if (carCarousel.length) {
            carCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 2},
                    991: {items: 3},
                    1024: {items: 3}
                }
            });
        }
        // on tab click
    }
    // Sliders
    // ---------------------------------------------------------------------------------------

    // Ripple effect on click for buttons
    // ---------------------------------------------------------------------------------------
    updater();
});

jQuery(window).load(function () {
    // Preloader
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(200);
    // Scroll to hash
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            body.delay(0).animate({
                scrollTop: jQuery(hash).offset().top
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
    updater();
});

function updater() {

    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
}

jQuery(window).resize(function () {
    if ($().isotope) {
        isotopeContainer.isotope('reLayout'); // layout/relayout on window resize
    }
    updater();
});

jQuery(window).scroll(function () {
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});