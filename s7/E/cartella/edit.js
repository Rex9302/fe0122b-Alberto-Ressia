    let param = new URLSearchParams(location.search)
    let id = param.get('id')

    fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {var ciao = (data)

    let utente = ciao.find(u => u.id == id)
    document.querySelector('#newNome').placeholder = utente.name
    document.querySelector('#newMail').placeholder = utente.email
    document.querySelector('#newLn').placeholder = utente.lastname
    document.querySelector('#newRoleId').placeholder = utente.role_id 
    document.querySelector('#newPw').value = utente.password

    document.querySelector('#boh').addEventListener('click', function () {
        
    let newNome = document.querySelector('#newNome').value
    let newLn = document.querySelector('#newLn').value
    let newMail = document.querySelector('#newMail').value
    let newPw = document.querySelector('#newPw').value
    let newRoleID = document.querySelector('#newRoleId').value

       console.log(newNome)  
       console.log(newLn)  
        fetch(
            'https://sofin.wp-admin.it/public/api/v1/user/' + utente.id, 
            {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name : newNome,
                    lastname : newLn,
                    email : newMail,
                    role_id : newRoleID,
                    password : newPw
                }),
            }
        )
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                icon: 'success',
                title: 'Ottimo!',
                text: 'Utente' + utente.id+' Aggiornato!',
              })
        })


    })


})