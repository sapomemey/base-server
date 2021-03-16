import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/message', (request: Request, response: Response) => {
  response.json({
    ok: true,
    message: 'todo esta bien'
  })
});

router.post('/message', (request: Request, response: Response) => {
  const message = request.body.message;

  response.json({
    ok: true,
    message
  })
});

