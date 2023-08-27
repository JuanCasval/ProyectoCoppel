using RinkuHR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RinkuHR.Controllers
{
    public class EmployeesController : ApiController
    {
        RinkuHREntities db = new RinkuHREntities();
        Employees employees = new Employees();

        // GET: api/Employees
        [HttpGet]
        [Route("api/employees/GetWithId")]
        public int GetWithId(int Id)
        {
            Id = db.BuscarId(Id).FirstOrDefault().Value;
            return Id;
        }

        // POST: api/Employees/SaveEmployee
        [HttpPost]
        [Route("api/employees/SaveEmployee")]
        public Employees SaveEmployee(int IdEmpleado, string Nombre, int IdRole, float SueldoBase)
        {
            employees.IdEmployee = IdEmpleado;
            employees.Nombre = Nombre;
            employees.IdRole = IdRole;
            employees.SueldoBase = SueldoBase;

            db.SaveEmployee(employees.IdEmployee, employees.Nombre, employees.IdRole, employees.SueldoBase);
            db.SaveChanges();
            return employees;
        }

      
    }
}
