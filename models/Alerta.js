const { DataTypes } = require("sequelize");
const db = require("../db");

const Alerta = db.define("alertas", {
 id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 mensaje: DataTypes.STRING,
 nivel: DataTypes.STRING
},{ timestamps:false });

module.exports = Alerta;