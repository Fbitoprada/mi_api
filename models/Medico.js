const { DataTypes } = require("sequelize");
const db = require("../db");

const Medico = db.define("medico", {
    id_medico: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: "medico",
    timestamps: false
});

module.exports = Medico;