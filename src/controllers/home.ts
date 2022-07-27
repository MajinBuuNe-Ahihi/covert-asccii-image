import { Response, Request } from 'express';

export function home(req: Request, res: Response) {
  return res.render('index.ejs');
}
