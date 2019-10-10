$(document).ready(function () {

    $('.story__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        infinite: true
    });

    $('.slick__slider').slick({
        centerMode: true,
        centerPadding: '100px',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true ,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
        ]
    });

    (function slidesPugination() {
        const   pagcurrentSlide = $('.current-slide'),
                pagAllSlides = $('.all-slides'),
                sliderItem = $('.slider__item'),
                slickArrow = $('.slick-arrow'),
                lastItemData = sliderItem.last().attr('data-id');

        pagAllSlides.html(lastItemData);

        slickArrow.on('click', function() {
            pagcurrentSlide.html($('.slick-current').last().attr('data-id'));
        })
        
    }())


    $('.countdown').downCount({
        date: '09/25/2020 12:00:00',
        offset: +10
    }, function () {
        alert('WOOT WOOT, done!');
    });


// Inite Yandex Maps
    (function initeMap() {

        let ceremonyMap,
        receptionMap;

        ymaps.ready(init);

        function init () {

            ceremonyMap = new ymaps.Map('address__map--ceremony', {
                    center: [40.760873, -73.976398],
                    zoom: 17,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                })

                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),
                
                myPlacemark = new ymaps.Placemark(ceremonyMap.getCenter(), {
                    hintContent: 'Mark',
                    balloonContent: 'Mark'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/map/icon.png',
                    iconImageSize: [63, 83],
                }),

                ceremonyMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
            
            ceremonyMap.geoObjects
                .add(myPlacemark);




            receptionMap = new ymaps.Map('address__map--reception', {
                    center: [40.760873, -73.976398],
                    zoom: 17,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });

                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),
                
                myPlacemark = new ymaps.Placemark(receptionMap.getCenter(), {
                    hintContent: 'Mark',
                    balloonContent: 'Mark'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/map/icon.png',
                    iconImageSize: [63, 83],
                }),

                receptionMap.panes.get('ground').getElement().style.filter = 'grayscale(80%)';

            receptionMap.geoObjects
                .add(myPlacemark);
        }

    }());


});