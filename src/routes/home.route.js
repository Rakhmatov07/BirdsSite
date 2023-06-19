const { Router } = require("express");
const { home, aboutPage, birdsPage, contactPage, testimonialPage } = require("../controllers/home.controller");
const router = Router();

router.get("/", home);
router.get("/birds", birdsPage);
router.get("/about", aboutPage);
router.get("/contact", contactPage);
router.get("/testimonial", testimonialPage);

module.exports = router;