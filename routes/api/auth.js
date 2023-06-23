const express = require('express');
const { validateBody } = require("../../middlewares");
const { registerScheme } = require('../../schemes');
const ctrl = require('../../controllers/auth');


const router = express.Router();

router.post("/register", validateBody(registerScheme), ctrl.register);

module.exports = router;