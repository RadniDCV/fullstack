-- MySQL database export
START TRANSACTION;

CREATE TABLE IF NOT EXISTS `informacionTrabajo` (
    `id` INT NOT NULL,
    `sucursal_id` INT,
    `departamento_id` INT,
    `cargo` VARCHAR(150),
    `profesion` VARCHAR(150),
    `salario` DECIMAL,
    `fechaIngreso` DATE,
    `fechaRetiro` DATE,
    `motivoRetiro` VARCHAR(100),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `ufv` (
    `id` INT NOT NULL,
    `mesAnio` VARCHAR(10),
    `minimo` DECIMAL,
    `maximo` DECIMAL,
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `rolPermiso` (
    `id` INT NOT NULL,
    `rol_id` INT,
    `permiso_id` INT,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `esquemaContable` (
    `id` INT NOT NULL,
    `nombreEsquema` VARCHAR(45),
    `cuentaSalario` VARCHAR(45),
    `cuentaAportesLaborales` VARCHAR(45),
    `otrosIngresos` VARCHAR(45),
    `salarioPagado` VARCHAR(45),
    `aportesPatronales` VARCHAR(45),
    `aportesPatronalesPagados` VARCHAR(45),
    `provisiones` VARCHAR(45),
    `provisionesPagadas` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `mesPeriodo` (
    `id` INT NOT NULL,
    `ufv_id` INT,
    `periodo` VARCHAR(45),
    `descripcion` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `empleado` (
    `id` INT NOT NULL,
    `persona_id` INT,
    `informacionContacto_id` INT,
    `informacionCuenta_id` INT,
    `estadoCivil_id` INT,
    `banco_id` INT,
    `ciudadNacimiento_id` INT,
    `extencionCI_id` INT,
    `informacionTrabajo_id` INT,
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `planilla` (
    `id` INT NOT NULL,
    `empleadoPlanilla_id` INT,
    `tipoCalculo` VARCHAR(45),
    `monto` DECIMAL,
    `procesado` tinyint,
    `created_at` DATETIME,
    `updated_at` BIGINT,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `persona` (
    `id` INT NOT NULL,
    `primerNombre` VARCHAR(45),
    `segundoNombre` VARCHAR(45),
    `apellidoPaterno` VARCHAR(45),
    `apellidoMaterno` VARCHAR(45),
    `sexo` VARCHAR(45),
    `numeroHijos` INT,
    `fechaNacimiento` DATETIME,
    `cedulaIdentidad` VARCHAR(45),
    `numeroAsegurado` INT,
    `nombreSeguro` VARCHAR(45),
    `tipoSeguro` VARCHAR(45),
    `cuentaBancaria` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `solicitudVacacion` (
    `id` INT NOT NULL,
    `persona_id` INT,
    `escalaVacacion_id` INT,
    `fechaSolicitud` DATE,
    `numeroDias` DECIMAL,
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `rol` (
    `id` INT NOT NULL,
    `nombre` VARCHAR(45),
    `created_at` DATETIME DEFAULT 0,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `ciudadNacimiento` (
    `id` INT NOT NULL,
    `nombreCiudad` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `usuario` (
    `id` INT NOT NULL,
    `rol_id` INT,
    `persona_id` INT,
    `email` VARCHAR(150),
    `nombreUsuario` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `escalaVacacion` (
    `id` INT NOT NULL,
    `escalaDias` INT,
    `totalDias` INT,
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `departamento` (
    `id` INT NOT NULL,
    `nombreDepartamento` VARCHAR(150),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `extencionCI` (
    `id` INT NOT NULL,
    `nombreExtencion` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `estadoCivil` (
    `id` INT NOT NULL,
    `detalleEstadoCivil` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `sucursal` (
    `id` INT NOT NULL,
    `nombreSucursal` VARCHAR(150),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `informacionCuenta` (
    `id` INT NOT NULL,
    `esquemaContable_id` INT,
    `contrasena` VARCHAR(255),
    `imagen` VARCHAR(255),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `empleadoPlanilla` (
    `id` INT NOT NULL,
    `persona_id` INT,
    `mesPeriodo_id` INT,
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `informacionContacto` (
    `id` INT NOT NULL,
    `celular` VARCHAR(45),
    `direccionCasa` VARCHAR(150),
    `direccionTrabajo` VARCHAR(150),
    `linkedinUrl` VARCHAR(255),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `permiso` (
    `id` INT NOT NULL,
    `nombre` VARCHAR(45),
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `datosManuales` (
    `id` INT NOT NULL,
    `empleadoPlanilla_id` INT,
    `tipoCalculo` VARCHAR(45),
    `monto` DECIMAL,
    `procesado` tinyint,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);



CREATE TABLE IF NOT EXISTS `banco` (
    `id` INT NOT NULL,
    `nombreBanco` VARCHAR(45),
    `estado` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`)
);


-- Foreign key constraints
ALTER TABLE `banco` ADD CONSTRAINT `fk_banco_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`banco_id`);
ALTER TABLE `datosManuales` ADD CONSTRAINT `fk_datosManuales_empleadoPlanilla_id` FOREIGN KEY(`empleadoPlanilla_id`) REFERENCES `empleadoPlanilla`(`id`);
ALTER TABLE `departamento` ADD CONSTRAINT `fk_departamento_id` FOREIGN KEY(`id`) REFERENCES `informacionTrabajo`(`departamento_id`);
ALTER TABLE `planilla` ADD CONSTRAINT `fk_planilla_empleadoPlanilla_id` FOREIGN KEY(`empleadoPlanilla_id`) REFERENCES `empleadoPlanilla`(`id`);
ALTER TABLE `escalaVacacion` ADD CONSTRAINT `fk_escalaVacacion_id` FOREIGN KEY(`id`) REFERENCES `solicitudVacacion`(`escalaVacacion_id`);
ALTER TABLE `esquemaContable` ADD CONSTRAINT `fk_esquemaContable_id` FOREIGN KEY(`id`) REFERENCES `informacionCuenta`(`esquemaContable_id`);
ALTER TABLE `estadoCivil` ADD CONSTRAINT `fk_estadoCivil_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`estadoCivil_id`);
ALTER TABLE `extencionCI` ADD CONSTRAINT `fk_extencionCI_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`extencionCI_id`);
ALTER TABLE `informacionContacto` ADD CONSTRAINT `fk_informacionContacto_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`informacionContacto_id`);
ALTER TABLE `informacionCuenta` ADD CONSTRAINT `fk_informacionCuenta_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`informacionCuenta_id`);
ALTER TABLE `informacionTrabajo` ADD CONSTRAINT `fk_informacionTrabajo_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`informacionTrabajo_id`);
ALTER TABLE `empleadoPlanilla` ADD CONSTRAINT `fk_empleadoPlanilla_mesPeriodo_id` FOREIGN KEY(`mesPeriodo_id`) REFERENCES `mesPeriodo`(`id`);
ALTER TABLE `rolPermiso` ADD CONSTRAINT `fk_rolPermiso_permiso_id` FOREIGN KEY(`permiso_id`) REFERENCES `permiso`(`id`);
ALTER TABLE `persona` ADD CONSTRAINT `fk_persona_id` FOREIGN KEY(`id`) REFERENCES `usuario`(`persona_id`);
ALTER TABLE `empleadoPlanilla` ADD CONSTRAINT `fk_empleadoPlanilla_persona_id` FOREIGN KEY(`persona_id`) REFERENCES `persona`(`id`);
ALTER TABLE `empleado` ADD CONSTRAINT `fk_empleado_persona_id` FOREIGN KEY(`persona_id`) REFERENCES `persona`(`id`);
ALTER TABLE `usuario` ADD CONSTRAINT `fk_usuario_rol_id` FOREIGN KEY(`rol_id`) REFERENCES `rol`(`id`);
ALTER TABLE `rolPermiso` ADD CONSTRAINT `fk_rolPermiso_rol_id` FOREIGN KEY(`rol_id`) REFERENCES `rol`(`id`);
ALTER TABLE `solicitudVacacion` ADD CONSTRAINT `fk_solicitudVacacion_persona_id` FOREIGN KEY(`persona_id`) REFERENCES `persona`(`id`);
ALTER TABLE `sucursal` ADD CONSTRAINT `fk_sucursal_id` FOREIGN KEY(`id`) REFERENCES `informacionTrabajo`(`sucursal_id`);
ALTER TABLE `ciudadNacimiento` ADD CONSTRAINT `fk_ciudadNacimiento_id` FOREIGN KEY(`id`) REFERENCES `empleado`(`ciudadNacimiento_id`);
ALTER TABLE `mesPeriodo` ADD CONSTRAINT `fk_mesPeriodo_ufv_id` FOREIGN KEY(`ufv_id`) REFERENCES `ufv`(`id`);

COMMIT;
