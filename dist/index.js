"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const server_1 = require("./server");
const router_1 = require("./routes/router");
const environment_1 = require("./environments/environment");
const server = new server_1.Server(environment_1.environment.port);
server.app.use(body_parser_1.urlencoded({ extended: true }));
server.app.use(body_parser_1.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', router_1.router);
server.start(() => {
    console.log(`server started ${environment_1.environment.port}`);
});
