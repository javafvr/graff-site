



// делаете переменную в начале кода
var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
    if ($('body').width() <= 400) {
        isMobile = true;
    }
    // и потом если нужен код только для телефона:
    if (isMobile) {

    }
    // или для остальных
    if (!isMobile) {
        const tilt = $('.js-tilt').tilt();
        $('.js-destroy').on('click', function () {
            const element = $(this).closest('.js-parent').find('.js-tilt');
            element.tilt.destroy.call(element);
        });

        $('.js-getvalue').on('click', function () {
            const element = $(this).closest('.js-parent').find('.js-tilt');
            const test = element.tilt.getValues.call(element);
            console.log(test[0]);
        });

        $('.js-reset').on('click', function () {
            const element = $(this).closest('.js-parent').find('.js-tilt');
            element.tilt.reset.call(element);
        });
    }
} );