import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import { Server } from './server';
import { router } from './routes/router';
import { environment } from './environments/environment';

const server = new Server(environment.port);

server.app.use(urlencoded({ extended: true }));
server.app.use(json());
server.app.use(cors({ origin: true, credentials: true }));
server.app.use('/', router);
server.start(() => {
  console.log(`server started ${environment.port}`);
});
