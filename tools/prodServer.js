// This file configures a web server for testing the production build
// on your local machine.

// import browserSync from 'browser-sync';
// import historyApiFallback from 'connect-history-api-fallback';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
// browserSync({
//   port: 8080,
//   ui: {
//     port: 8081
//   },
//   server: {
//     baseDir: 'dist'
//   },
//
//   files: [
//     'src/*.html'
//   ],
//
//   middleware: [historyApiFallback()]
// });

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(process.env.PORT || 8081);
