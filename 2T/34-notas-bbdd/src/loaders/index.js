import expressLoader from './express-loader.js';
import mongodbLoader from './mongodb-loader.js';
import smtpLoader from './smtp-loader.js';

export function init(server, config){
    expressLoader(server);
    mongodbLoader(config.database);
    smtpLoader(config.smtp);
}
