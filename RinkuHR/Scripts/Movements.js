$(document).ready(function () {

    $('.sidenav').sidenav();
});


var idRol = 0;
//Buscar empleado
function getData(Id) {
    $("#mod-result").empty();
   
    if (Id == "" || Id == null) {
        $("#mod-result").append(
            "<h4>Favor de ingresar el número de empleado.</h4>"
        );
        $('#modal_result').modal('open');
    } else {
        parseInt(Id);
        $("#mod-result").empty();
        $.ajax({
            type: 'GET',
            url: '../api/employees/GetWithId',
            data: { Id: Id },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (result) {
                if (result == null) {
                    $("#mod-result").append(
                        "<h4>Favor de ingresar un número de empleado existente.</h4>"
                    );
                    $('#modal_result').modal('open');
                } else if(result.IdEmployee == Id) {
                    $('#nombre').val(result.Nombre);
                    $('#role').val(result.Role);
                    idRol = result.IdRole;
                } 
            },
            error: function () {
                alert(error);
            }
        });
    }
}

//Funcion para guardar movimiento
function saveMovement() {

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
    } else if ($('#mesSelect').val() == "" || $('#mesSelect').val() == null) {
        $("#mod-result").append(
            "<h4>Por favor seleccione el mes del movimiento</h4>"
        );
    } else if ($('#cantidad').val() == "" || $('#cantidad').val() == null) {
        $("#mod-result").append(
            "<h4>Por favor ingrese la cantidad de entregas</h4>"
        );
    } else {
        var IdEmpleado = parseInt($('#numero').val());
        var Nombre = $('#nombre').val();
        var IdRole = idRol;
        var cantidad = $('#cantidad').val();
        var Mes = $('#mesSelect').val();

        var Movimiento = {};
        Movimiento.IdEmployee = IdEmpleado;
        Movimiento.Nombre = Nombre;
        Movimiento.IdRole = IdRole;
        Movimiento.Cantidad_entregas = cantidad;
        Movimiento.IdMes = Mes;

        $.ajax({
            type: 'POST',
            url: '../api/movimientos/SaveMovimiento',
            data: JSON.stringify(Movimiento),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data.IdMovimiento > 0) {
                    $("#mod-result").append(
                        "<h4 style='bold'>NúmeroEmpleado: <p>" + data.IdEmployee + "</p></h4>" +
                        "<h4 style='bold'>Nombre: <p>" + data.Nombre + "</p></h4>"
                    );
                    $('#resultado').empty();
                    $('#resultado').append('Registro del movimiento con exito.');
                    $('#numero').val("");
                    $('#nombre').val("");
                    $('#cantidad').val("");
                    $('#role').val("");

                } else if (data.IdMovimiento == 0) {
                    $('#resultado').empty();
                    $('#resultado').append('Ya existe un registro de entregas de este empleado en el mes seleccionado.');
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

function reload() {
    location.reload();
}

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