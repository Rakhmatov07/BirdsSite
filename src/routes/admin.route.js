const { Router } = require("express");
const isAuth = require('../middlewares/isAuth');
const { dashboard, logOut } = require("../controllers/admin.controller");
const router = Router();

router.get('/admin', isAuth, dashboard);
router.get('/logout', isAuth, logOut);
// router.get('/create', create);


module.exports = router;