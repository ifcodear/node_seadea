const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // Middleware para parsear a Json la rta
const port = process.argv[2] || 7777;

// Importo tablas del archivo de modelo
const Choferes = require("./modelo.js").models.Choferes;
const Vehiculos = require("./modelo.js").models.Vehiculos;
const Habilitaciones = require("./modelo.js").models.Habilitaciones;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//No quiero abrir mas el index.html, quiero que lo reciba el cliente http
//uso un middleware para server statico , o un apache/etc/etc

//Por errores de CORS OJO ESTO SOLO DEBUG
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static("public")); //Hosteo la carpeta public con el index.html
//add Choferes
app.post("/choferes", async (req, res) => {
  const { id, nombre, apellido, dni, licencia, edad } = req.body;
  try {
    await Choferes.create({
      id_chofer: id,
      nombre,
      apellido,
      dni,
      licencia,
      edad,
    });
    res.send("Chofer creado con éxito");
  } catch (error) {
    console.error("Error al crear chofer:", error);
    res.status(500).send("Error al crear chofer");
  }
});
//read all choferes
app.get("/choferes", async (req, res) => {
  try {
    const choferes = await Choferes.findAll();
    res.json(choferes);
  } catch (error) {
    console.error("Error al leer choferes:", error);
    res.status(500).send("Error al leer choferes");
  }
});
//read chofer dni
app.get("/choferes/:dni", async (req, res) => {
  try {
    let chofer = await Choferes.findOne({ where: { dni: req.params.dni } });
    res.json(chofer);
  } catch (error) {
    console.error("Error al leer chofer:", error);
    res.status(500).send("Error al leer chofer");
  }
});
//actualizo chofer busco por dni
app.put("/choferes/:dni", async (req, res) => {
  const { dni } = req.params;
  const { nombre, apellido, edad } = req.body;
  try {
    await Choferes.update({ nombre, apellido, edad }, { where: { dni } });
    res.send("Datos de chofer actualizados con éxito");
  } catch (error) {
    console.error("Error al actualizar chofer:", error);
    res.status(500).send("Error al actualizar chofer");
  }
});
//elimino chofer por nombre
app.delete("/choferes/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    await Choferes.destroy({ where: { nombre } });
    res.send("Chofer eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar chofer:", error);
    res.status(500).send("Error al eliminar chofer");
  }
});

// -- VEHICULOS -- //
//read all vehiculos
app.get("/vehiculos", async (req, res) => {
  try {
    const vehiculos = await Vehiculos.findAll();
    res.json(vehiculos);
  } catch (error) {
    console.error("Error al leer vehiculos:", error);
    res.status(500).send("Error al leer vehiculos");
  }
});
//add Vehiculos # Codigo Agregado
app.post("/vehiculos", async (req, res) => {
  const { id, patente, carga_util, licencia_minima, en_uso } = req.body;
  try {
    await Choferes.create({
      id_chofer: id,
      patente,
      carga_util,
      licencia_minima,
      en_uso,
    });
    res.send("Vehiculo creado con éxito");
  } catch (error) {
    console.error("Error al crear vehicolo:", error);
    res.status(500).send("Error al crear vehicolo");
  }
});
//Read Vehiculo por patente
app.get("/vehiculos/:patente", async (req, res) => {
  try {
    let vehiculo = await Vehiculos.findOne({
      where: { patente: req.params.patente },
    });
    res.json(vehiculo);
  } catch (error) {
    console.error("Error al leer Vehiculo:", error);
    res.status(500).send("Error al leer Vehiculo");
  }
});
//Update Vehiculos por patente
app.put("/vehiculos/:patente_", async (req, res) => {
  const { patente_ } = req.params;
  const { patente, carga_util, licencia_minima, en_uso } = req.body;
  try {
    await Vehiculos.update(
      { patente, carga_util, licencia_minima, en_uso },
      { where: { patente: patente_ } }
    );
    res.send("Datos del vehiculo actualizados con éxito");
  } catch (error) {
    console.error("Error al actualizar vehiculo:", error);
    res.status(500).send("Error al actualizar vehiculo");
  }
});
//Delete Vehiculos
app.delete("/vehiculos/:patente", async (req, res) => {
  const { patente } = req.params;
  try {
    await Vehiculos.destroy({ where: { patente } });
    res.send("Vehiculo eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar el vehiculo:", error);
    res.status(500).send("Error al eliminar el vehiculo");
  }
});
// -- HABILITACIONES -- //
//read all habilitaciones
app.get("/habilitaciones", async (req, res) => {
  try {
    const habilitaciones = await Habilitaciones.findAll();
    res.json(habilitaciones);
  } catch (error) {
    console.error("Error al leer habilitaciones:", error);
    res.status(500).send("Error al leer habilitaciones");
  }
});
//Create habilitaciones
app.post("/habilitaciones", async (req, res) => {
  const { id_chofer, id_vehiculo } = req.body;
  try {
    await Choferes.create({
      id_chofer,
      id_vehiculo,
    });
    res.send("habilitacion creado con éxito");
  } catch (error) {
    console.error("Error al crear habilitacion:", error);
    res.status(500).send("Error al crear habilitacion");
  }
});
// Read habilitaciones por parametros id_chofer id_vheiculo
app.get("/habilitaciones/:id_chofer/:id_vehiculo", async (req, res) => {
  try {
    let habilitacion = await Habilitaciones.findOne({
      where: { id_chofer: req.params.id_chofer, id_vehiculo: id_vehiculo },
    });
    res.json(vehiculo);
  } catch (error) {
    console.error("Error al leer Vehiculo:", error);
    res.status(500).send("Error al leer Vehiculo");
  }
});
//Delete habilitaciones
app.delete("/habilitaciones/:id_chofer/:id_vehiculo", async (req, res) => {
  const { id_chofer, id_vehiculo } = req.params;
  try {
    await Habilitaciones.destroy({ where: { id_chofer, id_vehiculo } });
    res.send("habilitacion eliminada con éxito");
  } catch (error) {
    console.error("Error al eliminar la habilitacion:", error);
    res.status(500).send("Error al eliminar la habilitacion");
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

//curl -X GET 127.0.0.1:7777/choferes
//curl -X GET 127.0.0.1:7777/vehiculos
//curl -X GET 127.0.0.1:7777/habilitaciones

//curl -X POST -d '{"id":2,"nombre":"John","apellido":"Cohnor","dni":"22.123.123","licencia":"B22" ,"edad":17}' -H "Content-Type: application/json" 127.0.0.1:7777/choferes
//curl -X DELETE 127.0.0.1:7777/choferes/ArtonSena
//curl -X PUT -d '{"nombre":"John","apellido":"Galvez","edad":44}' -H "Content-Type: application/json" 127.0.0.1:7777/choferes/333333
