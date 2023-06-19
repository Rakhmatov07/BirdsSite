const { Router } = require("express");
const { createContact } = require("../controllers/contact.controller");
const router = Router();

router.post('/create', createContact);

module.exports = router;