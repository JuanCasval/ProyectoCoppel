﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class RinkuHREntities : DbContext
    {
        public RinkuHREntities()
            : base("name=RinkuHREntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<Months> Months { get; set; }
        public virtual DbSet<Movimientos> Movimientos { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
    
        public virtual ObjectResult<Nullable<int>> BuscarId(Nullable<int> idEmployee)
        {
            var idEmployeeParameter = idEmployee.HasValue ?
                new ObjectParameter("IdEmployee", idEmployee) :
                new ObjectParameter("IdEmployee", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("BuscarId", idEmployeeParameter);
        }
    
        public virtual ObjectResult<BuscarMov_Result> BuscarMov(Nullable<int> idEmployee, Nullable<int> idMes)
        {
            var idEmployeeParameter = idEmployee.HasValue ?
                new ObjectParameter("IdEmployee", idEmployee) :
                new ObjectParameter("IdEmployee", typeof(int));
    
            var idMesParameter = idMes.HasValue ?
                new ObjectParameter("IdMes", idMes) :
                new ObjectParameter("IdMes", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<BuscarMov_Result>("BuscarMov", idEmployeeParameter, idMesParameter);
        }
    
        public virtual ObjectResult<ConsultaSueldos_Result> ConsultaSueldos(Nullable<int> mes)
        {
            var mesParameter = mes.HasValue ?
                new ObjectParameter("Mes", mes) :
                new ObjectParameter("Mes", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<ConsultaSueldos_Result>("ConsultaSueldos", mesParameter);
        }
    
        public virtual int DeleteEmployee(Nullable<int> idEmployee)
        {
            var idEmployeeParameter = idEmployee.HasValue ?
                new ObjectParameter("IdEmployee", idEmployee) :
                new ObjectParameter("IdEmployee", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DeleteEmployee", idEmployeeParameter);
        }
    
        public virtual int SaveEmployee(Nullable<int> idEmployee, string name, Nullable<int> idRol, Nullable<double> sueldo)
        {
            var idEmployeeParameter = idEmployee.HasValue ?
                new ObjectParameter("IdEmployee", idEmployee) :
                new ObjectParameter("IdEmployee", typeof(int));
    
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("IdRol", idRol) :
                new ObjectParameter("IdRol", typeof(int));
    
            var sueldoParameter = sueldo.HasValue ?
                new ObjectParameter("Sueldo", sueldo) :
                new ObjectParameter("Sueldo", typeof(double));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SaveEmployee", idEmployeeParameter, nameParameter, idRolParameter, sueldoParameter);
        }
    
        public virtual int SaveMovimiento(Nullable<int> idEmployee, Nullable<int> idRol, Nullable<int> cantidadEntregas, Nullable<int> mes)
        {
            var idEmployeeParameter = idEmployee.HasValue ?
                new ObjectParameter("IdEmployee", idEmployee) :
                new ObjectParameter("IdEmployee", typeof(int));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("IdRol", idRol) :
                new ObjectParameter("IdRol", typeof(int));
    
            var cantidadEntregasParameter = cantidadEntregas.HasValue ?
                new ObjectParameter("CantidadEntregas", cantidadEntregas) :
                new ObjectParameter("CantidadEntregas", typeof(int));
    
            var mesParameter = mes.HasValue ?
                new ObjectParameter("Mes", mes) :
                new ObjectParameter("Mes", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SaveMovimiento", idEmployeeParameter, idRolParameter, cantidadEntregasParameter, mesParameter);
        }
    }
}