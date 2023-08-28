
function updateProspect(Id) {
    $('#resultado').empty();
    if ($('#estatusList').val() == null) {
        $('#resultado').append('Seleccione el nuevo estatus para continuar.');
        $('#estatusList').focus();
    } else {
        var prospect = {};
        prospect.Id = Id;
        prospect.Estatus = $('#estatusList').val();
        prospect.Observaciones = $('#textarea1').val();

        $.ajax({
            type: 'POST',
            url: 'api/Prospect/Put',
            data: JSON.stringify(prospect),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data = true) {
                    $('#resultado').append('Actualizacion exitosa.');
                } else {
                    $('#resultado').append('Ocurrio un error en la actualización.');
                }
            },
            error: function () {
                $('#resultado').append('Ocurrio un error en la actualización.');
            }
        });
    }
}


function reload() {
    location.reload();
}


function saveProspect() {
    var avanzar = false;
    for (var i = 0; i < contador; i++) {
        if ($("#fileUpload" + i).val() != null) {
            files = $("#fileUpload" + i).get(0).files;
            var myArra = files[0].name.split(".");
            if (myArra[1] == "pdf") {
                avanzar = true;
            } else {
                avanzar = false;
                console.log("fallo");
                break;
            }
        }
    }

    if (avanzar == true) {
        $('#resultado').empty();
        var prospect = {};
        prospect.nombre = $('#nombre').val();
        prospect.app = $('#app').val();
        prospect.apm = $('#apm').val();
        prospect.calle = $('#calle').val();
        prospect.numero = $('#numero').val();
        prospect.colonia = $('#colonia').val();
        prospect.telefono = $('#telefono').val();
        prospect.rfc = $('#rfc').val();
        console.log(prospect);

        $.ajax({
            type: 'POST',
            url: 'api/Prospect/Post',
            data: JSON.stringify(prospect),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                if (data > 0) {
                    var formData = new FormData();
                    var files;
                    var fileName;
                    for (var i = 0; i < contador; i++) {
                        if ($("#fileUpload" + i).length) {
                            files = $("#fileUpload" + i).get(0).files;
                            var myArra = files[0].name.split(".");
                            fileName = $("#file" + i).val() + "." + myArra[1];
                            savePaths(data, fileName);
                            formData.append(data + "/" + fileName, files[0]);
                        }
                    }

                    uploadFiles(formData);

                    $('#nombre').empty();
                    $('#app').empty();
                    $('#apm').empty();
                    $('#calle').empty();
                    $('#numero').empty();
                    $('#colonia').empty();
                    $('#telefono').empty();
                    $('#rfc').empty();
                    for (var i = 0; i < contador; i++) {
                        $("#fileUpload" + i).remove();
                    }
                    contador = 0;
                    $('#resultado').append('Registro del prospecto culminado. Se redirigira a principal en 5s');

                    setTimeout(function () {
                        window.location = "Index.aspx"
                    }, 5000);
                    
                } else {
                    $('#resultado').append('Ocurrio un error en el registro.');
                }
            },
            error: function () {
                $('#resultado').empty();
                $('#resultado').append('Ocurrio un error en el registro.');
            }
        });

    } else {
        $('#resultado').empty();
        $('#resultado').append('Solo se pueden cargar archivos .PDF');
    }
   
}


function btnCancel() {
    $('#question').empty();
    $('#question').append('Esta seguro que desea cancelar el registro?, se perderan los cambios');
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