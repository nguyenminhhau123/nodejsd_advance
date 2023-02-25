var express = require("express");
var router = express.Router();
let HomeController = require("../controller/HomeController");
router.get("/", HomeController.getHomePage);

module.exports = router;
