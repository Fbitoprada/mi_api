const Reporte = require("../models/Reporte");

exports.getAll = async (req,res)=>{
 const data = await Reporte.findAll();
 res.json(data);
};

exports.create = async (req,res)=>{
 const data = await Reporte.create(req.body);
 res.json(data);
};
