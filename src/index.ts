import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import { initializeApp, credential, messaging } from 'firebase-admin';
import { Server } from './server';
import { router } from './routes/router';
import { environment } from './environments/environment';
const serviceAccount = require('./environments/serviceAccountKey.json');
const registrationTokens = [
  'cjgv5wPbVvL4zYqiGqVCTa:APA91bH6HwGw4S5Y4Gwg4KGMJc2Jll26wy0cDU0YPw0Z4LreS13SzD4YCeKuL7_1fZtef0yvNx1R6pM13NHdwHzYuHfKSQrYlSKAlTB2f1mA8qR-3mEJ_ezAHw2jcS1LA0bouArPDCfH'
];

initializeApp({
  credential: credential.cert(serviceAccount)
});

messaging()
  .subscribeToTopic(registrationTokens, 'sapomemey')
  .then(function (response) {
    // See the MessagingTopicManagementResponse reference documentation
    // for the contents of response.
    console.log('Successfully subscribed to topic:', response);
  })
  .catch(function (error) {
    console.log('Error subscribing to topic:', error);
  });


const server = new Server(environment.port);

server.app.use(urlencoded({ extended: true }));
server.app.use(json());
server.app.use(cors({ origin: true, credentials: true }));
server.app.use('/', router);
server.start(() => {
  console.log(`server started ${environment.port}`);
});
