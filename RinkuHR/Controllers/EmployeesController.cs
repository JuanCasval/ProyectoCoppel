using RinkuHR.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using RinkuHR.Clases;

namespace RinkuHR.Controllers
{
    public class EmployeesController : ApiController
    {
        RinkuHREntities db = new RinkuHREntities();
        //Se obtiene el listado de todos los empleados
        // GET: api/Employees/GetAll
        [HttpGet]
        [Route("api/employees/GetAll")]
        public IEnumerable<Empleados> GetAll() 
        { 
            List<Empleados> employeesData = new List<Empleados>();
            var queryEmployees = from a in db.Employees
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 where a.estado == "A"
                                 orderby a.IdEmployee
                                 select new Empleados {
                                     Id = a.Id,
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Role = b.Descripcion,
                                     SueldoBase = a.SueldoBase
                                 };
            employeesData = queryEmployees.ToList(); 
            return employeesData;
        }
        //Se obtiene un unico empleado mediante su numero de empleado validando su existencia y tomando sus datos.
        // GET: api/Employees
        [HttpGet]
        [Route("api/employees/GetWithId")]
        public Empleados GetWithId(int Id)
        {
            Empleados employeesData = new Empleados();
            var queryEmployees = from a in db.Employees
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 where a.IdEmployee == Id
                                 select new Empleados
                                 {
                                     Id = a.Id,
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Role = b.Descripcion,
                                     SueldoBase = a.SueldoBase,
                                     IdRole = a.IdRole
                                 };
            employeesData = queryEmployees.FirstOrDefault();
            return employeesData;
        }


        //Se guarda el nuevo empleado, validando su existencia utilizando su numero de empleado y el procedimiento almacenado de BuscarID
        //y el procedimiento almacenado SaveEmployee
        // POST: api/Employees/SaveEmployee
        [HttpPost]
        [Route("api/employees/SaveEmployee")]
        public Empleados SaveEmployee(Empleados emp)
        {
            int? validacion = db.BuscarId(emp.IdEmployee).FirstOrDefault();
            Empleados obj = new Empleados();
            int IdEmployee = emp.IdEmployee;
            string Name = emp.Nombre;
            int rol = emp.IdRole;

            if (validacion == null)
            {
                db.SaveEmployee(IdEmployee, Name, rol);
                db.SaveChanges();

                var queryEmployees = from a in db.Employees
                                     join b in db.Roles on a.IdRole equals b.IdRole
                                     where a.IdEmployee == IdEmployee
                                     select new Empleados
                                     {
                                         Id = a.Id,
                                         IdEmployee = a.IdEmployee,
                                         Nombre = a.Nombre,
                                         Role = b.Descripcion,
                                         SueldoBase = a.SueldoBase
                                     };
                obj = queryEmployees.FirstOrDefault();
            }

            return obj;
        }

        //Se ejecuta el procedimiento almacenado ConsultaSueldos para obtener los calculos desde la base de datos y mostrarlos al usuario
        // GET: api/Employees/GetSueldos
        [HttpGet]
        [Route("api/employees/GetSueldos")]
        public IEnumerable<ConsultaSueldos_Result> GetSueldos(int IdMes)
        {
            var queryEmployees = db.ConsultaSueldos(IdMes).ToList();
            return queryEmployees;
        }

    }
}
