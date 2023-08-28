$(document).ready(function () { //Se carga la tabla principal de empleados
    $('.sidenav').sidenav();

    $.ajax({
        url: "../api/employees/GetAll",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                $.each(result, function (i, item) {
                    var Name = item.Nombre;
                    $("#Contenedor").append(
                        "<tr>" +
                        "<td>" + item.IdEmployee + "</td>" +
                        "<td>" + item.Nombre + "</td>" +
                        "<td>" + item.Role + "</td>" +
                        "<td>$" + item.SueldoBase + "</td>" +
                        "<td><a name='Ver Movimientos' href='#modal1' class='btn waves-effect waves-light black white-text modal-trigger' onclick='verMovimientos(" + item.Id + "," + item.IdEmployee + ")')>Ver Movimientos<i class='material-icons left'>list</i></a></td>" +
                        "</tr>"
                    );
                });
            } else {
                $("#Contenedor").append("<tr><td class='center-align col s12'>No existen empleados registrados actualmente</td></tr>");
            }
        },
        error: function () {
            alert(error);
        }
    });
});

//Se buscan los movimientos realizados por el empleado.
function verMovimientos(Id, IdEmployee) {
    $('.modal-content').empty();
    $.ajax({
        url: "../api/movements/GetById",
        type: "GET",
        data: { Id: Id },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                $(".modal-content").append(
                    "<table id='table-modal-content' class='table-modal-content highlight responsive-table'>"+
                        "<tr>" +
                            "<th>Nombre</th>" +
                            "<th>Cantidad de entregas</th>"+
                            "<th>Mes</th>"+
                            "<th>Periodo</th>"+
                        "</tr>"+
                    "</table>"
                );
                $.each(result, function (i, item) {
                    $(".table-modal-content").append(
                        "<tr>" +
                        "<td>" + item.Nombre + "</td>" +
                        "<td>" + item.Cantidad_entregas + "</td>" +
                        "<td>" + item.mes + "</td>" +
                        "<td>" + item.periodo + "</td>" +
                        "</tr>"
                    );
                });
            } else {
                $(".modal-content").append("<h4>No existen movimientos registrados para este empleado</h4>");
            }
        },
        error: function () {
            alert(error);
        }
    });
}


