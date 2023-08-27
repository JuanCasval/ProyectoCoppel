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

        // POST: api/movimientos/SaveMovimiento
        [HttpPost]
        [Route("api/movimientos/SaveMovimiento")]
        public Movimientos SaveMovimiento(int IdEmpleado, int IdRole, int CantidadEntregas, int Mes)
        {
            movement.IdEmployee = IdEmpleado;
            movement.IdRole = IdRole;
            movement.Cantidad_entregas = CantidadEntregas;
            movement.IdMes = Mes;
            db.SaveMovimiento(movement.IdEmployee, movement.IdRole, movement.Cantidad_entregas, movement.IdMes);
            db.SaveChanges();
            return movement;
        }

       
    }
}
