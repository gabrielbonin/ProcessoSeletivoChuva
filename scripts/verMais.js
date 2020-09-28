// const vermais = () => {

//     $("#labelVermais").toggle(function() {
//         $(this).text("anterior").siblings("#texto-continuacao").show();
//     }, function() {

//         $(this).text("ver mais").siblings("#texto-continuacao").hide();
//     });

// }
// $(document).ready(function() {
//     exibirTexto();

// });


const exibirTexto = () => {
    console.log("09")
    $("#texto-inicial").hide();
    $("#texto-full").show();
    if ($("texto-full").hide()) {
        // $("#texto-full").show();
        $("#labelVermais").text('ver menos');
        if ($("#labelVermais").text() === 'ver menos') {
            $("#labelVermais").click(function() {
                $("#labelVermais").text('ver mais');
                $("#texto-full").hide();
            })
        } else {

        }


    }



    // $("#labelVermais").click(function() {
    //     $("#texto-full").show();
    //     $("#texto-full").slideUp(500);


    //     if ($(this).next("#texto-full").is(":visible")) {
    //         $(this).next("#texto-full").slideUp(500);
    //         $("#labelVermais").text('MORE');
    //     }
    //     //  else {
    //     // //     $(this).next("#texto-full").slideToggle(500);
    //     // //     $(this).text('LESS');
    //     // // }
    // });


}