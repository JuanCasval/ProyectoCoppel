<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Movements.aspx.cs" Inherits="RinkuHR.Views.Movements" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="../CSS/materialize.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.js"></script>
    <script src="../Scripts/Movements.js"></script>
    <script src="../Scripts/materialize.js"></script>
    <title>RinkuHR - Movimientos</title>
</head>
<body>
     <header>
         <!-- Modal Structure -->
    <div id="modal_result" class="modal col s6 " disableBackdropClick>
        <div class="modal-content" id="mod-result">
          <h4 id="resultado"></h4>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-blue blue white-text btn-flat modal-trigger" >Aceptar</a>
        </div>
    </div>

    <div id="modal_question" class="modal col s6 " disableBackdropClick>
        <div class="modal-content" class="mod-question">
          <h4 id="question"></h4>
        </div>
        <div class="modal-footer">
          <a href="General.aspx" class="modal-action modal-close waves-effect waves-blue blue white-text btn-flat modal-trigger" >Si</a>
            <a href="#!" class="modal-action modal-close waves-effect waves-red red white-text btn-flat modal-trigger" >No</a>
        </div>
    </div>

       <nav>
        <div class="nav-wrapper black" style="padding-left:10px;">
            <a href="#!" class="brand-logo">RinkuHR</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="General.aspx"> Home </a></li>
                <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
                <li><a href="Salarys.aspx"> Sueldos </a></li>
            </ul>
        </div>
        </nav>

          <ul class="sidenav" id="mobile-demo">
             <li><a href="General.aspx"> Home </a></li>
             <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
             <li><a href="Salarys.aspx"> Sueldos </a></li>
          </ul>
    </header>

       


    <div class="container">
            <h3>Registrar Movimiento</h3>
        <form id="form1" runat="server">
        <div class="row">
            <div class="input-field col s4">
              <input id="numero" type="text" class="validate"  maxlength="9" onblur="getData(this.value)" onkeypress="if(event.keyCode == 13) getData(this.value);return valideKey(event);" required>
              <label for="numero">Numero de empleado</label>
            </div>
            <div class="input-field col s4">
              <input id="nombre" placeholder="Nombre de empleado" type="text" class="validate" maxlength="50" onkeypress="return soloLetras(event)" required readonly disabled>
              <label for="nombre">Nombre completo</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
              <input id="role" placeholder="Rol del empleado" type="text" class="validate"  required readonly disabled>
              <label for="role">Rol del empleado</label>
            </div>
        </div>

        <div class="row">
            <div class="col s4">
            <label>Mes</label>
            <select id="mesSelect" class="browser-default">
                <option value="" disabled selected>Seleccione mes</option>
                <option value="1" >Enero</option>
                <option value="2" >Febrero</option>
                <option value="3" >Marzo</option>
                <option value="4" >Abril</option>
                <option value="5" >Mayo</option>
                <option value="6" >Junio</option>
                <option value="7" >Julio</option>
                <option value="8" >Agosto</option>
                <option value="9" >Septiembre</option>
                <option value="10" >Octubre</option>
                <option value="12" >Noviembre</option>
                <option value="13" >Diciembre</option>
            </select>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
              <input id="cantidad" type="number" class="validate" onkeypress="return valideKey(event);" required>
              <label for="cantidad">Cantidad de entregas</label>
            </div>
        </div>

      <div class="row">
        <a name='guardar' href='#modal_result' class='modal-action modal-close waves-effect waves-blue blue darken-4 white-text btn modal-trigger' onclick="saveMovement()">Guardar<i class='material-icons large left'>save</i></a>
        <a name='cancel' href='#modal_question' class='modal-action modal-close  red darken-4 white-text btn-flat modal-trigger' onclick="btnCancel()">Cancelar<i class='material-icons large left'>close</i></a> 
      </div>
    </form>
    </div>
</body>
    <script type="text/javascript">
         $(document).ready(function () {
             $('#modal_result').modal({
                 dismissible: false
             });
             $('#modal_question').modal({
                 dismissible: false
             });
            
             
             $('select').formSelect();
             
     
         });
    </script>
</html>
