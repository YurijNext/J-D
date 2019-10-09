$(document).ready(function () {

    const key = "AIzaSyA73RoNYapTNYU27z1CptprgIthHMg7Z1w";

    $('.story__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    $('.slick-center').slick({
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
            },
            {
                breakpoint: 768,
                settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.countdown').downCount({
        date: '09/09/2020 12:00:00',
        offset: +10
    }, function () {
        alert('WOOT WOOT, done!');
    });

    firstMap = new google.maps.Map(document.getElementById('address__map--ceremony'), {
        center: {lat: 40.760873, lng: -73.976398},
        zoom: 16
    });

    secondMap = new google.maps.Map(document.getElementById('address__map--reception'), {
        center: {lat: 40.760873, lng: -73.976398},
        zoom: 16
    });
});