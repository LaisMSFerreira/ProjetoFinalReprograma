const gruposDeApoioController = require("../Controllers/gruposDeApoioController")
const express = require("express")
const router = express.Router()

router.get("/lista", gruposDeApoioController.getAllGroups)
router.get("/name", gruposDeApoioController.getGroupByName) 
router.get("/localization", gruposDeApoioController.getGroupsByLocalization)
router.post("/add", gruposDeApoioController.addNewGroup)
router.put("/update/:id", gruposDeApoioController.updateServicesById)
router.patch("/change/:id", gruposDeApoioController.updateAttendenceById)
router.delete("/delete/:id", gruposDeApoioController.deleteGroupsById)
router.delete("/delete/name", gruposDeApoioController.deleteGroupByName)


module.exports = router