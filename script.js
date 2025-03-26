document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 3000
        });
    });
});
