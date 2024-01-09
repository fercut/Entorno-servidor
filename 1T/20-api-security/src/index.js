/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import app from './app.js';
import logger from './utils/index.js';

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is listening on port http://localhost:${port}`);
});
