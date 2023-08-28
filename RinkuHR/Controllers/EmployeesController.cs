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
        Employees _employees = new Employees();

        // GET: api/Employees/GetAll
        [HttpGet]
        [Route("api/employees/GetAll")]
        public IEnumerable<Empleados> GetAll() 
        { 
            List<Empleados> employeesData = new List<Empleados>();
            var queryEmployees = from a in db.Employees
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 where a.estado == "A"
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

        // GET: api/Employees
        [HttpGet]
        [Route("api/employees/GetWithId")]
        public int? GetWithId(int Id)
        {
            int? value = 0;
            value = db.BuscarId(Id).FirstOrDefault();
            return value;
        }

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

      
    }
}
