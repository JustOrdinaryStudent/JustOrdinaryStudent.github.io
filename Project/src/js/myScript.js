//Отложенная анимация +

$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.opacity-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-opacity-animation');
            }
        });
    }
});

//Loader. Исчезновение после загрузки +

$(document).ready(function () {
    $(".loaderArea").css("display", "none")

    //Модальное окно с таймером    

    function onPopupOpen() {
        $(".modal-content").show();
        $("#register-your-email").focus();
    }

    function onPopupClose() {
        $(".modal-content").hide();
    }

    setTimeout(function () {
        function displayPopup() {
            $.colorbox({
                inline: true,
                fixed: true,
                href: ".modal-content",
                className: "cta",
                onComplete: onPopupOpen,
                onClosed: onPopupClose
            });
        }
        displayPopup();
    }, 5000);

    // var lastFocus;
    //var popupShown = Cookies.get('colorboxShown');

    //if (popupShown) {
    //  console.log("Cookie found. No action necessary");
    //  $(".clear-cookie").show();
    //} else {
    //  console.log("No cookie found. Opening popup in 3 seconds");
    //  $(".clear-cookie").hide();
    // setTimeout(function() {
    //    lastFocus = document.activeElement;
    //    displayPopup();
    //  }, 500);
    //}


    // Навигационная панель. Присвоение класса "active", при перемещении в другие "section"-ы  + 

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });

    });
});

//Модальные изображения +

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });
});

//Карусель для отзывов +

$(document).ready(function () {
    $('.review-slick').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnDotsHover: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
});

// Якорные ссылки и отступ при скроллинге +

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 50 + "px"
        });
    });
});


//Анимация чисел в статистике +

$(document).ready(function () {

    var show = true;
    var countbox = "#stat-itm";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.number_animation').css('opacity', '1');
            $('.number_animation').spincrement({
                thousandSeparator: "",
                duration: 10000
            });

            show = false;
        }
    });

});


//если убрать это правило и раскомментить link и script в html, то можно подключить fotorama 

/*
    $('.fotorama').slick({
        dots: true,
        infinite: false,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        focusOnSelect: true,
    });
*/
