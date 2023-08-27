/*$(document).ready(function () {
    $.ajax({
        url: "api/Prospect/Get",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                $.each(result, function (i, item) {

                    $("#contenido").append("<tr><td class='center-align'>" + item.Nombre + "</td><td class='center-align'>" + item.App + "</td><td class='center-align'>"
                        + item.Apm + "</td><td class='center-align'>" + item.Estatus + "</td><td class='centered center-align'><a name='Ver Datos' href='#modal1' class='btn-floating btn waves-effect waves-light blue white-text modal-trigger' onclick='verDatos(" + item.Id + ")')><i class='material-icons large'>info_outline</i></a>" +
                        "&nbsp;<a name='Evaluar' href='Evaluacion.aspx?Id= " + item.Id + "' class='btn-floating btn waves-effect waves-light yellow darken-4'><i class='material-icons large'>border_color</i></a></td ></tr > ");

                });
            } else {
                $("#contenido").append("<tr><td class='center-align col s12'>No existen prospectos registrados actualmente</td></tr>");
            }

        },
        error: function () {
            alert(error);
        }

    });
});*/


function verDatos(Id) {
    console.log("VAMOS A VER: "+Id);
    $.ajax({
        type: 'GET',
        url: '../api/employees/GetWithId',
        data: { Id: Id },
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {
            var item = result;
            console.log(result);
            $(".Contenedor").empty();
            $(".Contenedor").append("<h4>Información del Empleado</h4>" +
                "<div class= 'row'>" +
                "<div class='col s3'>" +
                "<p style='font-weight:bold;'>Nombre: </p>" +
                "<p id='nombre'>" + item.Id + "</p>" +
                "</div>" +
               
                "</div>");

            

        },
        error: function () {
            alert(error);
        }
    });

   /* $.ajax({
        type: 'GET',
        url: 'api/Prospect/GetFilesId',
        data: { Id: Id },
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var str = "";
            var myArra;
            
            setTimeout(function () {
                $("#archivos").empty();
                $("#archivos").append("<ul>");
                $.each(data, function (i, item) {
                    myArra = item.Name.split("/");
                    str += "<li><a href='" + item.Name + "' target='_blank' rel='noopener noreferrer' >" +
                        myArra[2] + "</a></li> ";

                });

                $("#archivos").append(str);
                $("#archivos").append("</ul>");
            }, 500);
            

        },
        error: function () {
            alert(error);
        }
    });*/
}