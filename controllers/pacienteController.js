const Paciente = require("../models/Paciente");

exports.getAll = async (req, res) => {
    const data = await Paciente.findAll();
    res.json(data);
};

exports.getOne = async (req, res) => {
    const data = await Paciente.findByPk(req.params.id);
    res.json(data);
};

exports.create = async (req, res) => {
    const data = await Paciente.create(req.body);
    res.json(data);
};

exports.update = async (req, res) => {
    await Paciente.update(req.body, {
        where: { id_paciente: req.params.id }
    });
    res.json({ msg: "Paciente actualizado" });
};

exports.delete = async (req, res) => {
    await Paciente.destroy({
        where: { id_paciente: req.params.id }
    });
    res.json({ msg: "Paciente eliminado" });
};