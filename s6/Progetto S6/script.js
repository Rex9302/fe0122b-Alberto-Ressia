$(() => {

    const mieImg = ["dinosaur", "dragon", "dragonfly", "kangaroo", "reindeer", "shark", "squid", "whale", "dinosaur", "dragon", "dragonfly", "kangaroo", "reindeer", "shark", "squid", "whale"];

    for (var i = 0; i < 16; i++) {

        let random = Math.floor(Math.random() * mieImg.length);
        let imgEliminata = mieImg.splice(random, 1);

        $('<div class="images" id="origami' + i + '" > <img id="' + i + '" src="img/' + imgEliminata + '.png" width="130" height="130" /></div>')
            .appendTo('#memory')
    }


    let immaginiCliccate = []
    let segna = 0 //counter per il reset

    $('.images').click(function () {

        let audio = $("#mysoundclip")[0];
        audio.play();

        if (segna < 8) {

            var counter = $('#clicks').text()
            counter++
            $('#clicks').text(counter)

            if (immaginiCliccate.length < 2) {

                $(this).children().animate({ opacity: '1' })
                $(this).addClass('disabilita')
                $(this).children().css('background-color', 'Tomato')

                let imgID = $(this).children().attr('id')
                let imgSrc = $(this).children().attr('src')

                let infoImg = { id: imgID, src: imgSrc }

                immaginiCliccate.push(infoImg)


                if (immaginiCliccate.length == 2) {
                    if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                        $('#' + immaginiCliccate[0].id).css('background-color', 'turquoise')
                        $('#' + immaginiCliccate[1].id).css('background-color', 'turquoise')
                        segna++

                        let audio1 = $("#success")[0];
                        audio1.play();


                        immaginiCliccate = [];

                    } else {
                        setTimeout(function () {
                            $('#' + immaginiCliccate[0].id).animate({ opacity: '0' }).parent().removeClass('disabilita')
                            $('#' + immaginiCliccate[1].id).animate({ opacity: '0' }).parent().removeClass('disabilita')
                            immaginiCliccate = [];
                        }, 1000)
                    }
                }
            }

        } if (segna == 8) {
            $('#pulsanti').css('display', 'flex')
            let audio = $("#win")[0];
            audio.play();

            if (counter == 16) {
                $('#punteggio-finale').text(counter + ' Partita perfetta!')
            }
            if (counter > 16 && counter < 30) {
                $('#punteggio-finale').text(counter + ' Buona partita!')
            }
            if (counter > 30) {
                $('#punteggio-finale').text(counter + ' Puoi fare di meglio!')
            }
        }
    })

    //funzione reset sperimentale

    $('#reset').click(function () {
        location.reload();
    })

    //tempo

    var t = 0
    setInterval(function () {
        if (segna < 8) {
            $("#tempo").text(t + ' secondi');
            t++;
        } else {
            stop()
        }

    }, 1000);

});