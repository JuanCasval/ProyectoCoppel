using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RinkuHR.Clases
{
    public class Sueldos
    {
        public int IdEmployee { get; set; }
        public string Nombre { get; set; }
        public int HorasTrabajadas { get; set; }
        public string Rol { get; set; }
        public double SueldoMensual { get; set; }
        public int PagoEntregas { get; set; }
        public double BonoHora { get; set; }
        public double RetencionIsr { get; set; }
        public double ValesDespensa { get; set; }
        public double SueldoTotal { get; set; }
    }
}