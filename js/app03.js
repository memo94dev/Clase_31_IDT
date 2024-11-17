$("#boton1").click(function () {
    alert($("#parrafo1").text());
});
$("#boton2").click(function () {
    $("#parrafo1").text("Nuevo texto del párrafo");
});
$("#boton3").click(function () {
    $("tr").find("td").eq(3).text("texto nuevo");
    //$("td").text("texto nuevo");
});