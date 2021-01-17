$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    })

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }
    }

    /*nav toggle*/
let nav=$("#nav");
let navToggle=$("#navToggle")
    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    })


});