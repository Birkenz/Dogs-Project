const { Router } = require("express");
const getAllDogs = require("./handlers/dogsHandler");

const router = Router();

// 📍 GET | /dogs
//Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
router.get("/dogs", getAllDogs);

// 📍 GET | /dogs/:idRaza
// -Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -La raza es recibida por parámetro (ID).
// -Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -Debe funcionar tanto para los perros de la API como para los de la base de datos.

router.get("/dogs/:idRaza");

// 📍 GET | /dogs/name?="..."
// -Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -Si no existe la raza, debe mostrar un mensaje adecuado.
// -Debe buscar tanto los de la API como los de la base de datos.

router.get("/dogs/name");

// 📍 POST | /dogs
// Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
// Toda la información debe ser recibida por body.
// Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).

router.post("/dogs" )

// 📍 GET | /temperaments
// Obtiene todos los temperamentos existentes.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

module.exports = router;
