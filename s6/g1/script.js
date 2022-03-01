// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
$(() =>{

    $('#iscr-news').click(() =>{


        let nome = $('#nome')
        let email1 = $('#email-1')
        let email2 = $('#email-2')


        if( nome.val() != ''){
            verifica = true
        }else{
            $('#nome').next().text('Campo Richiesto')
            verifica = false
        }

        if( email1.val() != ''){
            verifica = true
            }else{
                $('#email-1').next().text('Campo Richiesto')
                verifica = false
            }

            if( email2.val() != ''){
                verifica = true
                }else{
                    $('#email-2').next().text('Campo Richiesto')
                    verifica = false
                }


        if(email1.val() != email2.val() || verifica == false ){
            $('#email-1, #email-2').next().text('I campi email devono combaciare')
                verifica = false
            }else{
                verifica = true
            }
           
        
        if (verifica == false){
            console.log('Controlla i campi')
        }else {
            $('form').submit()
            console.log('Dati inviati')
        }

    });

    $('#pulisci-form').click(()=>{
        let nome = $('#nome')
        let email1 = $('#email-1')
        let email2 = $('#email-2')
        
        nome.val('').next('').text('*')
        email1.val('').next('').text('*')
        email2.val('').next('').text('*')
        verifica = true
    });


})