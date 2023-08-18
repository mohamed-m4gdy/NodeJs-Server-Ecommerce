import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import globalError from './errors/globalErrors';
import errorMiddleware from './middleware/errors/errorMiddleware';
import config from './utils/config';
import db from './database';

const PORT = config.port || 5000;
const app: Application = express();

// Test db
db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((err) => {
      client.release();
      console.log(err.stack);
    });
});

// bodyParser Is A middleware To Parse Post Requests Data
app.use(express.json());

// Morgan Middleware To Log All Requests
app.use(morgan('common'));

// Helmet Is A Middleware To Secure The Server And Hide Data In Header
app.use(helmet());

// Rate Limit Is a Middleware To limit Request on same api
app.use(
  RateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too Many Request From This Api, Please Try Again After an Hour',
  }),
);

// Add a Get Request To /
app.get('/', (req: Request, res: Response) => {
  // throw new Error('qweqweqwe');
  res.json({
    message: 'hello World From Get',
  });
});

// Add a Post Request To /
app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: 'hello World From Post',
    data: req.body,
  });
});

// Global Errors
// If The Endpoint is not Exist
app.use(globalError);
// If The Endpoint Is Exist but There is a Error
app.use(errorMiddleware);

// Start The Server
app.listen(PORT, () => {
  console.log(`Server is Running Port: ${PORT}`);
});

export default app;
