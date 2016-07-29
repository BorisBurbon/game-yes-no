/**
 * Created by admin on 27.07.2016.
 */
<!--menu-->

$(document).ready(function () {
    var menu = $(".navbar-menu");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && menu.hasClass("default")) {
            menu.removeClass("default").addClass("bg-black");
        } else if ($(this).scrollTop() <= 100 && menu.hasClass("bg-black")) {
            menu.removeClass("bg-black").addClass("default");
        }
    });
});


$(".navbar-toggle.desktop").click(function () {
    $(".navbar-menu").toggleClass("opacity");
});
