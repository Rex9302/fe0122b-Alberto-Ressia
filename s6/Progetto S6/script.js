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

        if (segna < 8) {

            var counter = $('#clicks').text()
            counter++
            $('#clicks').text(counter)

            if (immaginiCliccate.length < 2) {

                $(this).children().animate({ opacity: '1' })
                $(this).addClass('disabilita')             

                let imgID = $(this).children().attr('id')
                let imgSrc = $(this).children().attr('src')

                let infoImg = { id: imgID, src: imgSrc }

                immaginiCliccate.push(infoImg)


                if (immaginiCliccate.length == 2) {
                    if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                        $('#' + immaginiCliccate[0].id).css('background-color', 'turquoise')
                        $('#' + immaginiCliccate[1].id).css('background-color', 'turquoise')
                        segna++
                        console.log(segna)
                        immaginiCliccate = [];

                    } else {
                        setTimeout(function () {
                            $('#' + immaginiCliccate[0].id).animate({ opacity: '0' })
                            $('#' + immaginiCliccate[1].id).animate({ opacity: '0' })
                            $('.images').removeClass('disabilita')
                            immaginiCliccate = [];
                        }, 800)
                    }
                }
            }

        } if (segna == 8) {
            $('#pulsanti').css('display', 'flex')
            $('#punteggio-finale').text(counter)
        }
    })

    //funzione reset sperimentale

    $('#reset').click(function () {
        location.reload();
    })



});