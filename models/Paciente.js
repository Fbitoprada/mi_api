const { DataTypes } = require("sequelize");
const db = require("../db");

const Paciente = db.define("Paciente", {
  id_paciente: { 
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING,
  documento_identidad: DataTypes.STRING,
  correo: DataTypes.STRING,
  direccion: DataTypes.STRING,
  fecha_nacimiento: DataTypes.DATE,
  telefono: DataTypes.STRING
}, {
  tableName: "paciente",
  timestamps: false
});

module.exports = Paciente;