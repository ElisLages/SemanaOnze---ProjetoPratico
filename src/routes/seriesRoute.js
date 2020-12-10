const express = require('express')
const router = express.Router()
const controller = require("../controller/seriesController")

router.get("/", controller.getAllSeries)
router.post("/", controller.createSeries)
router.get("/:id", controller.getById)
router.put("/:id", controller.updateSeries)


module.exports = router