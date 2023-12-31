/* eslint-disable import/no-unresolved */
import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.colorize(),
        winston.format.printf(info => `[${info.timestamp}] (${info.level}): ${info.message}`),
      ),
    }),
  ],
});

export default logger;
