$("#mitextarea").keyup(function () {
    $("#contador").html("Conteo de caracteres "
        + $("#mitextarea").val().length);
});