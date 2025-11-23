const Medico = require("../models/Medico");

exports.getAll = async (req, res) => {
    const data = await Medico.findAll();
    res.json(data);
};

exports.create = async (req, res) => {
    const data = await Medico.create(req.body);
    res.json(data);
};