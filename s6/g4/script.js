$(() => {
    $('#barra').click(function () {
        $(this).animate({
            width: '1000px'
        }, {
            duration: 5000,
            step: function (x) {
                $('#testo').text(Math.round(x * 100 / 1000) + '%')
            }
        })
    })
});