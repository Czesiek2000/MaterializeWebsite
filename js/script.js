$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.carousel').carousel();

    $('#textarea1').val('');
    M.textareaAutoResize($('##textarea2'));

    $('select').formSelect();
});
