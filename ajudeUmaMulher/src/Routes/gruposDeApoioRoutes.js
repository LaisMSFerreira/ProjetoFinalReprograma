const Controller = require("../Controllers/gruposDeApoioController");
const express = require("express");
const router = express.Router();

router.get("/lista", Controller.getAllGroups);
router.get("/name", Controller.getGroupByName);
router.get("/localization", Controller.getGroupsByLocalization);
router.post("/add", Controller.addNewGroup);
router.put("/update/:id", Controller.updateServicesById);
router.patch("/change/:id", Controller.updateAttendenceById);
router.delete("/delete/:id", Controller.deleteGroup);
router.delete("/delete/name", Controller.deleteGroupByName);


module.exports = router