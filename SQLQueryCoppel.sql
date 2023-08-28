
/*Creacion del catalago de Roles */
CREATE TABLE Roles( 
 IdRole int IDENTITY(1,1) not null,
 Descripcion varchar(50) not null,
 Bono float not null,
 PRIMARY KEY (IdRole)

);

/*Insercion de datos base del catalago de Roles */
INSERT INTO Roles (Descripcion,Bono) values ('Chofer',10);
INSERT INTO Roles (Descripcion,Bono) values ('Cargador',5);
INSERT INTO Roles (Descripcion,Bono) values ('Auxiliar',0);

/*Creacion del catalago de Meses */

CREATE TABLE Months( 
 IdMes int IDENTITY(1,1) not null,
 Descripcion varchar(50) not null,
 PRIMARY KEY (IdMes)

);

/*Insercion de datos base del catalago de Meses */
INSERT INTO Months (Descripcion) values ('Enero');
INSERT INTO Months (Descripcion) values ('Febrero');
INSERT INTO Months (Descripcion) values ('Marzo');
INSERT INTO Months (Descripcion) values ('Abril');
INSERT INTO Months (Descripcion) values ('Mayo');
INSERT INTO Months (Descripcion) values ('Junio');
INSERT INTO Months (Descripcion) values ('Julio');
INSERT INTO Months (Descripcion) values ('Agosto');
INSERT INTO Months (Descripcion) values ('Septiembre');
INSERT INTO Months (Descripcion) values ('Octubre');
INSERT INTO Months (Descripcion) values ('Noviembre');
INSERT INTO Months (Descripcion) values ('Diciembre');

/*Creacion del catalago de Empleados */

CREATE TABLE Employees( 
 Id int IDENTITY(1,1) not null,
 IdEmployee int UNIQUE not null ,
 Nombre varchar(50) not null,
 IdRole int not null,
 SueldoBase float not null,
 estado char not null,
 PRIMARY KEY (Id),
 CONSTRAINT FK_EmployeeRole FOREIGN KEY (IdRole) REFERENCES Roles(IdRole)

);

/*INSERT INTO Employees (IdEmployee,Nombre,IdRole,SueldoBase) values (1,'Juan Pablo Castro Valdez',1,30);*/

/*Creacion del catalogo de movimientos*/

CREATE TABLE Movimientos( 
 IdMovimiento int IDENTITY(1,1) not null,
 Id int not null,
 IdEmployee int not null,
 Nombre varchar(50),
 IdRole int not null,
 Cantidad_entregas int not null,
 IdMes int not null,
 periodo int not null DEFAULT(YEAR(GETDATE)),
 PRIMARY KEY (IdMovimiento),
 CONSTRAINT FK_MovEmployee FOREIGN KEY (Id) REFERENCES Employees(Id),
 CONSTRAINT FK_MovRole FOREIGN KEY (IdRole) REFERENCES Roles(IdRole),
 CONSTRAINT FK_MovMonth FOREIGN KEY (IdMes) REFERENCES Months(IdMes)

);
