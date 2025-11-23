const express = require("express");
const router = express.Router();
const controller = require("../controllers/reportesController");

router.get("/", controller.getAll);
router.post("/", controller.create);

module.exports = router;
