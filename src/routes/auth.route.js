const { Router } = require("express");
const { logIn, logInGet } = require("../controllers/auth.controller");
const router = Router();

router.post("/login", logIn);
router.get("/login", logInGet);


module.exports = router;