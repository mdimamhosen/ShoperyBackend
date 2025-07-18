"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    // add more fields here
});
const AuthModel = (0, mongoose_1.model)('Auth', AuthSchema);
exports.default = AuthModel;
