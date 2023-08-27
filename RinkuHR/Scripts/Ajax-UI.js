
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


let contador = 0;
function addFile() {

    $('#files').append("<div class='row col s9' style='display:none;' id='rowFile"+contador+"'><div class='col s4'><input id='file" + contador + "' type='text' class='validate'><label for='file" + contador + "'>Nombre del Archivo</label></div>"
        + "<div class='file-field input-field col s5'>"
        + "<div class='btn blue'>"
        + "<span>Archivo</span>"
        + "<input type='file' id='fileUpload" + contador + "'>"
        + "</div>"
        + "<div class='file-path-wrapper'>"
        + "<input class='file-path validate' type='text' id='path" + contador + "'>"
        + "</div>"
        + "</div>"
        + "<a name='close' class='btn waves-effect red darken-4' id='close" + contador + "' onclick='removeFile(" + contador + ")' ><i class='material-icons'>close</i></a>"
        + "</div > ");
     $("#rowFile" + contador).show('slow');

    contador++;
}


function reload() {
    location.reload();
}

function removeFile(id) {
    $("#rowFile" + id).remove();
   
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

function savePaths(data, fileName) {
    var archivo = { Id: data, Name: fileName };
    $('#resultado').empty();
    $.ajax({
        type: 'POST',
        url: 'api/Prospect/PostWithD',
        data: JSON.stringify(archivo),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            if (data = true) {
                console.log("Rutas guardadas...")
               
            } else {
                
                $('#resultado').append('Ocurrio un error al guardar las rutas.');
            
            }
        },
        error: function () {
            $('#resultado').append('Ocurrio un error  al guardar las rutas. ');
        }
    });
}

function uploadFiles(formData) {
    $.ajax({
        url: "api/Prospect/UploadFiles",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log("archivos guardados con exito..")
        },
        error: function (data) {

            $('#resultado').append('Ocurrio un error al guardar los documentos.');
        }
    })
    contador = 0;
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