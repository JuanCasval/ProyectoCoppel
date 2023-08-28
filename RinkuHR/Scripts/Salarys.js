$(document).ready(function () {
    $('.sidenav').sidenav();
    const d = new Date();
    let month = d.getMonth() + 1;
    loadSueldos(month);
    console.log(month);
});

//Funcion que carga la tabla de sueldos, una vez modificado el menu desplegable de meses, se actualiza.
function loadSueldos(month) {
    $("#Contenedor").empty();
        $.ajax({
            url: "../api/employees/GetSueldos",
            type: "GET",
            data: {IdMes: month},
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#Contenedor").append(
                    "<tr>" +
                    "<th>Número de Empleado</th>" +
                    "<th> Nombre</th > " +
                    "<th> Rol</th > " +
                    "<th> Horas Trabajadas</th > " +
                    "<th> Sueldo Base</th > " +
                    "<th> Pago por entregas</th > " +
                    "<th> Pago por bonos</th > " +
                    "<th> Retencion de ISR</th > " +
                    "<th> Vales de despensa</th > " +
                    "<th> Sueldo Total</th > " +
                    "</tr>");
                    if (result.length > 0) {
                    $.each(result, function (i, item) {
                        var Name = item.Nombre;
                        $("#Contenedor").append(
                            "<tr>" +
                            "<td>" + item.IdEmployee + "</td>" +
                            "<td>" + item.Nombre + "</td>" +
                            "<td>" + item.Rol + "</td>" +
                            "<td>" + item.HorasTrabajadas + "</td>" +
                            "<td>$" + item.SueldoMensual.toFixed(2) + "</td>" +
                            "<td>$" + item.PagoEntregas.toFixed(2) + "</td>" +
                            "<td>$" + item.BonoHora.toFixed(2) + "</td>" +
                            "<td>$" + item.RetencionIsr.toFixed(2) + "</td>" +
                            "<td>$" + item.ValesDespensa.toFixed(2) + "</td>" +
                            "<td><b>$" + item.SueldoTotal.toFixed(2) + "</b></td>" +
                            "</tr>"
                        );
                    });
                } else {
                    $("#Contenedor").append("<tr><td class='center-align col s12'>No existen movimientos registrados en el mes</td></tr>");
                }
            },
            error: function () {
                alert(error);
            }
        });
}