require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

// Importar rutas
const pacientesRoutes = require("./routes/pacientes");
const medicosRoutes = require("./routes/medicos");
const citasRoutes = require("./routes/citas");
const historiasRoutes = require("./routes/historias");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/medicos", medicosRoutes);
app.use("/api/citas", citasRoutes);
app.use("/api/historias", historiasRoutes);

// Probar conexión BD
db.authenticate()
  .then(() => console.log("BD conectada"))
  .catch((err) => console.log("Error BD:", err));

// Levantar servidor
app.listen(3000, () => console.log("Servidor en puerto 3000"));