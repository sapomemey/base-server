"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/message', (request, response) => {
    response.json({
        ok: true,
        message: 'todo esta bien'
    });
});
exports.router.post('/message', (request, response) => {
    const message = request.body.message;
    response.json({
        ok: true,
        message
    });
});
