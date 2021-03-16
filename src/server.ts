import express from 'express';

export class Server {
  app: express.Application = express();

  constructor(private port: number) { }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}
