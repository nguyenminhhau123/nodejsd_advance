var express = require("express");
var router = express.Router();
let HomeController = require("../controller/HomeController");
/* GET users listing. */
router.get("/", HomeController.getUserPage);

module.exports = router;
