const Historia = require("../models/HistoriaClinica");

exports.getAll = async (req, res) => {
  const data = await Historia.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  const data = await Historia.create(req.body);
  res.json(data);
};