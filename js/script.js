$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.tooltipped').tooltip();

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.carousel').carousel();

    $('.year').text(new Date().getFullYear())
});
