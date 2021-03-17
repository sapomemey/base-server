"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const firebase_admin_1 = require("firebase-admin");
exports.router = express_1.Router();
exports.router.get('/message', (request, response) => {
    response.json({
        ok: true,
        message: 'todo esta bien'
    });
});
exports.router.post('/message', (request, response) => {
    const message = request.body.message;
    firebase_admin_1.messaging()
        .send({
        topic: 'sapomemey',
        data: {
            name: 'sapomemey'
        }
    })
        .then((reponsePush) => console.log(`send messaging: ${reponsePush}`))
        .catch((error) => console.log(`error: ${error}`));
    response.json({
        ok: true,
        message
    });
});
