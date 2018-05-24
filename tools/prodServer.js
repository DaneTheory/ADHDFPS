/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { chalkProcessing } from './chalkConfig';

const port = process.env.PORT || 8222

console.log(chalkProcessing(`Opening production build on port: ${port}`));

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`ADHDFPS App Server running on port: ${port} in production mode!`)
});
