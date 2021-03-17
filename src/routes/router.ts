import { Router, Request, Response } from 'express';
import { messaging } from 'firebase-admin';

export const router = Router();

router.get('/message', (request: Request, response: Response) => {
  response.json({
    ok: true,
    message: 'todo esta bien'
  })
});

router.post('/message', (request: Request, response: Response) => {
  const message = request.body.message;

  messaging()
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
  })
});

