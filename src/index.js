// import express from 'express';

// const app = express();

// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// ==================================
// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Page not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port  ${PORT}`);
// });
// =======================================

// import cors from 'cors';
// import pino from 'pino-http';
// import express from 'express';

// const PORT = 3000;
// const app = express();

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Page not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port  ${PORT}`);
// });
// app.use(cors());

import { startServer } from './server.js';

startServer();
