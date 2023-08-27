<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="General.aspx.cs" Inherits="RinkuHR.Views.General" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="../CSS/materialize.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.js"></script>
    <script src="../Scripts/Ajax-Doc.js"></script>
    <script src="../Scripts/materialize.js"></script>

    <title>Rinku HR</title>
</head>
<body>
    <form id="form1" runat="server">
        <div id="Contenedor" class="Contenedor">
        </div>
    </form>
    <a name="Ver Datos" href="#modal1" class="btn-floating btn waves-effect waves-light blue white-text modal-trigger" onclick="verDatos(1)"><i class="material-icons large">info_outline</i></a>
</body>
    
</html>
