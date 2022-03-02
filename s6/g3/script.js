$(() => {

    var carosello = $('#img-l')
    var count = $("#img-l li").length;
    var l = $('#img-l li').css('width')
    var lP = parseInt(l)
    var w = (count - 1) * lP

    $('#r-btn').click(function () {
        
        let lProp = carosello.css('left')
        let left = parseInt(lProp)
        $('#r-btn').addClass('disable')

        if (left <= -w) {
            carosello.animate({ left: 0 }, 1000, function(){
                $('#r-btn').removeClass('disable')
            })
        } else {
            carosello.animate({ left: '-=' + lP }, 1000, function(){
                $('#r-btn').removeClass('disable')
            })
            
        }
    });

    $('#l-btn').click(function () {

        let lProp = carosello.css('left')
        let left = parseInt(lProp)
        $('#l-btn').addClass('disable')

        if (left == 0) {
            carosello.animate({ left: '-=' + w }, 1000, function(){
                $('#l-btn').removeClass('disable')
            })
        } else {
            carosello.animate({ left: '+=' + lP }, 1000, function(){
                $('#l-btn').removeClass('disable')
            })
        }
    });


});