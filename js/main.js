$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let modal = $('.modal');
    let modalClose = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');

    let flat = $('.flats path');
    let description = $('.flat-number');
    let linkFlat = $('.flat-link');
    
    //при наведении на схему квартиры
    flat.on('mouseover', function () {
        currentFlat = $(this).attr('data-flat');
        for (let el of description) {
            if (el.parentNode.classList.contains('flat-link-jhover')) {
                el.parentNode.classList.toggle('flat-link-jhover');
            }
            if (el.innerHTML === currentFlat) {
                el.parentNode.classList.toggle('flat-link-jhover');             
            }
        }
    })

    flat.on('mouseout', function () {
        for (let el of description) {
            if (el.parentNode.classList.contains('flat-link-jhover')) {
                el.parentNode.classList.toggle('flat-link-jhover');
            }
        }
    })

    // при наведении на ссылку с описанием квартиры
    linkFlat.on('mouseover', function () {
        currentLink = $(this).children()[0].innerHTML
        for (let el of flat) {
            if (el.getAttribute('data-flat') === currentLink) {
                el.classList.toggle('flats-jhover');
            }
        }
    })

    linkFlat.on('mouseout', function () {
        for (let el of flat) {
            if (el.classList.contains('flats-jhover')) {
                el.classList.toggle('flats-jhover');
            }
        }
    })

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