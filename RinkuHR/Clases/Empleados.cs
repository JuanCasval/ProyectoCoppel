using RinkuHR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RinkuHR.Clases
{
    public class Empleados
    {
        public int Id { get; set; }
        public int IdEmployee { get; set; }
        public string Nombre { get; set; }
        public string Role { get; set; }
        public int IdRole { get; set; }
        public double SueldoBase { get; set; }

    }
}