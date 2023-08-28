using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RinkuHR.Clases
{
    public class Movimiento
    {
        public int IdEmployee { get; set; }
        public string Nombre { get; set; }
        public string Rol { get; set; }
        public int Cantidad_entregas { get; set; }
        public string mes { get; set; }
        public int periodo { get; set; }
    }
}