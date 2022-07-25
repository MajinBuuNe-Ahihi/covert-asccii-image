// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import createError from 'http-errors';

dotenv.config();

const app: Application = express();

const port = process.env.PORT && Number(process.env.PORT);

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json('oke ');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createError.NotFound());
});

const errorRequest: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response
) => {
  res.sendStatus(err.status || 500);
  res.send({
    message: 'fail',
    status: 500,
  });
};
app.use(errorRequest);

app.listen(port, () => {
  console.log(`run on port ${port}`);
});
