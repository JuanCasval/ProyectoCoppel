<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Salarys.aspx.cs" Inherits="RinkuHR.Views.Salarys" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="../CSS/materialize.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.js"></script>
    <script src="../Scripts/Salarys.js"></script>
    <script src="../Scripts/materialize.js"></script>
    <title>RinkuHR - Salarios</title>
</head>
<body>
     <header>
          <div id="modal1" class="modal modal-fixed-footer" disableBackdropClick>
            <div class="modal-content">

            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-red red white-text btn-flat">Cerrar</a>
            </div>
          </div>
        <nav>
        <div class="nav-wrapper black" style="padding-left:10px;">
            <a href="#!" class="brand-logo">RinkuHR</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="General.aspx"> Sueldos </a></li>
                <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
                <li><a href="Movements.aspx"> Registrar movimiento </a></li>
            </ul>
        </div>
        </nav>

          <ul class="sidenav" id="mobile-demo">
             <li><a href="General.aspx"> Sueldos </a></li>
             <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
             <li><a href="Movements.aspx"> Registrar movimiento </a></li>
             
          </ul>
    </header>
     <div class="container">
            <h3>Sueldos totales</h3>
        </div>
    <form id="form1" runat="server">
        <div class="container" >
            <div class="row">
            <div class="col s4">
            <label>Mes</label>
            <select id="mesSelect" class="browser-default" onchange="loadSueldos(this.value)">
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
            <br />
            <table id="Contenedor" class="Contenedor highlight responsive-table centered center-align" >

            </table>
        </div>
    </form>
    
</body>
     <script type="text/javascript">
         $(document).ready(function () {
             $('#modal1').modal({
                 dismissible: false
             });
         });
     </script>
</html>
