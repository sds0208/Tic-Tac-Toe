var counter = 1;

$(".item").click(function(){

    if (counter % 2 === 1)  {
        $(this).html('X');
    }
    if (counter % 2 === 0) {
        $(this).html('O');
    }

    counter++;
});


$(".clearButton").click(function()  {
    $(".item").html('');
});
