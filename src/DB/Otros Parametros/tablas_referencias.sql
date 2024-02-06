/*
    esta tabla contiene toda la información 
    de los regimenes en GIRO
*/
CREATE TABLE gestion_salud_regimenes
(
    Codigo INT,
    NombreRegimen VARCHAR(100),
    TipoUsuario VARCHAR(100),
    PRIMARY KEY(Codigo)
);

/*
    esta tabla contiene toda la información
    de las ocupaciones en GIRO
*/
CREATE TABLE ocupaciones
(
    Id INT,
    Codigo VARCHAR(50),
    NombreUcupacion VARCHAR(255),
    PRIMARY KEY(Id)
);

/*
    Esta tabla contiene los tipo de documentos
    en GIRO
*/
CREATE TABLE tipos_identificacion(
    Codigo VARCHAR(5),
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100)
);

/*
    Esta tabla contiene los diagnosticos por la cie 10
    en GIRO
*/
CREATE TABLE diagnostico_cie10(

);

