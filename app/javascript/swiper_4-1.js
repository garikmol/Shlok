/**
 * Created by Igor on 21.04.2017.
 */

var swiper4_1 = new Swiper ('.swiper-container4-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    slidesPerView: 4,
    // If we need pagination
    pagination: '.swiper-pagination4-1',
    paginationType: 'progress'
});

var swiper6_1 = new Swiper ('.swiper-container6-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    // If we need pagination
    pagination: '.swiper-pagination6-1',
    paginationType: 'fraction',
    watchSlidesProgress: true,
    nextButton: '.swiper-button-next6-1'

});

var swiper9_1 = new Swiper ('.swiper-container9-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,

    nextButton: '.swiper-button-next9-1',
    prevButton: '.swiper-button-prev9-1',
    effect: 'coverflow',
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows : true}
});

var swiper8_1 = new Swiper ('.swiper-container8-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    //centeredSlides: true,
    spaceBetween: 20,

    containerModifierClass: 'swiper-container8-1-',
    slideClass: 'swiper-slide8-1',
    slideActiveClass: 'swiper-slide-active8-1'

});




