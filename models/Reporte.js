const { DataTypes } = require("sequelize");
const db = require("../db");

const Reporte = db.define("reportes", {
 id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 titulo: DataTypes.STRING,
 descripcion: DataTypes.TEXT
},{ timestamps:false });

module.exports = Reporte;