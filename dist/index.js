"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const firebase_admin_1 = require("firebase-admin");
const server_1 = require("./server");
const router_1 = require("./routes/router");
const environment_1 = require("./environments/environment");
const serviceAccount = require('./environments/serviceAccountKey.json');
const registrationTokens = [
    'cjgv5wPbVvL4zYqiGqVCTa:APA91bH6HwGw4S5Y4Gwg4KGMJc2Jll26wy0cDU0YPw0Z4LreS13SzD4YCeKuL7_1fZtef0yvNx1R6pM13NHdwHzYuHfKSQrYlSKAlTB2f1mA8qR-3mEJ_ezAHw2jcS1LA0bouArPDCfH'
];
firebase_admin_1.initializeApp({
    credential: firebase_admin_1.credential.cert(serviceAccount)
});
firebase_admin_1.messaging()
    .subscribeToTopic(registrationTokens, 'sapomemey')
    .then(function (response) {
    // See the MessagingTopicManagementResponse reference documentation
    // for the contents of response.
    console.log('Successfully subscribed to topic:', response);
})
    .catch(function (error) {
    console.log('Error subscribing to topic:', error);
});
const server = new server_1.Server(environment_1.environment.port);
server.app.use(body_parser_1.urlencoded({ extended: true }));
server.app.use(body_parser_1.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', router_1.router);
server.start(() => {
    console.log(`server started ${environment_1.environment.port}`);
});
