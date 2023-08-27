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
                                 select new Empleados {
                                     Id = a.Id,
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Role = b.Descripcion,
                                     SueldoBase = a.SueldoBase
                                 };

            employeesData = queryEmployees.ToList(); 
            
            // var employeesData = _employees.getData().ToList();
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
        public Employees SaveEmployee(int IdEmpleado, string Nombre, int IdRole, float SueldoBase)
        {
            _employees.IdEmployee = IdEmpleado;
            _employees.Nombre = Nombre;
            _employees.IdRole = IdRole;
            _employees.SueldoBase = SueldoBase;

            db.SaveEmployee(_employees.IdEmployee, _employees.Nombre, _employees.IdRole, _employees.SueldoBase);
            db.SaveChanges();
            return _employees;
        }

      
    }
}
