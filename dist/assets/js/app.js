import {CountUp} from './components/countUp.min.js';

let mouseCursor = document.querySelector(".cursor");
let circleText = document.querySelector(".circle");
let imageHover = document.querySelector(".option__elem");
let navLinks = $(".logo, .clients__link, .hover__layer, .link, .option__elem, .option__link, .text__wrapper");
let preloader = $('.preloader');

$(document).ready(function () {

    // Custom Mouse Cursor
    navLinks.mouseenter(function () {
        $('.cursor').addClass("link-grow");
    });

    navLinks.mouseleave(function () {
        $('.cursor').removeClass("link-grow");

    });


    //  Header Hover
    let contactLink = $(".nav__contact");
    let menuLink = $(".nav__menu");

    contactLink.mouseenter(function () {
        $('.circle').addClass("active").addClass("contact");
        $(".cursor").hide();
    });

    contactLink.mouseleave(function () {
        $('.circle').removeClass("active").removeClass("contact");
        $(".cursor").show();

    });

    menuLink.mouseover(function () {
        $('.circle').addClass("active").addClass("open");
    });

    menuLink.mouseout(function () {
        $('.circle').removeClass("active").removeClass("open");
    });

    endPreloader();

});

//  Preloader
function startPreloader() {

    let preloaderImg = $('.preloader .background__wrapper .img__layer div');
    var count = 0;

    setInterval(function () {

        preloaderImg.removeClass('active');

        const currentImg = preloaderImg.get(count);

        $(currentImg).addClass('active');

        if (count !== preloaderImg.length - 1) {
            count++;
        } else {
            count = 0;
        }

    }, 200);


}

startPreloader();

function endPreloader() {

    setTimeout(function () {

        preloader.slideUp(600);
        $('body').removeClass('fixed');


    }, 2000);

}

//3D Intro
(function () {
    // Init
    let container = document.getElementById("container"),
        inner = document.getElementById("floatingBox"),
        image = document.getElementById("second-floating-box");

    // Mouse
    let mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
            let e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    mouse.setOrigin(container);


    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function () {
        return counter++ % refreshRate === 0;
    };

    let onMouseEnterHandler = function (event) {
        update(event);
    };

    let onMouseLeaveHandler = function () {
        inner.style = "",
            image.style = "";
    };

    let onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };


    let update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 1).toFixed(1),
            (mouse.x / inner.offsetWidth / 1).toFixed(1)
        );
    };

    let updateTransformStyle = function (x, y) {
        let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
        image.style.oTransform = style;
        image.style.transform = style
    };


    document.onmousemove = onMouseMoveHandler;
    document.onmouseleave = onMouseLeaveHandler;
    document.onmouseenter = onMouseEnterHandler;
})();

//Parallax Scroll
let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "400%"
    }
});

// get all slides
let scenes;
let slides = document.querySelectorAll("section");

// create scene for every slide
for (let i = 0; i < slides.length; i++) {

    let currentMask = $(slides[i]).find('.scroll__mask');

    var maskTween = new TimelineMax();
    maskTween.fromTo(currentMask, 1, {opacity:0}, {opacity:2});

    scenes = new ScrollMagic.Scene({
        triggerElement: slides[i],
    }).setTween(maskTween)
        //.addIndicators()
        .setPin(slides[i], {pushFollowers: false})
        .addTo(controller);
}

let slideOffsets = [];

for (let i = 0; i < scenes.length; i++) {
    scenes[i].removePin(true);
    scenes[i].setPin(slides[i]);
    scenes[i].refresh();
    slideOffsets.push(Math.ceil(scenes[i].scrollOffset()));
}

// Config Section
const configOptionElemSelector = '.config .option__elem';
const configImgWrapperSelector = '.config .img__wrapper';

$(document).on('click', configOptionElemSelector, function (e) {

    e.preventDefault();
    const thisId = $(this).data('id');
    $(configImgWrapperSelector).removeClass('active');
    $(configImgWrapperSelector + '[data-id="' + thisId + '"]').addClass('active');
    $(configOptionElemSelector).removeClass("active");
    $(this).addClass("active");

});

window.addEventListener("mousemove", cursor);
window.addEventListener("scroll", cursor);

function cursor(e) {

    mouseCursor.style.top = e.pageY - $(window).scrollTop() + "px";
    mouseCursor.style.left = e.pageX + "px";

    circleText.style.top = e.pageY - $(window).scrollTop() + "px";
    circleText.style.left = e.pageX + "px";
}


// Slider [team section]
let teamlider = new Swiper('.team .swiper-container', {
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 4,
    navigation: {
        nextEl: '.team .swiper-button-next',
        prevEl: '.team .swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 1,
        },
    }
});

//Team Section (Animation)
let sliderAnimation = $(".img__wrapper-hidden");

sliderAnimation.mouseenter(function () {
    $(".img__wrapper-hidden").addClass("active");

});

sliderAnimation.mouseleave(function () {
    $(".img__wrapper-hidden").removeClass("active");
});

//Counter
const options = {
    startVal: 1000034223,
    duration: 14400,
};
let demo = new CountUp('viewers__count', 1005034223, options);

if (!demo.error) {
    demo.start();
} else {
    console.error(demo.error);
}

let demoSec = new CountUp('counter', 100);
if (!demoSec.error) {
    demoSec.start();
} else {
    console.error(demo.error);
}