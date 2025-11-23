const Alerta = require("../models/Alerta");

exports.getAll = async (req,res)=>{
 const data = await Alerta.findAll();
 res.json(data);
};

exports.create = async (req,res)=>{
 const data = await Alerta.create(req.body);
 res.json(data);
};
