<%@ Page Language="C#" AutoEventWireup="true"  CodeBehind="General.aspx.cs" Inherits="RinkuHR.Views.General"  %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="../CSS/materialize.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.js"></script>
    <script src="../Scripts/Ajax-Doc.js"></script>
    <script src="../Scripts/materialize.js"></script>

    <title>Rinku HR</title>
</head>
    
<body>
    <header>
        <nav>
        <div class="nav-wrapper black" style="padding-left:10px;">
            <a href="#!" class="brand-logo">RinkuHR</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="../NewEmployee.aspx"> Añadir empleado </a></li>
                <li><a href="../Default.aspx"> Registrar movimiento </a></li>
                <li><a href="../Contact.aspx"> Sueldos </a></li>
            </ul>
        </div>
        </nav>


          <ul class="sidenav" id="mobile-demo">
             <li><a href="NewEmployee.aspx"> Añadir empleado </a></li>
             <li><a href="Default.aspx"> Registrar movimiento </a></li>
             <li><a href="Contact.aspx"> Sueldos </a></li>
          </ul>
    </header>
     <div class="container">
            <h3>Lista de empleados</h3>
        </div>
    <form id="form1" runat="server">
        <div class="container" >
            <a class="waves-effect blue darken-3 waves-light btn" href="NewEmployee.aspx"><i class="material-icons left">add_circle</i>Añadir empleado</a>
            <br />
            <table id="Contenedor" class="Contenedor highlight responsive-table">
                <tr>
                    <th>Número de Empleado</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Sueldo Base</th>
                   
                </tr>
            </table>
        </div>
    </form>
    <a name="Ver Datos" href="#modal1" class="btn-floating btn waves-effect waves-light blue white-text modal-trigger" onclick="verData()"><i class="material-icons large">info_outline</i></a>
</body>
    
</html>
