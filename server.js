import express from 'express';
import cors from 'cors';
import {
  mongodb
} from './routes/db.js';
import transactionsRoutes from './routes/transactions.routes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import serverless from 'serverless-http'

dotenv.config();
const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true
  })
);
app.use(express.json());
app.use(cookieParser());
mongodb();
app.use(transactionsRoutes);

const port = process.env.PORT || 4044;
app.listen(port);
console.log(`server is running in port ${port}`);