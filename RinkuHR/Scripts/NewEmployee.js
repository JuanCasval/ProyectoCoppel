
$(document).ready(function () {

    $("#RolCheck1").click(function () {
        $("#RolCheck2").prop("checked", false);
        $("#RolCheck3").prop("checked", false);
    });
    $("#RolCheck2").click(function () {
        $("#RolCheck1").prop("checked", false);
        $("#RolCheck3").prop("checked", false);
    });
    $("#RolCheck3").click(function () {
        $("#RolCheck1").prop("checked", false);
        $("#RolCheck2").prop("checked", false);
    });

    $('.sidenav').sidenav();
});

//Funcion para guardar nuevo empleado
function saveEmployee() {

    $("#mod-result").empty();
    $("#mod-result").append("<h4 style='bold' id='resultado'></h4><br/>");
    if ($('#numero').val() == "" || $('#numero').val() == null) {
        $("#mod-result").append(
            "<h4>Por favor ingrese el número de empleado</h4>"
        );
    } else if ($('#numero').val() < 1) {
        $("#mod-result").append(
            "<h4>Por favor ingrese un número de empleado valido</h4>"
        );
    } else if ($('#nombre').val() == "" || $('#nombre').val() == null) {
        $("#mod-result").append(
            "<h4>Por favor ingrese el nombre del empleado</h4>"
        );
    } else if (!$('#RolCheck1').is(':checked') && !$('#RolCheck2').is(':checked') && !$('#RolCheck3').is(':checked')) {
        $("#mod-result").append(
            "<h4>Por favor seleccione el rol del empleado</h4>"
        );
    } else {
        var IdEmpleado = parseInt($('#numero').val());
        var Nombre = $('#nombre').val();
        var IdRole = 0;
        if ($('#RolCheck1').is(':checked')) {
            IdRole = $('#RolCheck1').val();
        } else if ($('#RolCheck2').is(':checked')) {
            IdRole = $('#RolCheck2').val();
        } else if ($('#RolCheck3').is(':checked')) {
            IdRole = $('#RolCheck3').val();
        }

        var Empleado = {};
        Empleado.IdEmployee = IdEmpleado;
        Empleado.Nombre = Nombre;
        Empleado.IdRole = IdRole;

        $.ajax({
            type: 'POST',
            url: '../api/employees/SaveEmployee',
            data: JSON.stringify(Empleado),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data.Id > 0) {                 
                        $("#mod-result").append(
                            "<h4 style='bold'>NúmeroEmpleado: <p>" + data.IdEmployee + "</p></h4>" +
                        "<h4 style='bold'>Nombre: <p>" + data.Nombre + "</p></h4>"
                        );

                    $('#resultado').append('Registro del empleado con exito.');
                    $('#numero').val("");
                    $('#nombre').val("");
                    $("#RolCheck1").prop("checked", true);
                    $("#RolCheck2").prop("checked", false);
                    $("#RolCheck3").prop("checked", false);

                } else if (data.Id == 0) {
                    $('#resultado').append('El número de empleado ya existe, favor de ingresar un nuevo numero.');
                    $('#numero').empty();
                }
            },
            error: function () {
                $('#resultado').empty();
                $('#resultado').append('Ocurrio un error en el registro.');
            }
        });
    }
    
}

function btnCancel() {
    $('#question').empty();
    $('#question').append('Esta seguro que desea cancelar el registro?, se perderan los cambios');
}

//Validaciones
function valideKey(evt) {

    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) {
        return true;
    } else if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false;
    }
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

var alphanumeric = /[ A-Za-z0-9]/;
var rfc = /[A-Za-z0-9]/;

function validateKeypress(e) {
    var keyChar = String.fromCharCode(e.which || e.keyCode);
    return alphanumeric.test(keyChar) ? keyChar : false;
}

function validateRfc(e) {
    var keyChar = String.fromCharCode(e.which || e.keyCode);
    return rfc.test(keyChar) ? keyChar : false;
}