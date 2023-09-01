import express, { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router as user_rout } from '../apis/users';
import '../config/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/users', user_rout);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
