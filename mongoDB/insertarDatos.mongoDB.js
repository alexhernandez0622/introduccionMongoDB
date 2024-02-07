// Select the database to use.
use('Datos');

db.getCollection('Usuarioss').insertMany([
    {
        _id: "0304",
        nombre: "Michael",
        Apellido: "Gonzalez",
        edad: 32,
        fecha_nacimiento: new Date("1998-01-22")
    },
    {
        _id: "0102",
        nombre: "Juan Andrés",
        Apellido: "Gonzalez",
        edad: 33,
        fecha_nacimiento: new Date("1994-01-22")
    }
]);

