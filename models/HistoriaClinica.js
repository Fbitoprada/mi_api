const { DataTypes } = require("sequelize");
const db = require("../db");

const Historia = db.define("historias_clinicas", {
  id_historia: { 
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  medico_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  paciente_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  fecha_apertura: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: true
  },
  antecedentes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diagnostico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tratamiento: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { timestamps: false });

module.exports = Historia;