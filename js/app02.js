var indice = 2;
$("#mascampos").click(function () {
    texto_insertar = '<p> Compra ' + indice + ':<br>' +
        '<input type="text" name="compra' + indice +
        '" /></p>';
    indice++;
    $("#insertar").append(texto_insertar);
});