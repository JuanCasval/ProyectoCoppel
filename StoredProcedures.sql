CREATE PROCEDURE dbo.SaveEmployee @IdEmployee int, @Name varchar(50), @IdRol int 
AS 
DECLARE @Sueldo float;
SET @Sueldo = 30;
INSERT INTO Employees (IdEmployee,Nombre,IdRole,SueldoBase,estado) values (@IdEmployee,@Name,@IdRol,@Sueldo,'A');
GO
/*exec SaveEmployee 4,'Jose Manuel Armenta',1*/

CREATE PROCEDURE dbo.SaveMovimiento @IdEmployee int, @IdRol int, @CantidadEntregas int, @Mes int
AS
DECLARE @NameEmpleado varchar(50);
DECLARE @Id int; 

SET @NameEmpleado = (SELECT Nombre FROM Employees WHERE IdEmployee = @IdEmployee);
SET @Id = (SELECT Id FROM Employees WHERE IdEmployee = @IdEmployee);

INSERT INTO Movimientos (Id,IdEmployee,Nombre,IdRole,Cantidad_entregas,IdMes) values (@Id,@IdEmployee,@NameEmpleado,@IdRol,@CantidadEntregas,@Mes);
GO

/*exec SaveMovimiento 4,1,450,9*/

CREATE PROCEDURE dbo.ConsultaSueldos @Mes int
AS
SELECT *, (SueldoMensual + PagoEntregas + BonoHora - RetencionIsr + ValesDespensa) AS SueldoTotal  FROM (
	SELECT *, CASE
				WHEN ((SueldoMensual + PagoEntregas + BonoHora)) <= 10000 THEN ((SueldoMensual + PagoEntregas + BonoHora)) * 0.09
				ELSE ((SueldoMensual + PagoEntregas + BonoHora)) * 0.12
			END AS RetencionIsr,
			((SueldoMensual + PagoEntregas + BonoHora) * 0.04) AS ValesDespensa
	FROM (
			SELECT A.IdEmployee,
				A.Nombre,
				192 as HorasTrabajadas,
				 C.Descripcion as Rol,
				(B.SueldoBase * 192) AS SueldoMensual, 
				(A.Cantidad_entregas * 5) AS PagoEntregas, 
				(C.Bono * 192) AS BonoHora
		
			FROM Movimientos A 
				RIGHT JOIN Employees B 
					ON B.IdEmployee = A.IdEmployee 
				RIGHT JOIN Roles C 
					ON C.IdRole = A.IdRole
				RIGHT JOIN Months D 
					ON D.IdMes = A.IdMes 
			WHERE A.IdMes = @Mes
			) as totales 
		) as TOTAL;
GO

/*exec ConsultaSueldos 8*/


CREATE PROCEDURE dbo.BuscarId @IdEmployee int
AS 
SELECT IdEmployee as Result FROM Employees where IdEmployee = @IdEmployee;
GO

CREATE PROCEDURE dbo.BuscarMov @IdEmployee int, @IdMes int
AS 
	SELECT IdEmployee, Nombre, IdMes 
	FROM Movimientos 
	where IdEmployee = @IdEmployee
	AND IdMes = @IdMes;
GO
