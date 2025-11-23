const { DataTypes } = require("sequelize");
const db = require("../db");
const Paciente = require("./Paciente");
const Medico = require("./Medico");

const Cita = db.define("cita_medica", {
    id_cita: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: "Programada"
    },
    id_paciente: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    id_medico: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: "cita_medica",
    timestamps: false
});

// RELACIONES
Cita.belongsTo(Paciente, { foreignKey: "id_paciente" });
Paciente.hasMany(Cita, { foreignKey: "id_paciente" });

Cita.belongsTo(Medico, { foreignKey: "id_medico" });
Medico.hasMany(Cita, { foreignKey: "id_medico" });

module.exports = Cita;