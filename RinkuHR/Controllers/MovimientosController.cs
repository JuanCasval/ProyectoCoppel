﻿using RinkuHR.Clases;
using RinkuHR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RinkuHR.Controllers
{
    public class MovimientosController : ApiController
    {
        RinkuHREntities db = new RinkuHREntities();
        Movimientos movement = new Movimientos();

        // GET: api/Employees/GetAll
        [HttpGet]
        [Route("api/movements/GetAll")]
        public IEnumerable<Movimiento> GetAll()
        {
            List<Movimiento> employeesData = new List<Movimiento>();

            var queryEmployees = from a in db.Movimientos
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 join c in db.Months on a.IdMes equals c.IdMes
                                 select new Movimiento
                                 {
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Rol = b.Descripcion,
                                     Cantidad_entregas = a.Cantidad_entregas,
                                     mes = c.Descripcion,
                                     periodo = a.periodo
                                 };
            employeesData = queryEmployees.ToList();
            return employeesData;
        }

        // GET: api/Employees/GetById
        [HttpGet]
        [Route("api/movements/GetById")]
        public IEnumerable<Movimiento> GetById(int Id)
        {
            List<Movimiento> movementsData = new List<Movimiento>();

            var querymovements = from a in db.Movimientos
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 join c in db.Months on a.IdMes equals c.IdMes
                                 where a.Id == Id
                                 orderby a.IdMes, a.periodo
                                 select new Movimiento
                                 {
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Rol = b.Descripcion,
                                     Cantidad_entregas = a.Cantidad_entregas,
                                     mes = c.Descripcion,
                                     periodo = a.periodo
                                 };
            movementsData = querymovements.ToList();
            return movementsData;
        }

        // POST: api/movimientos/SaveMovimiento/int IdEmpleado, int IdRole, int CantidadEntregas, int Mes
        [HttpPost]
        [Route("api/movimientos/SaveMovimiento")]
        public Movimiento SaveMovimiento(Movimiento mov)
        {
            Movimiento movement = new Movimiento();
            int IdEmployee = mov.IdEmployee;
            int IdRole = mov.IdRole;
            int Cantidad_entregas = mov.Cantidad_entregas;
            int IdMes = mov.IdMes;
            int year = System.DateTime.Now.Year;

            var queryMovements = from a in db.Movimientos
                                 join b in db.Roles on a.IdRole equals b.IdRole
                                 join c in db.Employees on a.Id equals c.Id
                                 join d in db.Months on a.IdMes equals d.IdMes
                                 where a.IdEmployee == mov.IdEmployee && a.IdMes == IdMes && a.periodo == year
                                 select new Movimiento
                                 {
                                     IdMovimiento = a.IdMovimiento,
                                     IdEmployee = a.IdEmployee,
                                     Nombre = a.Nombre,
                                     Rol = b.Descripcion,
                                     Cantidad_entregas = a.Cantidad_entregas,
                                     mes = d.Descripcion,
                                     periodo = a.periodo
                                 };
            

            movement = queryMovements.FirstOrDefault();
            if(movement == null)
            {
                db.SaveMovimiento(IdEmployee, IdRole, Cantidad_entregas, IdMes);
                db.SaveChanges();
                var queryMoves = from a in db.Movimientos
                                     join b in db.Roles on a.IdRole equals b.IdRole
                                     join c in db.Employees on a.Id equals c.Id
                                     join d in db.Months on a.IdMes equals d.IdMes
                                     where a.IdEmployee == mov.IdEmployee && a.IdMes == IdMes && a.periodo == year
                                 select new Movimiento
                                     {
                                         IdMovimiento = a.IdMovimiento,
                                         IdEmployee = a.IdEmployee,
                                         Nombre = a.Nombre,
                                         Rol = b.Descripcion,
                                         Cantidad_entregas = a.Cantidad_entregas,
                                         mes = d.Descripcion,
                                         periodo = a.periodo
                                     };
                movement = queryMovements.FirstOrDefault();
            }
            else
            {
                movement.IdMovimiento = 0;
            }

            
            
            return movement;
        }

       
    }
}
