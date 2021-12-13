$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let usCurrentFloor = '';
    let modal = $('.modal');
    let modalClose = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');

    floorPath.on('click', toggleModal);
    modalClose.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
   
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on('click', function () {
        if(currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function () {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }
})