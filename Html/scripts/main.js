$(document).ready(function() {
    if ($('.menu-responsive').lenght > 0) {
        setMaxHeight($('.menu-responsive'));
    }
    $('.block-bar').click(function() {
        if ($(this).hasClass('change')) {
            $(this).removeClass('change');
            $('.menu-mobile').fadeOut();
        } else {
            $(this).addClass('change');
            $('.menu-mobile').fadeIn();
        }
        $('.menu-responsive').addClass('active');
        $('.menu-container .full-page').addClass('active');
    });
    $('.fechar').click(function() {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });
    $('.menu-responsive .nav-menu ul li a ').click(function() {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });
    $('.menu-container .full-page').click(function() {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });
    window.setTimeout(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 4000);
    $('.owl-beneficios').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false,
        dots: false,
        nav: false,
        margin: 0,
        items: 1,
        center: true,
        nav: true,
        navText: ["<img src='../html/imagens/svg/seta-esq.svg'>", "<img src='../html/imagens/svg/seta-dir.svg'  class='block'>"],
    });
    $('.owl-galeria').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        nav: false,
        margin: 0,
        center: true,
        responsive: {
            0: {
                items: 1.5,
            },
            1024: {
                items: 2.5,
            },
        }
    });
    $('.owl-materiais').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        nav: true,
        navText: ["<img src='../html/imagens/svg/left-arrow.svg'>", "<img src='../html/imagens/svg/right-arrow.svg'  class='block'>"],
        margin: 0,
        center: true,
        items: 1,
    });
    $('.owl-depoimentos').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false,
        dots: false,
        nav: true,
        navText: ["<img src='../html/imagens/svg/left-arrow.svg'>", "<img src='../html/imagens/svg/right-arrow.svg'  class='block'>"],
        margin: 145,
        center: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            450: {
                items: 1.5,
            },
            1024: {
                dots: false,
                nav: true,
                items: 2.5,
            },
        }
    });
    var SPMaskBehavior = function(val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }
      , spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }
    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }
    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('00000');
    }
    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }
    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }
    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }
    $("details").on("click", function() {
        $("details[open]").not(this).removeAttr("open");
    });
    $('.search-bar').on('click', function() {
        $(this).toggleClass("active");
    });
});
