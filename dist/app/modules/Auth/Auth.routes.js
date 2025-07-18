"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_controller_1 = require("./Auth.controller");
const router = (0, express_1.Router)();
// Define routes
router.get('/', Auth_controller_1.AuthController.getAll);
exports.default = router;
