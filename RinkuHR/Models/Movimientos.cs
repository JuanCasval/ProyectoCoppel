//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RinkuHR.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Movimientos
    {
        public int IdMovimiento { get; set; }
        public int Id { get; set; }
        public int IdEmployee { get; set; }
        public string Nombre { get; set; }
        public Nullable<int> IdRole { get; set; }
        public int Cantidad_entregas { get; set; }
        public int IdMes { get; set; }
        public int periodo { get; set; }
    
        public virtual Employees Employees { get; set; }
        public virtual Months Months { get; set; }
        public virtual Roles Roles { get; set; }
    }
}
