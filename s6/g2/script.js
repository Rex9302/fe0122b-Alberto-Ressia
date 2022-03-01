$(() =>{
    $('h2').click(function(){
        $(this).next().toggle().prev().toggleClass('meno')
    })
});