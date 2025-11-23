const Cita = require("../models/Cita");

exports.getAll = async (req, res) => {
    const data = await Cita.findAll();
    res.json(data);
};

exports.create = async (req, res) => {
    const data = await Cita.create(req.body);
    res.json(data);
};

exports.updateEstado = async (req, res) => {
    await Cita.update(
        { estado: req.body.estado },
        { where: { id_cita: req.params.id } }
    );
    res.json({ msg: "Estado actualizado" });
};