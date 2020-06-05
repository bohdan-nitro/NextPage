$(document).ready(function () {

    // Custom Mouse Cursor

    let mouseCursor = document.querySelector(".cursor");
    let circleText = document.querySelector(".circle");
    let imageHover = document.querySelector(".option__elem");
    let navLinks = $(".logo, .clients__link, .hover__layer, .link, .option__elem, .option__link, .text__wrapper");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";

        circleText.style.top = e.pageY + "px";
        circleText.style.left = e.pageX + "px";

    }

    navLinks.mouseenter(function () {
        $('.cursor').addClass("link-grow");


    });

    navLinks.mouseleave(function () {
        $('.cursor').removeClass("link-grow");

    });


    //  Header Hover
    let contactLink = $(".nav__contact");
    let menuLink =  $(".nav__menu");

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


});

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
        updatePosition: function(event) {
            let e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    mouse.setOrigin(container);


    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
    };

    let onMouseEnterHandler = function(event) {
        update(event);
    };

    let onMouseLeaveHandler = function() {
        inner.style = "",
            image.style = "";
    };

    let onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };


    let update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 1).toFixed(1),
            (mouse.x / inner.offsetWidth / 1).toFixed(1)
        );
    };

    let updateTransformStyle = function(x, y) {
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

    // let controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave',
    //         duration: "600%"
    //
    //     }
    // });
    //
    // // get all slides
    // let scenes;
    // let slides = document.querySelectorAll("section");
    //
    // // create scene for every slide
    // for (let i=0; i<slides.length; i++) {
    //     scenes = new ScrollMagic.Scene({
    //         triggerElement: slides[i]
    //     })
    //         .setPin(slides[i], {pushFollowers: false})
    //         .addTo(controller);
    // }
    //
    // $(window).on("resize", function() {
    //     let slideOffsets = [];
    //     for (let i = 0; i < scenes.length; i++) {
    //         scenes[i].removePin(true);
    //         scenes[i].setPin(slides[i]);
    //         scenes[i].refresh();
    //         slideOffsets.push(Math.ceil(scenes[i].scrollOffset()));
    //     }
    // });







// navLinks.forEach(link => {
    //     link.addEventListener("mouseleave", () => {
    //         mouseCursor.classList.remove("link-grow");
    //         link.classList.remove("hovered-link");
    //         imageHover.classList.remove("hovered-link");
    //     });
    //     link.addEventListener("mouseover", () => {
    //         mouseCursor.classList.add("link-grow");
    //         link.classList.add("hovered-link");
    //         imageHover.classList.add("hovered-link");
    //     });
    //
    //
    // });

    // Config Section
    const configOptionElemSelector = '.config .option__elem';
    const configImgWrapperSelector = '.config .img__wrapper';

    $(document).on('click', configOptionElemSelector, function (e) {

        e.preventDefault();
        const thisId = $(this).data('id');
        $(configImgWrapperSelector).removeClass('active');
        $(configImgWrapperSelector + '[data-id="' + thisId + '"]').addClass('active');

    });




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




