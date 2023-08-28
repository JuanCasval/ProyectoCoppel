<%@ Page Language="C#" AutoEventWireup="true"  CodeBehind="General.aspx.cs" Inherits="RinkuHR.Views.General"  %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="../CSS/materialize.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.js"></script>
    <script src="../Scripts/General.js"></script>
    <script src="../Scripts/materialize.js"></script>

    <title>Rinku HR</title>
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
                <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
                <li><a href="Movements.aspx"> Registrar movimiento </a></li>
                <li><a href="Salarys.aspx"> Sueldos </a></li>
            </ul>
        </div>
        </nav>

          <ul class="sidenav" id="mobile-demo">
             <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
             <li><a href="Movements.aspx"> Registrar movimiento </a></li>
             <li><a href="Salarys.aspx"> Sueldos </a></li>
          </ul>
    </header>
     <div class="container">
            <h3>Lista de empleados</h3>
        </div>
    <form id="form1" runat="server">
        <div class="container" >
            <a class="waves-effect blue darken-3 waves-light btn" href="NewEmployee.aspx"><i class="material-icons left">add_circle</i>Añadir empleado</a>
            <br />
            <table id="Contenedor" class="Contenedor highlight responsive-table " >
                <tr>
                    <th>Número de Empleado</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Sueldo Base</th>
                   
                </tr>
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
