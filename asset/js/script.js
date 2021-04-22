$(document).ready(function() {
    //console.log('DOM');

    var arrTodo = [
        "suonare",
        "disegnare",
        "studiare",
        "seguire le mie passioni",
        "leggere",
        "documentarmi"

    ];

    // ciclo array

    for (var i = 0; i < arrTodo.length; i++) {
        var strTodo = arrTodo[i];
        //console.log(strTodo);

        //     var strHtml = '<li><p>' + strTodo + '</p> <i class="fas fa-trash-alt"></i> </li>';

        //stampo a video

        var item = $('.template li').clone();
        $(item).find('.text').append(strTodo);

        $('.app ul').append(item);

    }




    //ricarico la pagina del dom//
    $(document).on('click', '.fa-trash-alt', function() {

        console.log(this); //sto puntando l'oggetto al riavvio del dom
        $(this).parent().remove();


    });

    $('.app input').keyup(function(event) {
        console.log(event.which); //intercetto i tasti scritti //il tasto invio corrisponde al 13
        if (event.which === 13) {
            console.log($('.app input').val()); //stampo alla consol.log l'imput inserito
            if ($(this).val().length > 3) {
                //console.log($(this).val());
                var item = $('.template li').clone();
                $(item).find('.text').append($(this).val());

                $('.app ul').append($(item));

            }
        }
    });



















});
//console.log("#tey")