$(document).ready(function() {
    //console.log('DOM');

    var arrTodo = [
        "suonare",
        "disegnare",
        "studiare",
        "seguire le mie passioni",
        "leggere",

    ];

    // ciclo array

    for (var i = 0; i < arrTodo.length; i++) {
        var strTodo = arrTodo[i];
        console.log(strTodo);

        //     var strHtml = '<li><p>' + strTodo + '</p> <i class="fas fa-trash-alt"></i> </li>';
        //     $('.app ul').append(strHtml); 
        //stampo a video

        var item = $('.template li').clone();
        $(item).find('.text').append(strTodo);







    }

    //fine prima soluzione
    // soluzione due con js


















});
console.log("#tey")